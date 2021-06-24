const mysql = require('mysql2/promise');
const bluebird = require('bluebird');

class SmokeOrm {
    constructor(host, port, user, pass, database) {
        this.host = host;
        this.port = port;
        this.user = user;
        this.pass = pass;
        this.database = database;
        this.connection = await mysql.createPool({
            host: this.host, 
            password: this.password, 
            user: this.user, 
            database: this.database, 
            Promise: bluebird
        });
        this.promisePool = pool.promise();
    }
}