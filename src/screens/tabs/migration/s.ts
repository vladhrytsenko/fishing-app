import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: 8,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  title: {
    fontSize: 32,
    color: '#0C8DAC',
    fontWeight: '600',
    width: 220,
  },
  seasonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: 16,
  },
  seasonsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seasonContainer: {
    borderBottomWidth: 2,
    paddingBottom: 3,
  },
  seasonText: {
    fontSize: 16,
    color: '#3C727B',
    fontWeight: '600',
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
  onPress: {
    opacity: 0.65,
  },
  mapView: {
    flex: 1,
  },
  marker: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#6C26FF',
    borderWidth: 1.5,
    borderColor: 'white',
  },
});

export default styles;
