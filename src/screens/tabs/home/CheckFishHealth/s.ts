import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    gap: 16,
    paddingTop: 8,
    paddingBottom: 20,
  },
  title: {
    fontSize: 32,
    color: '#0C8DAC',
    fontWeight: '600',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    height: 34,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'baseline',
    paddingHorizontal: 16,
    gap: 8,
    borderRadius: 20,
    backgroundColor: '#0C8DAC',
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
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0C8DAC',
    marginTop: 16,
    borderRadius: 20,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  description: {
    fontSize: 16,
    color: '#3C727B',
    marginVertical: 16,
  },
});

export default styles;
