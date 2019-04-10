import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  requireNativeComponent,
  UIManager,
  findNodeHandle,
  Text,
  View
} from "react-native";

const COMPONENT_NAME = "RatingControl";
const RNRatingControlView = requireNativeComponent(COMPONENT_NAME);

export default class RatingControlView extends Component {
  static propTypes = {
    count: PropTypes.number,
    onUpdate: PropTypes.func
  };

  _onUpdate = event => {
    // call it only if a handler was passed as props
    if (this.props.onUpdate) {
      this.props.onUpdate(event.nativeEvent);
    }
  };

  render() {
    const { rating, style } = this.props;
    return (
      <View style={{flex:1}}>
      <RNRatingControlView
        style={style}
        rating={rating}

        onUpdate={this._onUpdate}
        ref={ref => (this.ref = ref)}
      />
      </View>
    );
  }

  update = (...args) => {
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(this.ref),
      UIManager[COMPONENT_NAME].Commands.updateFromManager,
      [...args]
    );
  };
}
