const users = [];

const addUser = (id, username, room) => {
    const user = {
        id,
        username,
        room,
    };
    users.push(user);

    return user;
}

const deleteUser = (id) => {
    const index = users.findIndex(user => user.id === id);
    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const getCurrentUser = id => {
    return users.find(user => user.id === id);
}

const getRoomUsers = (room) => {
    return users.filter(user => user.room === room);
} 

module.exports = {
    addUser,
    deleteUser,
    getCurrentUser,
    getRoomUsers,
}
