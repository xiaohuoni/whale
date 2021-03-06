import React from 'react';
import { View, Text } from 'react-native';
import Stepper from '../index';
import Page from '../../Page';

export default class SteppeerDemo extends React.Component {
  render() {
    return (
      <Page>
        <View style={{ backgroundColor: 'white' }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              margin: 20,
            }}
          >
            <Text style={{ flex: 1 }}>
              设置step累加展示（当前为步长10）数值可编辑
            </Text>
            <Stepper
              max={100}
              min={0}
              number={50}
              //   disable={true}
              // addImg={require('../img/rm.png')}
              // styleImg ={{width: 100}}
              // styleText ={{width: 100}}
              step={10}
              onChange={number => {
                console.warn(number);
              }}
            />
          </View>
          <View style={{ backgroundColor: '#F5F5F5', height: 1 }} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              margin: 20,
            }}
          >
            <Text style={{ flex: 1 }}>
              设置step累加展示（当前为步长10）数值不可编辑
            </Text>
            <Stepper
              max={100}
              min={0}
              number={50}
              editable={false}
              //   disable={true}
              // addImg={require('../img/rm.png')}
              // styleImg ={{width: 100}}
              // styleText ={{width: 100}}
              step={10}
              onChange={number => {
                console.warn(number);
              }}
            />
          </View>
          <View style={{ backgroundColor: '#F5F5F5', height: 1 }} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              margin: 20,
            }}
          >
            <Text style={{ flex: 1 }}>Disabled(禁止状态)</Text>
            <Stepper
              max={100}
              min={0}
              number={50}
              disable
              editable={false}
              step={10}
              onChange={number => {
                console.warn(number);
              }}
            />
          </View>
        </View>
      </Page>
    );
  }
}
