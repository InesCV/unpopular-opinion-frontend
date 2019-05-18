import { toast } from 'react-toastify';

import * as socketService from '../lib/socket-service';

class AppStore {
    user = null;
    intervalId = null;
    currentPosition = [0, 0];
    nearUopers = null;
    socket = "";

    // Store and send logged user info to server to update socket info
    me(user) {
        this.user = user;
        if (user) {
            socketService.me(this.user._id);
            this.watchingPosition();
        }
    }

    // Refresh user position every 10 seconds
    watchingPosition() {
        this.cancelWatchingPosition();
        this.intervalId = window.setInterval(() => {
            if(this.currentPosition)
                this.updatePosition();
        }, 10000);
    }

    // Cancel user update position interval
    cancelWatchingPosition() {
        clearInterval(this.intervalId);
        this.intervalId = null;
        //socketService.stopUpdateInterval();
    }

    // Update user position
    updatePosition() {
        this.getPosition();
        socketService.updatePosition({userId: this.user._id, position: this.currentPosition});
    }

    // Get user current position
    getPosition() {
        if (!navigator.geolocation) {
            toast.error("Sorry, your navigator doesn't support geolocation.", {
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
                toast.error("Sorry, can't retrieve your current position.", {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            }
        );
    } 

    // Query opiners in my zone
    inMyZone() {
        socketService.inMyZone(this.user._id);
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