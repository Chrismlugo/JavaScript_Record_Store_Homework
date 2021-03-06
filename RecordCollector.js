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

RecordCollector.prototype.collectionValue = function () {
return  _.sumBy(this.collection, 'price');
};

RecordCollector.prototype.genreValue = function (genre) {
  let filteredRecords = _.filter(this.collection, {genre: genre});
  return _.sumBy(filteredRecords, 'price');
};

RecordCollector.prototype.highestValueRecord = function () {
  return _.maxBy(this.collection, 'price');
};

RecordCollector.prototype.sortByLowestValue = function () {
  return _.sortBy(this.collection, 'price');
};

RecordCollector.prototype.sortByHighestValue = function () {
  let result = _.sortBy(this.collection, 'price');
  return _.reverse(result);
};

RecordCollector.prototype.compareValue = function (RecordCollector) {
  return this.collectionValue() - RecordCollector.collectionValue();
};


module.exports = RecordCollector;
