const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        this.emit('message', {uuid: uuid.v4(), msg});
    }
}

const logger = new Logger();

logger.on('message', data => console.log('listener', data));

logger.log('this is log one');
logger.log('this is log two');
logger.log('this is log three');
