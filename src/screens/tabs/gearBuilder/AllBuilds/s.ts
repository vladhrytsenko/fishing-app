import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: '#0C8DAC',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
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
    marginVertical: 16,
    borderRadius: 20,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  inputContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: 16,
  },
  inputText: {
    color: 'grey',
    fontSize: 16,
  },
  typesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  typeWrapper: {
    alignItems: 'center',
    gap: 8,
  },
  typeContainer: {
    width: 60,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 12,
  },
  typeTitle: {
    color: '#3C727B',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
