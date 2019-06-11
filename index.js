import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

export default class Hello360 extends React.Component {


  state = {
    count: 0
  };

  _increment = () => this.setState({count: this.state.count + 1});
  _decrement = () => this.setState({count: this.state.count - 1});

  render() {
    return (
      <View style={styles.panel}>
        <Text style={styles.greeting}>
            {`count: ${this.state.count}`}
        </Text>
        
        <VrButton onClick={this._increment} style={styles.greetingBox}>
          <Text>+ ADD</Text>
        </VrButton>
        <VrButton onClick={this._decrement} style={styles.greetingBox}>
          <Text>- REMOVE</Text>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(0, 150, 150, .5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 48,
    margin:'5 auto',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#ffffff',
    borderWidth: 2,
    width:200,
    margin:10
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
