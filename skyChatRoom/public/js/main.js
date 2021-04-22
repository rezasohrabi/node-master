const sendMessageForm = document.querySelector('.send-message-form');

const socket = io();

sendMessageForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = e.target.elements.message.value;

    socket.emit('message', message);
})
