'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "Bio" to table "users"
 *
 **/

var info = {
    "revision": 2,
    "name": "BioAdded_Migration",
    "created": "2020-01-02T16:25:26.023Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "users",
        "Bio",
        {
            "type": Sequelize.STRING,
            "field": "Bio"
        }
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
