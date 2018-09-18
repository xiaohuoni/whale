import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactNative, {
  StyleSheet,
  View,
  PanResponder,
  Platform,
  ViewPropTypes,
} from 'react-native'

import Theme from '../../themes'

export default class ModalView extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
    modal: PropTypes.bool,
    modalOpacity: PropTypes.number,
    onAppearCompleted: PropTypes.func,
    onDisappearCompleted: PropTypes.func,
    onCloseRequest: PropTypes.func,
  }

  static defaultProps = {
    modal: false,
    modalOpacity: 0.3,
  }

  constructor(props) {
    super(props)
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderGrant: (e, gestureState) =>
        (this.touchStateID = gestureState.stateID),
      onPanResponderRelease: (e, gestureState) =>
        this.touchStateID === gestureState.stateID ? this.closeRequest() : null,
    })
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      const BackHandler = ReactNative.BackHandler
        ? ReactNative.BackHandler
        : ReactNative.BackAndroid
      this.backListener = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          this.closeRequest()
          return true
        }
      )
    }
  }

  componentDidMount() {
    const { onAppearCompleted } = this.props
    onAppearCompleted && onAppearCompleted()
  }

  componentWillUnmount() {
    this.removeBackListener()
  }

  removeBackListener() {
    if (this.backListener) {
      this.backListener.remove()
      this.backListener = null
    }
  }

  close() {
    if (this.closed) return true
    this.closed = true
    this.removeBackListener()
    const { onDisappearCompleted } = this.props
    onDisappearCompleted && onDisappearCompleted()
    return true
  }

  closeRequest() {
    const { modal, onCloseRequest } = this.props
    if (onCloseRequest) onCloseRequest(this)
    else if (!modal) this.close()
  }

  buildProps() {
    let { style, ...others } = this.props
    style = [{ backgroundColor: 'rgba(0, 0, 0, 0)', flex: 1 }].concat(style)
    others = [].concat(others)
    this.props = { style, ...others }
  }

  renderContent() {
    return this.props.children
  }

  render() {
    this.buildProps()
    const { style, modalOpacity } = this.props
    return (
      <View style={styles.globalmodal}>
        <View
          style={[
            styles.globalmodal,
            {
              backgroundColor: '#000',
              opacity: modalOpacity || Theme.opacity_disabled,
            },
          ]}
          {...this.panResponder.panHandlers}
        />
        <View style={style} pointerEvents="box-none">
          {this.renderContent()}
        </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  globalmodal: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})
