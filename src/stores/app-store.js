import { observable } from 'mobx'; 

import * as socketService from '../lib/socket-service';

class AppStore {
    user = null;
    intervalId = null;
    currentPosition = [];
    @observable nearOpiners = [];
    socket = "";

    // Store and send logged user info to server to update socket info
    me() {
        socketService.me(this.user._id);
        this.watchingPosition();
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
        socketService.updatePosition({userId: this.user._id, position: this.currentPosition});

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
                pos.coords.latitude,
                pos.coords.longitude
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
        socketService.stopUpdateInterval();
    }

    serverSocketLogout() {
        socketService.logout(this.user._id);
        this.user = null;
    }

    // Query opiners in my zone
    inMyZone() {
        socketService.inMyZone(this.user._id);
    }
}

const appStore = new AppStore();

export default appStore;