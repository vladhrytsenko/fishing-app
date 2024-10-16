import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FastImage, {Source} from 'react-native-fast-image';
import ImagePicker from 'react-native-image-crop-picker';
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './s.ts';
import CameraIcon from '../../../../assets/images/camera.svg';
import ArrowDownIcon from '../../../../assets/images/arrow_down.svg';
import RodIcon from '../../../../components/svgs/RodIcon.tsx';
import ReelIcon from '../../../../components/svgs/ReelIcon.tsx';
import LureIcon from '../../../../components/svgs/LureIcon.tsx';
import LineIcon from '../../../../components/svgs/LineIcon.tsx';
import rods from '../../../../assets/data/rods.json';
import reels from '../../../../assets/data/reels.json';
import lines from '../../../../assets/data/lines.json';
import lures from '../../../../assets/data/lures.json';

interface IAllBuilds {
  navigation: any;
}

const AllBuilds = ({navigation}: IAllBuilds) => {
  const {top} = useSafeAreaInsets();

  const [imgSource, setImgSource] = React.useState<Source | null>(null);
  const [rod, setRod] = React.useState<string | null>(null);
  const [reel, setReel] = React.useState<string | null>(null);
  const [line, setLine] = React.useState<string | null>(null);
  const [lure, setLure] = React.useState<string | null>(null);
  const [type, setType] = React.useState<string>('Rod');

  const onUploadPhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      mediaType: 'photo',
    }).then((photo: any) => {
      setImgSource(photo.path);
    });
  };

  const onOpenMyBuilds = () => {
    navigation.navigate('MyBuilds');
  };

  const onCreateBuild = async () => {
    const builds =
      JSON.parse((await AsyncStorage.getItem('builds')) as string) || [];
    const newBuild = {
      id: Date.now().toString(),
      rod,
      reel,
      lure,
      line,
      imgSource,
    };
    const updatedBuilds = JSON.stringify([newBuild, ...builds]);

    await AsyncStorage.setItem('builds', updatedBuilds);

    setTimeout(() => {
      setType('Rod');
      setRod(null);
      setReel(null);
      setLure(null);
      setLine(null);
      setImgSource(null);
    }, 300);

    navigation.navigate('MyBuilds');
  };

  return (
    <ImageBackground
      source={require('../../../../assets/images/builder_background.png')}
      resizeMode="stretch"
      style={[styles.screenContainer, {paddingTop: top}]}>
      <Text style={styles.title}>Gear Builder</Text>
      <View style={styles.buttonsContainer}>
        <Pressable
          hitSlop={5}
          onPress={onOpenMyBuilds}
          style={({pressed}) => [
            styles.buttonContainer,
            pressed && styles.onPress,
          ]}>
          <Text style={styles.buttonText}>My Builds</Text>
        </Pressable>
        <Pressable
          hitSlop={5}
          onPress={onUploadPhoto}
          style={({pressed}) => [
            styles.buttonContainer,
            pressed && styles.onPress,
          ]}>
          <Text style={styles.buttonText}>Upload photo</Text>
          <CameraIcon />
        </Pressable>
      </View>
      <View style={styles.typesContainer}>
        <Pressable onPress={() => setType('Rod')} style={styles.typeWrapper}>
          <View
            style={[
              styles.typeContainer,
              {
                borderColor: type === 'Rod' ? '#1EA3BB' : '#5ACDEA',
                backgroundColor: type === 'Rod' ? '#30B5CD' : '#BFF3FF',
              },
            ]}>
            <RodIcon color={type === 'Rod' ? '#F8F9FC' : '#76C8D7'} />
          </View>
          <Text style={styles.typeTitle}>Rod</Text>
        </Pressable>
        <Pressable onPress={() => setType('Reel')} style={styles.typeWrapper}>
          <View
            style={[
              styles.typeContainer,
              {
                borderColor: type === 'Reel' ? '#1EA3BB' : '#5ACDEA',
                backgroundColor: type === 'Reel' ? '#30B5CD' : '#BFF3FF',
              },
            ]}>
            <ReelIcon color={type === 'Reel' ? '#F8F9FC' : '#76C8D7'} />
          </View>
          <Text style={styles.typeTitle}>Reel</Text>
        </Pressable>
        <Pressable onPress={() => setType('Lure')} style={styles.typeWrapper}>
          <View
            style={[
              styles.typeContainer,
              {
                borderColor: type === 'Lure' ? '#1EA3BB' : '#5ACDEA',
                backgroundColor: type === 'Lure' ? '#30B5CD' : '#BFF3FF',
              },
            ]}>
            <LureIcon color={type === 'Lure' ? '#F8F9FC' : '#76C8D7'} />
          </View>
          <Text style={styles.typeTitle}>Lure</Text>
        </Pressable>
        <Pressable onPress={() => setType('Line')} style={styles.typeWrapper}>
          <View
            style={[
              styles.typeContainer,
              {
                borderColor: type === 'Line' ? '#1EA3BB' : '#5ACDEA',
                backgroundColor: type === 'Line' ? '#30B5CD' : '#BFF3FF',
              },
            ]}>
            <LineIcon color={type === 'Line' ? '#F8F9FC' : '#76C8D7'} />
          </View>
          <Text style={styles.typeTitle}>Line</Text>
        </Pressable>
      </View>
      {type === 'Reel' && (
        <RNPickerSelect
          onValueChange={setReel}
          value={reel}
          placeholder={{}}
          items={reels}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>{reel || 'Select reel'}</Text>
            <ArrowDownIcon />
          </View>
        </RNPickerSelect>
      )}
      {type === 'Lure' && (
        <RNPickerSelect
          onValueChange={setLure}
          value={lure}
          placeholder={{}}
          items={lures}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>{lure || 'Select lure'}</Text>
            <ArrowDownIcon />
          </View>
        </RNPickerSelect>
      )}
      {type === 'Rod' && (
        <RNPickerSelect
          onValueChange={setRod}
          value={rod}
          placeholder={{}}
          items={rods}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>{rod || 'Select rod'}</Text>
            <ArrowDownIcon />
          </View>
        </RNPickerSelect>
      )}
      {type === 'Line' && (
        <RNPickerSelect
          onValueChange={setLine}
          value={line}
          placeholder={{}}
          items={lines}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>{line || 'Select line'}</Text>
            <ArrowDownIcon />
          </View>
        </RNPickerSelect>
      )}
      <View style={styles.imageContainer}>
        {imgSource ? (
          <FastImage source={{uri: imgSource as string}} style={styles.image} />
        ) : (
          <CameraIcon height={70} width={70} />
        )}
      </View>
      <Pressable
        hitSlop={5}
        onPress={onCreateBuild}
        style={({pressed}) => [
          styles.mainButtonContainer,
          pressed && styles.onPress,
        ]}>
        <Text style={styles.mainButtonText}>Create build</Text>
      </Pressable>
    </ImageBackground>
  );
};

export default AllBuilds;
