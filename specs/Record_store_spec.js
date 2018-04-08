var assert = require('assert');
var RecordStore = require('../RecordStore.js');
var Record = require('../Record.js');
var RecordCollector = require('../RecordCollector.js');

describe('Record Store', function(){

  var recordCollector;
  var recordStore;
  var record1;
  var record2;
  var record3;
  var record4;

  beforeEach(function(){
    recordStore = new RecordStore("Track Shack", "Glasgow");
    record1 = new Record("Wovenhand", "Ten Stones", "Folk", 13);
    record2 = new Record("Wovenhand", "The Laughing Stalk", "Folk", 13);
    record3 = new Record("Led Zeppelin", "Physical Graffiti", "Rock", 13);
    record4 = new Record("Pear Jam", "Ten", "Grunge", 13);
    recordCollector = new RecordCollector("Alan", 80);
  })

  it('record store is initially empty', function(){
    assert.strictEqual(recordStore.inventory.length, 0);
  })

  it('can add records', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    assert.strictEqual(recordStore.countRecords(), 2);
  })

  it('can show store balance', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    assert.strictEqual(recordStore.balance, 0);
  })

  it('can print records details', function(){
    assert.strictEqual(recordStore.recordDetails(record1), "artist: Wovenhand title: Ten Stones genre: Folk price: £13");
  })

  it('store can list its inventory', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
    recordStore.addRecord(record4);
    assert.deepStrictEqual(recordStore.showInventory(), [record1, record2, record3, record4]);
  })

  it('store can sell a record', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
    recordStore.addRecord(record4);
    recordStore.sell(record1);
    assert.strictEqual(recordStore.balance, 13);
    assert.strictEqual(recordStore.countRecords(), 3);
  })

  it('store can show finances', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
    recordStore.addRecord(record4);
    recordStore.sell(record1);
    recordStore.sell(record2);
    assert.strictEqual(recordStore.finances(), "Store Balance: £26 inventory Total: £26")
  })

  it('store can view records by genre', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
    recordStore.addRecord(record4);
    assert.deepStrictEqual(recordStore.findRecordsByGenre("Folk"), [record1, record2]);
  })

  it('record collector can buy a record', function(){
    recordCollector.buy(record1);
    assert.strictEqual(recordCollector.cash, 67);
    assert.deepStrictEqual(recordCollector.collection, [record1]);
  })

  it('collector can sell a record', function(){
    recordCollector.buy(record1);
    recordCollector.buy(record2);
    assert.strictEqual(recordCollector.cash, 54);
    recordCollector.sell(record2);
    assert.strictEqual(recordCollector.cash, 67);
    assert.deepStrictEqual(recordCollector.collection, [record1]);
  })

  it('collector cant spend over cash amount', function(){
    record1.price = 80;
    recordCollector.buy(record2);
    recordCollector.buy(record1);
    assert.strictEqual(recordCollector.cash, 67);
    assert.deepStrictEqual(recordCollector.collection, [record2]);
  })

  it('collector can view total value of collection', function(){
    recordCollector.buy(record1);
    recordCollector.buy(record2);
    recordCollector.buy(record3);
    assert.strictEqual(recordCollector.collectionValue(), 39);

  })

  it('collector can view value of records of genre', function(){
    recordCollector.buy(record1);
    recordCollector.buy(record2);
    recordCollector.buy(record3);
    assert.strictEqual(recordCollector.genreValue("Folk"), 26);
  })

  it('collector can view most valuable record', function(){
    record1.price = 17;
    recordCollector.buy(record1);
    recordCollector.buy(record2);
    recordCollector.buy(record3);
    assert.deepStrictEqual(recordCollector.highestValueRecord(), record1);
  })

  it('collector can sort collection by value', function(){
    record1.price = 17;
    record2.price = 25;
    recordCollector.buy(record1);
    recordCollector.buy(record2);
    recordCollector.buy(record3);
    assert.deepStrictEqualstrictEqual(recordCollector.sortByValue(),[record3, record1, record2] )
  })



})
