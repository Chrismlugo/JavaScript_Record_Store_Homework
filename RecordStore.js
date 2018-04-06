const _ = require( 'lodash');

const RecordStore = function(name,city){
  this.name = name;
  this.city = city;
  this.inventory = [];
}

RecordStore.prototype.countRecords = function (record) {
  return this.inventory.length;
};

module.exports = RecordStore;
