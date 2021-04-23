const joinBtn = document.querySelector('.join-btn');
const leaveBtn = document.querySelector('.leave-btn');
const sendMessageForm = document.querySelector('.send-message-form');
const messages = document.querySelector('.messages');

const socket = io();

const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true,
});

//fire joinRoom event on server
socket.emit('joinRoom', username, room);

//server can fire this event
socket.on('broadcastMessage', (message) => {
    addNewMessage(message);
    //scroll down on new message
    messages.scrollTop = messages.scrollHeight;
    console.log(message);
})

sendMessageForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = e.target.elements.message.value;
    if(!message.trim()) return;
    //fire reciveMessage on server
    socket.emit('reciveMessage', message);

    e.target.elements.message.value = '';
    e.target.elements.message.focus();
})

leaveBtn.addEventListener('click', () => {
    const isOk = window.confirm('Are you want to leave chat room?');

    if(isOk) location.replace('../index.html');
})

const addNewMessage = (message) => {
    const div = document.createElement('div');
    div.classList.add('m-2', 'bg-info', 'text-white', 'rounded', 'p-2', 'mx-4');
    div.innerHTML = `
    <div>${message.username} | ${message.createdDate}</div>
    <p>${message.message}</p>`;
    messages.appendChild(div);
}
