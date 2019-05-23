import { observable } from 'mobx'; 
import { toast } from 'react-toastify';

import * as socketService from '../lib/socket-service';

class AppStore {
    user = null;
    intervalId = null;
    currentPosition = null;
    @observable.shallow nearUopers = null;

    // Store and send logged user info to server to update socket info
    me(user) {
        this.user = user;
        if (user) {
            socketService.me(user._id);
            // this.watchingPosition();
        }
    }

    // Refresh user position every 10 seconds
    watchingPosition() {
        this.cancelWatchingPosition();
        this.intervalId = window.setInterval(() => {
            this.updatePosition();
            // this.inMyZone(this.user._id);
        }, 10000);
    }

    // Cancel user update position interval
    cancelWatchingPosition() {
        clearInterval(this.intervalId);
        this.intervalId = null;
        //socketService.stopUpdateInterval();
    }

    // Update user position
    async updatePosition() {
        await this.getPosition();
        if(this.currentPosition)
            socketService.updatePosition({userId: this.user._id, position: this.currentPosition});
    }

    // Get user current position
    getPosition() {
        if (!navigator.geolocation) {
            this.cancelWatchingPosition();
            toast.error("Sorry, your navigator doesn't support geolocation", {
              position: toast.POSITION.BOTTOM_RIGHT
            });
            return;
        }
        navigator.geolocation.getCurrentPosition(async pos => {
                this.currentPosition = [
                    pos.coords.longitude,
                    pos.coords.latitude
                ];
            }, 
            () => {
                this.cancelWatchingPosition();
                toast.error("Sorry, we can't retrieve your current position", {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            }
        );
    } 

    // Query opiners in my zone
   inMyZone(userId) {
        this.updatePosition();
        socketService.inMyZone(userId);
    }
    
    // Logout
    serverSocketLogout() {
        this.cancelWatchingPosition();
        socketService.logout(this.user._id);
        this.user = null;
    }
}

const appStore = new AppStore();

export default appStore;