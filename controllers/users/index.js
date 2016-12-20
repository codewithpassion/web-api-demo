const express = require('express');
const UsersService = require('../../services/users');

class UsersController {
    
    constructor() {
        this.usersService = new UsersService();
    }

    getRouter() {
        const router = express.Router();

        router.route('/')
            .get(this._getAllUsers.bind(this))
            .post(this._createUser.bind(this))

        return router;
    }

    _createUser(req, res) {
        const user = req.body;
        try {
            const result = this.usersService.createUser(user);
            if (result) { res.json({ success: true, user: result })};
        }
        catch (err) {
            res.status(400).json({success: false, message: err.message});
        }
    }

    _getAllUsers(req, res) {
        res.json( 
            { 
                success: true, 
                users: this.usersService.getAllUsers() 
            });
    }

}

module.exports = UsersController;