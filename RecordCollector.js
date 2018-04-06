const _ = require('lodash');

const  RecordCollector = function(name,cash){
  this.name = name;
  this.collection = []
  this.cash = cash;
}

RecordCollector.prototype.buy= function (record) {
  this.cash -= record.price;
  this.collection.push(record)
};

module.exports = RecordCollector;
