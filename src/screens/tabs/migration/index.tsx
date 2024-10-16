import React, {useMemo, useState} from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MapView, {Marker, Polyline} from 'react-native-maps';

import styles from './s.ts';
import data from '../../../assets/data/migration.json';
import MapIcon from '../../../assets/images/map.svg';

const MigrationTracking = () => {
  const {top} = useSafeAreaInsets();

  const [season, setSeason] = useState<string>('Autumn');

  const markers = useMemo(() => {
    switch (season) {
      case 'Autumn':
        return data.autumn;

      case 'Winter':
        return data.winter;

      case 'Summer':
        return data.summer;

      case 'Spring':
        return data.spring;

      default:
        return {
          data: [],
          color: 'transparent',
        };
    }
  }, [season]);

  return (
    <ImageBackground
      source={require('../../../assets/images/migration_background.png')}
      resizeMode="stretch"
      style={[styles.screenContainer, {paddingTop: top}]}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Fish Migration Tracking</Text>
        <View style={styles.seasonsWrapper}>
          <MapIcon />
          <View style={styles.seasonsContainer}>
            <Pressable
              style={({pressed}) => [
                styles.seasonContainer,
                {
                  borderBottomColor:
                    season === 'Winter' ? '#0C8DAC' : '#93C8D6',
                },
                pressed && styles.onPress,
              ]}
              hitSlop={5}
              onPress={() => setSeason('Winter')}>
              <Text style={styles.seasonText}>Winter</Text>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                styles.seasonContainer,
                {
                  borderBottomColor:
                    season === 'Spring' ? '#0C8DAC' : '#93C8D6',
                },
                pressed && styles.onPress,
              ]}
              hitSlop={5}
              onPress={() => setSeason('Spring')}>
              <Text style={styles.seasonText}>Spring</Text>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                styles.seasonContainer,
                {
                  borderBottomColor:
                    season === 'Autumn' ? '#0C8DAC' : '#93C8D6',
                },
                pressed && styles.onPress,
              ]}
              hitSlop={5}
              onPress={() => setSeason('Autumn')}>
              <Text style={styles.seasonText}>Autumn</Text>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                styles.seasonContainer,
                {
                  borderBottomColor:
                    season === 'Summer' ? '#0C8DAC' : '#93C8D6',
                },
                pressed && styles.onPress,
              ]}
              hitSlop={5}
              onPress={() => setSeason('Summer')}>
              <Text style={styles.seasonText}>Summer</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <MapView
        initialRegion={{
          latitude: 10.5,
          longitude: 99.166667,
          latitudeDelta: 5,
          longitudeDelta: 2.5,
        }}
        pitchEnabled={false}
        rotateEnabled={false}
        scrollEnabled={false}
        zoomEnabled={false}
        style={styles.mapView}>
        {markers.data.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}>
            <View
              style={[styles.marker, {backgroundColor: markers.color}]}></View>
          </Marker>
        ))}
        <Polyline
          coordinates={markers.data.map(({coordinate}) => coordinate)}
          strokeWidth={1}
          strokeColor="#8941FF"
          lineDashPattern={[5, 5, 5]}
        />
      </MapView>
    </ImageBackground>
  );
};

export default MigrationTracking;
