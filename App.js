/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

import CounterView from './CounterView'
import RatingControlView from './RatingControlView'

import Counter from "./Counter"
Counter.addListener("onIncrement", res => {
  console.log("event onIncrement", res)
})
Counter.increment()
Counter.decrement()
Counter.decrement()

export default class App extends Component {
  state = {
    rating: 1
  };

  // increment = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  update = e => {
    this.setState({ rating: e.rating })
  };

  // updateNative = () => {
  //   this.counterRef.update(this.state.count);
  // };

  render() {
    return (
      <View style={styles.container}>
        {/* <TouchableOpacity
          style={[styles.wrapper, styles.border]}
          onPress={this.increment}
          onLongPress={this.updateNative}
        >
          <Text style={styles.button}>{this.state.count}</Text>
        </TouchableOpacity>

        <CounterView
          style={styles.wrapper}
          count={2}
          onUpdate={this.update}
          ref={e => (this.counterRef = e)}
        /> */}
        <RatingControlView 
          style={styles.wrapper}
          rating={5}
          onUpdate={this.update}
          ref={e => (this.counterRef = e)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    flexDirection:'row'
  },
  wrapper: {
    flex: 1
  },
  border: {
    borderColor: "#eee",
    borderBottomWidth: 1
  },
  button: {
    fontSize: 50,
    color: "orange"
  }
});
