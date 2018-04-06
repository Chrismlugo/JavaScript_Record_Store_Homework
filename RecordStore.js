const _ = require( 'lodash');

const RecordStore = function(name,city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0
  };


RecordStore.prototype.countRecords = function () {
  return this.inventory.length;
};

RecordStore.prototype.addRecord = function (record) {
  this.inventory.push(record);
};

RecordStore.prototype.recordDetails = function (record) {
  return `artist: ${record.artist} title: ${record.title} genre: ${record.genre} price: £${record.price}`
};

RecordStore.prototype.showInventory = function (){
  return this.inventory;
};

RecordStore.prototype.sell = function (record) {
  this.balance += record.price;
  _.remove(this.inventory, record);
};

RecordStore.prototype.finances = function () {
  let inventoryTotal = _.sumBy(this.inventory, 'price');
  return `Store Balance: £${this.balance} inventory Total: £${inventoryTotal}`
};

RecordStore.prototype.findRecordsByGenre = function (genre) {
  return _.filter(this.inventory, {genre: genre});
};



module.exports = RecordStore;
