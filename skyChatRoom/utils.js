const moment = require('moment');

const formatMessage = (username, message) => {
    return {
        username,
        message,
        createdDate: moment().format('h:mm a')
    }
}

module.exports = {
    formatMessage,
}