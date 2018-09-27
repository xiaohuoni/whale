import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Slider from '../../Slider';

export default class SliderDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changingValue: 0.25,
      changedValue: 0.15,
      minMaxValue: 0,
    };
  }

  handleChange = value => {
    this.setState({
      changingValue: value,
    });
  };

  onAfterChange = value => {
    this.setState({
      changedValue: value,
    });
  };

  minMaxChange = value => {
    this.setState({
      minMaxValue: value,
    });
  };

  render() {
    return (
      <ScrollView style={{ marginStart: 5, marginEnd: 5 }}>
        <View style={{ marginTop: 5 }}>
          <Text>Default settings</Text>
          <Slider />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>Default value settings</Text>
          <Slider showValue max={100} step={1} />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>Initial value: 0.5</Text>
          <Slider defaultValue={0.5} />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>min: 0, max: 1, current Value: {this.state.minMaxValue}</Text>
          <Slider
            min={0}
            max={1}
            onAfterChange={value => this.minMaxChange(value)}
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>step: 0.25</Text>
          <Slider step={0.25} value={0.25} />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>disabled</Text>
          <Slider disabled defaultValue={0.25} />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>onChange value: {this.state.changingValue}</Text>
          <Slider
            defaultValue={0.25}
            onChange={value => this.handleChange(value)}
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>onAfterChange value: {this.state.changedValue}</Text>
          <Slider
            defaultValue={0.15}
            onAfterChange={value => this.onAfterChange(value)}
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>custom color: </Text>
          <Slider
            defaultValue={0.15}
            minimumTrackTintColor="red"
            maximumTrackTintColor="blue"
          />
        </View>
      </ScrollView>
    );
  }
}
