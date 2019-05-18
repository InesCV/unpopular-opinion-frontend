import { observable } from 'mobx'; 

import * as socketService from '../lib/socket-service';

class AppStore {
    user = null;
    intervalId = null;
    currentPosition = [];
    nearOpiners = [];
    socket = "";

    // Store and send logged user info to server to update socket info
    async me(user) {
        this.user = user;
        await socketService.me(user._id);
        this.updatePosition();
        //this.watchingPosition();
    }

    // Refresh user position every 5 seconds
    watchingPosition() {
        this.cancelWatchingPosition();
        this.intervalId = window.setInterval(() => {
            this.updatePosition();
        }, 5000);
    }

    // Update user position
    async updatePosition() {
        await this.getPosition();
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
            socketService.updatePosition({userId: this.user._id, position: this.currentPosition});
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