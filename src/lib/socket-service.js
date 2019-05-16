import io from 'socket.io-client';

import appStore from '../stores/app-store';

// Connect App with server
export const socket = io(process.env.REACT_APP_URL);

// App listeners
socket.on('message', (resp) => console.log(resp));
socket.on(`found-near`, (resp) => appStore.foundNear(resp));
socket.on(`chat-request`, (resp) => appStore.chatRequest(resp));
socket.on(`request-accepted`, (resp) => appStore.accepted(resp));
socket.on(`request-denied`, (resp) => appStore.denied(resp));
socket.on(`chat-message`, (resp) => appStore.chatMessage(resp));

// App emitters
export function login({ displayName, position, gender, message }) {
    return new Promise((resolve) => {
        socket.emit(`login`, { displayName, position, gender, message });
        socket.once(`logged-in`, resolve);
    });
}

export function findNear({ position }) {
    socket.emit(`find-near`, position);
}

export function askUser(id) {
    socket.emit(`ask-user`, id);
}

export function decline(id) {
    socket.emit(`request-denied`, id);
}

export function accept(id) {
    socket.emit(`request-accepted`, id);
}

export function sendChatMessage({ userId, message }) {
    socket.emit(`send-chat-message`, { userId, message });
}

window.addEventListener(`unload`, () => {
    socket.emit(`delete`);
});