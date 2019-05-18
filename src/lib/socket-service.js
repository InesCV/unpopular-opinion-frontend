import io from 'socket.io-client';

import appStore from '../stores/app-store';

// Connect App with server
const socket = io(process.env.REACT_APP_URL);

/*
** Service listeners
*/

// Incoming server msg
socket.on('message', (sms) => console.log(sms));

// Incoming nearOpiniers
socket.on('NearUopers', (nearUopers) => {
    console.log('Front - uopers: ', nearUopers);
    // appStore.nearOpiners = opiners;
});



/*
** Service emitters
*/

// Send logged user info to server
export function me(userId) {
    socket.emit('me', userId);
}

// Send new position to server
export function updatePosition(update) {
    socket.emit('update-position', update);
}

// Send bbdd update interval stop
export function stopUpdateInterval() {
    socket.emit('stopUpdateInterval');
}

// Send logout to server
export function logout(userId) {
    socket.emit('logout', userId);
}

// InMyZone calc
export function inMyZone(userId) {
    socket.emit(`InMyZone`, userId);
}
