'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "posts", deps: [Users]
 * changeColumn "Bio" on table "users"
 *
 **/

var info = {
    "revision": 3,
    "name": "useusers_migration",
    "created": "2020-01-02T16:51:37.564Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "posts",
            {
                "PostId": {
                    "type": Sequelize.INTEGER,
                    "field": "PostId",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "UserID": {
                    "type": Sequelize.INTEGER,
                    "field": "UserID",
                    "references": {
                        "model": "Users",
                        "key": "UserId"
                    },
                    "allowNull": false
                },
                "Title": {
                    "type": Sequelize.STRING,
                    "field": "Title"
                },
                "Post": {
                    "type": Sequelize.STRING,
                    "field": "Post"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt"
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt"
                }
            },
            {}
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "Bio",
            {
                "type": Sequelize.STRING,
                "field": "Bio",
                "allowNull": true
            }
        ]
    }
];

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
