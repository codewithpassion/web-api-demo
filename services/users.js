
class UsersService {

    constructor() {
        this.users = [
            { name: 'Obi Wan', color: 'red' },
            { name: 'Luke Skywalker', color: 'blue'}
        ];
    }

    getAllUsers() {
        return this.users;
    }

    createUser(user) {
        if (!user) { throw new Error("no user"); }
        if (!user.name) { throw new Error('No user Name')};
        if (!user.color) { throw new Error('No user color')};

        this.users.push(user);
        return user;
    }

}

module.exports = UsersService;