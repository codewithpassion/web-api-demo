
const debug = require('debug')('app:index');
const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;

const UsersController = require('./controllers/users');

console.log('Hello world');
debug('Hello logging!');


class WebServer {

    init() {
        const webServer = express();

        webServer.use(bodyParser.urlencoded( { extended: true } ))
        webServer.use(bodyParser.json());
        webServer.use(express.static('public'))
        const router = express.Router();

        const apiRouter = express.Router();
        apiRouter.get('/', function(req, res) {
            res.json( { message: 'Api Router'} );
        })

        router.use('/api', apiRouter);
        webServer.use('/', router);
                
        const usersController = new UsersController();
        apiRouter.use('/users', usersController.getRouter());

        webServer.listen(port);
        console.log(`Magic happens on ${port}!`);
    }

}

var webServer = new WebServer();
webServer.init();