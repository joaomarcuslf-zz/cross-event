import { EventRegister } from 'react-native-event-listeners';

const CrossEvent = {
  on: EventRegister.on,
  rm: EventRegister.rm,
  rmAll: EventRegister.rmAll,
  emit: EventRegister.emit,
}

export default CrossEvent;
