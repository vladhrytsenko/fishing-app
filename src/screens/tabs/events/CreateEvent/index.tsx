import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import styles from './s.ts';
import BackIcon from '../../../../assets/images/back.svg';

interface ICreateEvent {
  navigation: any;
}

const CreateEvent = ({navigation}: ICreateEvent) => {
  const {top} = useSafeAreaInsets();

  const onRequest = () => {};

  return (
    <ImageBackground
      source={require('../../../../assets/images/builder_background.png')}
      resizeMode="stretch"
      style={[styles.screenContainer, {paddingTop: top}]}>
      <View style={styles.headerContainer}>
        <Pressable hitSlop={5} onPress={navigation.goBack}>
          <BackIcon />
        </Pressable>
        <Text style={styles.title}>Create a new event</Text>
        <View style={styles.emptyHeaderItem} />
      </View>
      <Pressable
        hitSlop={5}
        onPress={onRequest}
        style={({pressed}) => [
          styles.mainButtonContainer,
          pressed && styles.onPress,
        ]}>
        <Text style={styles.mainButtonText}>Request</Text>
      </Pressable>
    </ImageBackground>
  );
};

export default CreateEvent;
