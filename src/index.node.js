const EventEmitter = require('events');

const myEmitter = new EventEmitter();

let events = [];

const removeListener = ({ eventName, callback, element }) => {
  element.removeListener(eventName, callback);
};

const CrossEvent = {
  on: (eventName, callback = () => {}) => {
    myEmitter.on(eventName, callback);

    const listener = {
      eventName,
      callback,
      element: myEmitter,
    };

    events.push(listener);

    return listener;
  },
  rm: removeListener,
  rmAll: () => {
    events.map(removeListener);

    events = [];
  },
  emit: (eventName, body = '') => {
    return myEmitter.emit(eventName, body);
  },
};

module.exports = CrossEvent;
