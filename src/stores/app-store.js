import { observable } from 'mobx';

import { login, findNear, askUser, decline, accept, sendChatMessage } from '../lib/socket-service';
import { socket } from '../lib/socket-service';

import clientStore from './user-store';

class AppStore {
    user = null;
    intervalId = null;
    currentPosition = [];
    nearOpiners = [];

    // Store and send logged user info to server to update socket info
    me(user) {
        this.user = user;
        socket.me(user);
    }

    // Refresh user position every 10 seconds
    watchingPosition() {
        this.cancelWatchingPosition();
        this.intervalId = window.setInterval(() => {
            this.updatePosition();
        }, 10000);
    }

    // Update user position
    updatePosition() {
        this.getPosition();
        socket.updatePosition({userId: this.user._id, position: this.currentPosition});
        //socketService.findNear({ position: this.currentPosition });
    }

    // Get user current position
    getPosition() {
        if (!navigator.geolocation) {
            toast.error("Sorry, can't retrieve your current position.", {
              position: toast.POSITION.BOTTOM_RIGHT
            });
            return;
        }
        navigator.geolocation.getCurrentPosition(async pos => {
            this.currentPosition = [
                pos.coords.longitude,
                pos.coords.latitude
            ];
        }, () => {
            toast.error("Sorry, can't retrieve your current position.", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        });
    }

    // Cancel user update position interval
    cancelWatchingPosition() {
        clearInterval(this.intervalId);
    }

    // Query opiners in my zone
    inMyZone() {
        
    }
}

const appStore = new AppStore();

export default appStore;