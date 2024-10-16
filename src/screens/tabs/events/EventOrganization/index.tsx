import React, {useState} from 'react';
import {FlatList, ImageBackground, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';

import styles from './s.ts';
import {tournaments} from '../../../../assets/data/tournaments';
import LocationIcon from '../../../../assets/images/location.svg';
import StarIcon from '../../../../assets/images/star.svg';
import FishIcon from '../../../../assets/images/fish.svg';
import ClockIcon from '../../../../assets/images/clock.svg';

interface IEventOrganization {
  navigation: any;
}

const EventOrganization = ({navigation}: IEventOrganization) => {
  const {top} = useSafeAreaInsets();

  const [type, setType] = useState('Events');

  const onCreateEvent = () => {
    navigation.navigate('CreateEvent');
  };

  return (
    <ImageBackground
      source={require('../../../../assets/images/events_background.png')}
      resizeMode="stretch"
      style={[styles.screenContainer, {paddingTop: top}]}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Event organization</Text>
        <View style={styles.seasonsContainer}>
          <Pressable
            style={({pressed}) => [
              styles.seasonContainer,
              {
                borderBottomColor: type === 'Events' ? '#0C8DAC' : '#93C8D6',
              },
              pressed && styles.onPress,
            ]}
            hitSlop={5}
            onPress={() => setType('Events')}>
            <Text style={styles.seasonText}>My Events</Text>
          </Pressable>
          <Pressable
            style={({pressed}) => [
              styles.seasonContainer,
              {
                borderBottomColor:
                  type === 'Tournaments' ? '#0C8DAC' : '#93C8D6',
              },
              pressed && styles.onPress,
            ]}
            hitSlop={5}
            onPress={() => setType('Tournaments')}>
            <Text style={styles.seasonText}>Tournaments & Events</Text>
          </Pressable>
          <Pressable
            style={({pressed}) => [
              styles.seasonContainer,
              {
                borderBottomColor:
                  type === 'Leaderboard' ? '#0C8DAC' : '#93C8D6',
              },
              pressed && styles.onPress,
            ]}
            hitSlop={5}
            onPress={() => setType('Leaderboard')}>
            <Text style={styles.seasonText}>Leaderboard</Text>
          </Pressable>
        </View>
      </View>
      {type === 'Tournaments' && (
        <>
          <Pressable
            hitSlop={5}
            onPress={onCreateEvent}
            style={({pressed}) => [
              styles.buttonContainer,
              pressed && styles.onPress,
            ]}>
            <Text style={styles.buttonText}>Create event</Text>
          </Pressable>
          <FlatList
            data={tournaments}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
            renderItem={({item}) => (
              <View style={styles.cardContainer}>
                <View>
                  <FastImage source={item.imgSource} style={styles.image} />
                  <View style={styles.cardTimeContainer}>
                    <ClockIcon />
                    <Text style={styles.cardTime}>{item.date}</Text>
                  </View>
                </View>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <View style={styles.cardItem}>
                  <LocationIcon />
                  <Text style={styles.cardItemTitle}>{item.location}</Text>
                </View>
                <View style={styles.cardItem}>
                  <View style={styles.cardItemValueContainer}>
                    <FishIcon />
                    <Text style={styles.cardItemValue}>{item.fish}</Text>
                  </View>
                  <View style={styles.cardItemValueContainer}>
                    <StarIcon />
                    <Text style={styles.cardItemValue}>{item.weight} lbs</Text>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={({id}) => id.toString()}
          />
        </>
      )}
    </ImageBackground>
  );
};

export default EventOrganization;
