import React from 'react';
import {ImageBackground, Pressable, Text, TextInput, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MapView, {Marker} from 'react-native-maps';
import styles from './s.ts';
import markers from '../../../../assets/data/markers.json';
import CameraIcon from '../../../../assets/images/camera.svg';

interface IFishMasterExplorer {
  navigation: any;
}

const FishMasterExplorer = ({navigation}: IFishMasterExplorer) => {
  const {top} = useSafeAreaInsets();

  const onCheckFishHealth = () => {
    navigation.navigate('CheckFishHealth');
  };

  return (
    <ImageBackground
      source={require('../../../../assets/images/home_background.png')}
      resizeMode="stretch"
      style={[styles.screenContainer, {paddingTop: top}]}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Fish Master Explorer</Text>
        <TextInput style={styles.input} placeholder="Search" />
        <Pressable
          hitSlop={5}
          onPress={onCheckFishHealth}
          style={({pressed}) => [
            styles.buttonContainer,
            pressed && styles.onPress,
          ]}>
          <Text style={styles.buttonText}>Check fish health</Text>
          <CameraIcon />
        </Pressable>
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
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}>
            <View style={styles.marker}></View>
          </Marker>
        ))}
      </MapView>
    </ImageBackground>
  );
};

export default FishMasterExplorer;
