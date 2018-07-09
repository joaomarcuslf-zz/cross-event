/**
 * @jest-environment node
 */

const CrossEvent = require('../src/index.node');

var sinon = require('sinon');

describe('CrossEvent', function() {
  describe('#emit()', function() {
    it('should invoke the callback', function() {
      var spy = sinon.spy();

      CrossEvent.on('foo', spy);
      CrossEvent.emit('foo', 'body');

      sinon.assert.calledOnce(spy);
    });

    it('should invoke the callback with params', function() {
      var spy = sinon.spy();

      CrossEvent.on('foo', spy);
      CrossEvent.emit('foo', 'bar');

      sinon.assert.calledOnce(spy);
      sinon.assert.calledWith(spy, 'bar');
    });
  });

  describe('#rm()', function() {
    it('should remove listener', function() {
      var spy = sinon.spy();

      const listener = CrossEvent.on('foo', spy);

      CrossEvent.rm(listener);

      CrossEvent.emit('foo', 'body');

      sinon.assert.notCalled(spy);
    });
  });

  describe('#rmAll()', function() {
    it('should remove all listener', function() {
      var spy1 = sinon.spy();
      var spy2 = sinon.spy();
      var spy3 = sinon.spy();

      CrossEvent.on('foo', spy1);
      CrossEvent.on('foo', spy2);
      CrossEvent.on('foo', spy3);

      CrossEvent.rmAll();

      CrossEvent.emit('foo', 'body');

      sinon.assert.notCalled(spy1);
      sinon.assert.notCalled(spy2);
      sinon.assert.notCalled(spy3);
    });
  });
});
