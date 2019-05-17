import { observable } from 'mobx'; 

class UserStore {
    @observable history = [`login`];
    @observable step = `login`;
    @observable askUser = null;
    @observable loading = false;
    @observable notification = null;

    setNextStep(s) {
        this.step = s;
        this.history.push(s);
    }

    askUserById(id) {
        this.askUser = id;
        this.step = `ask-user`;
    }

    goBack() {
        this.setNextStep(this.history[this.history.length - 1]);
    }

    setNotification(n) {
        this.notification = n;
        window.setTimeout(() => {
            this.notification = null;
        }, 2000);
    }
}

const userStore = new UserStore();

export default userStore;