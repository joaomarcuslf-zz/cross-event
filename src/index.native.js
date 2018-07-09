import { EventRegister } from 'react-native-event-listeners';

const CrossEvent = {
  on: (eventName, callback = () => {}) => {
    const listener = {
      eventName,
      callback,
      element: EventRegister.on(eventName, callback),
    };

    return listener;
  },
  rm: listener => {
    return EventRegister.rm(listener.element);
  },
  rmAll: EventRegister.rmAll,
  emit: EventRegister.emit,
};

export default CrossEvent;
