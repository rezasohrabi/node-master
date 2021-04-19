const os = require('os');

const getPlatform = () => {
    return os.platform();
}

const getArchitecture = () => {
    return os.arch();
}

const getCpuCore = () => {
    return os.cpus();
}

const getFreeMemory = () => {
    return os.freemem();
}

const getTotalMemeory = () => {
    return os.totalmem();
}

const getHomeDirectory = () => {
    return os.homedir();
}

const getUpdateTime = () => {
    return os.uptime();
}

console.log('getPlatform', getPlatform());
console.log('getArchitecture', getArchitecture());
console.log('getCpuCor', getCpuCore());
console.log('getFreeMemory', getFreeMemory());
console.log('getTotalMemory', getTotalMemeory());
console.log('getHomeDirectory', getHomeDirectory());
console.log('getUpdateTime', getUpdateTime());
console.log('.............................');
