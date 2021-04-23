const moment = require('moment');
const { getRoomUsers } = require('./db');

const formatMessage = (username, message) => {
    return {
        username,
        message,
        createdDate: moment().format('h:mm a')
    }
}

const formatRoomUsers = (room) => {
    return {
        room,
        users: getRoomUsers(room)
    }
}

module.exports = {
    formatMessage,
    formatRoomUsers,
}
