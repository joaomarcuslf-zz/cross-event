# CROSS-EVENT

Platform agnostic EventEmitter.

## Installation

```
npm install --save cross-event
```

or

```
yarn add cross-event
```

## Usage Example

```javascript
import CrossEvent from "cross-event";

class Receiver extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: "no data"
    };

    this.handler = this.handler.bind(this);
  }

  handler(data) {
    this.setState({
      data
    });
  }

  componentWillMount() {
    this.listener = CrossEvent.on("foo", this.handler);
  }

  componentWillUnmount() {
    CrossEvent.rm(this.listener);
  }

  render() {
    return <Text>{this.state.data || hello}</Text>;
  }
}

const App = props => (
  <View>
    <TouchableHighlight
      onPress={() => {
        CrossEvent.emit("foo", "bar");
      }}
    >
      <Text>Send Event</Text>
    </TouchableHighlight>

    <Receiver />
  </View>
);
```

## API

| static method | description                                                    |
| :------------ | :------------------------------------------------------------- |
| on            | return value is the id of the event listener or false on error |
| rm            | true on success otherwise false                                |
| rmAll         | true on success otherwise false                                |
| emit          | no return value                                                |
