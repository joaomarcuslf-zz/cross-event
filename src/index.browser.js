let events = [];

const removeListener = ({ eventName, callback, element }) => {
  element.removeEventListener(eventName, callback, false)
};

const CrossEvent = {
  on: (eventName, callback = () => {}) => {
    const listener = {
      eventName,
      callback: (event) => callback(event.detail),
      element: document,
    };

	  listener.element.addEventListener(listener.eventName, listener.callback);

    events.push(listener);

    return listener;
  },
  rm: removeListener,
  rmAll: () => {
    events.map(removeListener);

    events = [];
  },
  emit: (eventName, body = '') => {
    const event = new CustomEvent(eventName, {
      detail: body
    });

    return document.dispatchEvent(event);
  },
}

export default CrossEvent;
