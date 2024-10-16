import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FastImage, {Source} from 'react-native-fast-image';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './s.ts';
import BackIcon from '../../../../assets/images/back.svg';
import CameraIcon from '../../../../assets/images/camera.svg';

interface ICheckFishHealth {
  navigation: any;
  route: any;
}

const CheckFishHealth = ({navigation, route}: ICheckFishHealth) => {
  const {top} = useSafeAreaInsets();

  const [imgSource, setImgSource] = React.useState<Source | null>(
    route.params.source,
  );

  const onUploadPhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      mediaType: 'photo',
    }).then((photo: any) => {
      setImgSource(photo.path);
    });
  };

  const onTakePhoto = () => {
    navigation.navigate('CreatePhoto');
  };

  const onAnalyze = () => {};

  return (
    <ImageBackground
      source={require('../../../../assets/images/check_fish_background.png')}
      resizeMode="stretch"
      style={[styles.screenContainer, {paddingTop: top}]}>
      <View style={styles.headerContainer}>
        <Pressable hitSlop={5} onPress={navigation.goBack}>
          <BackIcon />
        </Pressable>
        <Text style={styles.title}>Check fish health</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable
          hitSlop={5}
          onPress={onUploadPhoto}
          style={({pressed}) => [
            styles.buttonContainer,
            pressed && styles.onPress,
          ]}>
          <Text style={styles.buttonText}>Upload photo</Text>
        </Pressable>
        <Pressable
          hitSlop={5}
          onPress={onTakePhoto}
          style={({pressed}) => [
            styles.buttonContainer,
            pressed && styles.onPress,
          ]}>
          <Text style={styles.buttonText}>Take Photo</Text>
        </Pressable>
      </View>
      <View style={styles.imageContainer}>
        {imgSource ? (
          <FastImage source={{uri: imgSource as string}} style={styles.image} />
        ) : (
          <CameraIcon height={70} width={70} />
        )}
      </View>
      <Text style={styles.description}>
        Ensure the gills are visible and clearly lit. Blurry or shadowed images
        may not provide accurate results.
      </Text>
      <Pressable
        hitSlop={5}
        onPress={onAnalyze}
        style={({pressed}) => [
          styles.mainButtonContainer,
          pressed && styles.onPress,
        ]}>
        <Text style={styles.mainButtonText}>Analyze</Text>
      </Pressable>
    </ImageBackground>
  );
};

export default CheckFishHealth;
