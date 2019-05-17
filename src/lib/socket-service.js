import io from 'socket.io-client';

import appStore from '../stores/app-store';

// Connect App with server
export const socket = io(process.env.REACT_APP_URL);

/*
** Service listeners
*/

// Incoming server msg
socket.on('message', (sms) => console.log(sms));

// Incoming nearOpiniers
socket.on('NearOpiners', (opiners) => appStore.inMyZone(opiners));



/*
** Service emitters
*/

// Send logged user info to server
export function me(user) {
    socket.emit('me', user);
}

// Send new position to server
export function updatePosition(update) {
    socket.emit('update-position', update);
}

// InMyZone calc
export function inMyZone(userId) {
    socket.emit(`InMyZone`, userId);
}
