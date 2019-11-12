var util = require('util');
var ILog = require('./ilog');

function ConsoleLog()
{
    ConsoleLog.super_.call(this);
}

util.inherits(ConsoleLog, ILog);

ConsoleLog.prototype.Display = function()
{
    console.log(ConsoleLog.data);
}

module.exports = ConsoleLog;