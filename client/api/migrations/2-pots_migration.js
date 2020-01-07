'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "posts", deps: []
 *
 **/

var info = {
    "revision": 2,
    "name": "pots_migration",
    "created": "2020-01-07T02:30:01.449Z",
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
            "Title": {
                "type": Sequelize.STRING,
                "field": "Title"
            },
            "Body": {
                "type": Sequelize.STRING,
                "field": "Body"
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
