const _ = require('lodash');

const  RecordCollector = function(name,cash){
  this.name = name;
  this.collection = []
  this.cash = cash;
}

RecordCollector.prototype.buy = function (record) {
  if(this.cash > record.price){
  this.cash -= record.price;
  this.collection.push(record)
}
};

RecordCollector.prototype.sell = function (record) {
  this.cash += record.price;
  _.remove(this.collection,record)
};

module.exports = RecordCollector;
