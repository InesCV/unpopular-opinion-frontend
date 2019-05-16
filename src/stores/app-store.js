import { observable } from 'mobx';

import auth from "./auth-service";
import { login, findNear, askUser, decline, accept, sendChatMessage } from '../lib/socket-service';
import socketService from '../lib/socket-service';

import clientStore from './client-store';

class AppStore {
    @observable nearUsers = [];
    @observable user = null;
    @observable currentPosition = [];
    @observable userRequest = null;
    @observable chatUser = null;
    @observable chatMessages = [];

    setUser(user) {
        this.getPosition();
        if (!user.username === this.user.username) {
            this.user = user;
        }
        refreshingPosition();
    }

    getPosition() {
        if (!navigator.geolocation) {
            toast.error(`Sorry, can't retrieve your current position.`, {
              position: toast.POSITION.BOTTOM_RIGHT
            });
            return;
        }
        navigator.geolocation.getCurrentPosition(async pos => {
            this.currentPosition = [
                pos.coords.longitude,
                pos.coords.latitude
            ];
            clientStore.setNextStep(`near`);
        }, () => {
            toast.error(`Sorry, can't retrieve your current position.`, {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        });
    
    }

    updatePosition(actualPosition) {
        if (actualPosition)
            this.currentPosition = actualPosition;
        
        if (!this.user)
            return;
        
        socketService.findNear({ position: this.currentPosition });
    }


    foundNear(users) {
        this.nearUsers = users;
        if (!this.user.profilePictureUrl)
            this.user = this.findUserById(this.user._id);
    }

    async login({ displayName, gender, message }) {
        clientStore.setLoading(`Trying to retrieve your current position...`)
        if (!navigator.geolocation) {
            clientStore.setNotification(`Sorry, can't retrieve your current position.`);
            clientStore.setLoading(false);
            return;
        }
        navigator.geolocation.getCurrentPosition(async pos => {
            this.currentPosition = [
                pos.coords.longitude,
                pos.coords.latitude
            ];
            clientStore.setLoading(`Connecting you with people nearby...`);
            const _id = await login({ displayName, position: this.currentPosition, gender, message });
            this.user = { displayName, gender, message , _id };
            clientStore.setNextStep(`near`);
            clientStore.setLoading(false);
            refreshingPosition();
        }, () => {
            clientStore.setNotification(`Sorry, can't retrieve your current position.`);
            clientStore.setLoading(false);
        });
    }

    findUserById(id) {
        return this.nearUsers.find(({ _id }) => _id === id);
    }

    askUser(id) {
        askUser(id);
        clientStore.setLoading(`Waiting for an answer...`);
    }

    chatRequest(id) {
        // Is user even in my list?
        const userWhoAsked = this.nearUsers.find(u => u._id === id);
        console.log(`Got chat request`, userWhoAsked);
        if (!userWhoAsked)
            return;
        
        clientStore.setNextStep(`request`);
        this.userRequest = id;
    }

    decline() {
        if (!this.userRequest)
            return;
        
        decline(this.userRequest);
        clientStore.setNextStep(`near`);
    }

    accept() {
        if (!this.userRequest)
            return;
        
        accept(this.userRequest);
        this.openChat(this.userRequest);
    }

    accepted(id) {
        clientStore.setLoading(false);
        this.openChat(clientStore.askUser);
    }

    denied(id) {
        clientStore.setNextStep(`near`);
        clientStore.setLoading(false);
        clientStore.setNotification(`I don't want to chat right now, sorry.footer__text`);
    }

    openChat(userId) {
        const found = this.findUserById(userId);
        if (!found) {
            clientStore.setNotification(`Sorry, I'm offline now.`);
            return;
        }
        this.chatUser = userId;
        clientStore.setNextStep(`chat`);
    }

    closeChat() {
        this.chatUser = null;
        this.chatMessages = [];
        clientStore.setNextStep(`near`);
    }

    sendChatMessage(m) {
        if (!m)
            return;
        sendChatMessage({ userId: this.chatUser, message: m });
        this.chatMessages.push({
            userId: this.user._id,
            message: m
        });
        // THIS certainly doens't belong here: FIND A BETTER SOLUTION!
        window.scrollTo(0, 100000000000)
    }

    chatMessage(m) {
        this.chatMessages.push({
            userId: this.chatUser,
            message: m
        });
        // THIS certainly doens't belong here: FIND A BETTER SOLUTION!
        window.scrollTo(0, 100000000000)
    }
}

const appStore = new AppStore();

// Refresh user position every 3 seconds
function refreshingPosition() {
    navigator.geolocation.watchPosition((pos) => {
        appStore.updatePosition([
            pos.coords.longitude,
            pos.coords.latitude
        ]);
    }, error => {
        toast.error(`Sorry, can't retrieve your current position.`, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    });
    
    window.setInterval(() => {
        appStore.updatePosition();
    }, 3000);
}

export default appStore;