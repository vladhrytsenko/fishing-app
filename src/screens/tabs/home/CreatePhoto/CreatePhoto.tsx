import React, {useRef} from 'react';
import {Pressable, View} from 'react-native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

import styles from './styles';

interface ICreatePhoto {
  navigation: any;
}

const CreatePhoto = ({navigation}: ICreatePhoto) => {
  const device = useCameraDevice('back');
  const camera = useRef<Camera>(null);

  const onTakePhoto = async () => {
    if (camera.current) {
      const photo = await camera.current.takePhoto();

      navigation.navigate('CheckFishHealth', {source: photo});
    }
  };

  return (
    <View style={styles.screenContainer}>
      {device && (
        <Camera
          ref={camera}
          style={styles.cameraContainer}
          device={device}
          isActive
          photo
        />
      )}
      <Pressable
        onPress={onTakePhoto}
        style={({pressed}) => [styles.circle, pressed && styles.onPress]}>
        <View style={styles.smallCircle} />
      </Pressable>
    </View>
  );
};

export default CreatePhoto;
