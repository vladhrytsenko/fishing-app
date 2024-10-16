import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  cameraContainer: {
    width: '100%',
    height: '100%',
  },
  circle: {
    position: 'absolute',
    borderColor: '#FFFFFF60',
    borderWidth: 4,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').width * 0.18,
    height: Dimensions.get('window').width * 0.18,
    borderRadius: Dimensions.get('window').width * 0.09,
  },
  smallCircle: {
    backgroundColor: '#FFFFFF60',
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').width * 0.1,
    borderRadius: Dimensions.get('window').width * 0.05,
  },
  onPress: {
    opacity: 0.65,
  },
});

export default styles;
