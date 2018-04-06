var assert = require('assert');
var RecordStore = require('../RecordStore.js');
var Record = require('../Record.js');

describe('Record Store', function(){

  var recordStore;
  var record1;
  var record2;
  var record3;
  var record4;

  beforeEach(function(){
    recordStore = new RecordStore("Track Shack", "Glasgow");
    record1 = new Record("Wovenhand", "Ten Stones", "Rock", 13);
    record2 = new Record("Wovenhand", "The Laughing Stalk", "Rock", 13);
    record3 = new Record("Led Zeppelin", "Physical Graffiti", "Rock", 13);
    record4 = new Record("Pear Jam", "Ten", "Rock", 13);

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
    assert.strictEqual(recordStore.recordDetails(record1), "artist: Wovenhand title: Ten Stones genre: Rock price: £13");
  })

})
