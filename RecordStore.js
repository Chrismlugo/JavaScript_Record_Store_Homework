const _ = require( 'lodash');

const RecordStore = function(name,city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

RecordStore.prototype.countRecords = function () {
  return this.inventory.length;
};

RecordStore.prototype.addRecord = function (record) {
  this.inventory.push(record);
};

module.exports = RecordStore;
