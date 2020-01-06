'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2020-01-06T17:07:04.515Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "users",
        {
            
            "UserId": {
                "type": Sequelize.INTEGER(5).UNSIGNED,
                "field": "UserId",
                "primaryKey": true,
                "allowNull": false
            },
            "FirstName": {
                "type": Sequelize.STRING(45),
                "field": "Firstname",
                "allowNull": false
            },
            "LastName": {
                "type": Sequelize.STRING(45),
                "field": "LastName",
                "allowNull": false
            },
            "Email": {
                "type": Sequelize.STRING(45),
                "field": "Email",
                "allowNull": false
            },
            "Username": {
                "type": Sequelize.STRING(45),
                "field": "Username",
                "allowNull": false
            },
            "last_update": {
                "type": Sequelize.DATE,
                "field": "last_update",
                "defaultValue": Sequelize.Literal,
                "allowNull": false
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
