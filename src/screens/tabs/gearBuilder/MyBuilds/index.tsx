import React, {useEffect, useState} from 'react';
import {FlatList, ImageBackground, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './s.ts';
import BackIcon from '../../../../assets/images/back.svg';

interface IMyBuilds {
  navigation: any;
}
interface IBuild {
  id: string;
  imgSource: string | null;
  rod: string | null;
  reel: string | null;
  line: string | null;
  lure: string | null;
}

const MyBuilds = ({navigation}: IMyBuilds) => {
  const {top} = useSafeAreaInsets();

  const [listOfBuilds, setListOfBuilds] = useState<Array<IBuild>>([]);

  const onDeleteBuild = async (id: string) => {
    const builds =
      JSON.parse((await AsyncStorage.getItem('builds')) as string) || [];
    const updatedBuilds = builds.filter((build: any) => build.id !== id);

    setListOfBuilds(updatedBuilds);
    await AsyncStorage.setItem('builds', JSON.stringify(updatedBuilds));
  };

  useEffect(() => {
    (async () => {
      const builds =
        JSON.parse((await AsyncStorage.getItem('builds')) as string) || [];

      setListOfBuilds(builds);
    })();
  }, []);

  return (
    <ImageBackground
      source={require('../../../../assets/images/builder_background.png')}
      resizeMode="stretch"
      style={[styles.screenContainer, {paddingTop: top}]}>
      <View style={styles.headerContainer}>
        <Pressable hitSlop={5} onPress={navigation.goBack}>
          <BackIcon />
        </Pressable>
        <Text style={styles.title}>My builds</Text>
        <View style={styles.emptyHeaderItem} />
      </View>
      <FlatList
        data={listOfBuilds}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        ListEmptyComponent={
          <View style={styles.listEmptyContainer}>
            <Text style={styles.listEmptyText}>No items</Text>
          </View>
        }
        renderItem={({item}) => (
          <View style={styles.cardContainer}>
            <Pressable
              hitSlop={5}
              onPress={() => onDeleteBuild(item.id)}
              style={({pressed}) => [
                styles.buttonContainer,
                pressed && styles.onPress,
              ]}>
              <Text style={styles.buttonText}>Delete</Text>
            </Pressable>
            <FastImage
              source={{uri: item.imgSource as string}}
              style={styles.image}
            />
            <Text style={styles.cardTitle}>{item.rod}</Text>
            <View style={styles.cardItem}>
              <Text style={styles.cardItemTitle}>Reel</Text>
              <View style={styles.cardItemValueContainer}>
                <Text style={styles.cardItemValue}>{item.reel}</Text>
              </View>
            </View>
            <View style={styles.cardItem}>
              <Text style={styles.cardItemTitle}>Line</Text>
              <View style={styles.cardItemValueContainer}>
                <Text style={styles.cardItemValue}>{item.line}</Text>
              </View>
            </View>
            <View style={styles.cardItem}>
              <Text style={styles.cardItemTitle}>Lure</Text>
              <View style={styles.cardItemValueContainer}>
                <Text style={styles.cardItemValue}>{item.lure}</Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={({id}) => id}
      />
    </ImageBackground>
  );
};

export default MyBuilds;
