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
  },
  seasonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  seasonContainer: {
    borderBottomWidth: 2,
    paddingBottom: 3,
  },
  seasonText: {
    fontSize: 15,
    color: '#3C727B',
    fontWeight: '600',
  },
  buttonContainer: {
    height: 34,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 16,
    gap: 8,
    borderRadius: 20,
    backgroundColor: '#0C8DAC',
  },
  cardTimeContainer: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cardTime: {
    fontSize: 14,
    fontWeight: '500',
    color: '#F8F9FC',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
  },
  onPress: {
    opacity: 0.65,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  cardContainer: {
    width: '100%',
    borderRadius: 16,
    backgroundColor: '#F2FCFF',
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 16,
    marginTop: 16,
  },
  image: {
    height: 160,
    width: '100%',
    borderRadius: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#053038',
    marginVertical: 8,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginVertical: 3,
  },
  cardItemTitle: {
    fontSize: 16,
    color: '#3C727B',
  },
  cardItemValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    backgroundColor: '#DBF0F6',
  },
  cardItemValue: {
    color: '#3C727B',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
