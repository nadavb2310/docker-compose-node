const moment = require('moment');
 
exports.getTimeText = function() {
    return Promise.resolve(moment().format('MMMM Do YYYY, h:mm:ss a'));
};