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
  onPress: {
    opacity: 0.65,
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
    marginVertical: 3,
  },
  cardItemTitle: {
    fontSize: 16,
    color: '#3C727B',
    width: 80,
  },
  cardItemValueContainer: {
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
  listEmptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listEmptyText: {
    fontSize: 20,
    color: '#3C727B',
    fontWeight: '600',
  },
});

export default styles;
