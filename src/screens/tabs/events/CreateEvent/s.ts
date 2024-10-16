import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    paddingTop: 8,
    paddingBottom: 20,
  },
  emptyHeaderItem: {
    width: 45,
  },
  title: {
    fontSize: 32,
    color: '#0C8DAC',
    fontWeight: '600',
  },
  buttonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    height: 34,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'baseline',
    paddingHorizontal: 16,
    gap: 8,
    borderRadius: 20,
    backgroundColor: '#46464660',
    zIndex: 1,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
  },
  mainButtonContainer: {
    height: 48,
    width: 192,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#20A4BD',
    borderRadius: 20,
    backgroundColor: '#38B6CD',
    marginBottom: 24,
  },
  mainButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
  onPress: {
    opacity: 0.65,
  },
});

export default styles;
