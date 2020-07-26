import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BreadCrumb from 'react-native-breadcrumb-navigation';

export default function Home({ navigation }) {

  const trailData = ['Home', 'Explore'];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateSelection = (index) => {
    setSelectedIndex(index);
    navigation.navigate(trailData[index]);
  }

  useEffect(() => {
    navigation.addListener("focus", () => {
      //To force re-render of this screen once navigating back from another screen.
      setSelectedIndex(0);
    });
  }, [selectedIndex]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> react-native-breadcrumb-navigation </Text>
      <BreadCrumb
        trailData={trailData}
        selectedIndex={selectedIndex}
        onPress={updateSelection}
        backgroundColor={'#2196f3'}
        fontColor={'#000000'}
        fontSize={15}
        height={'10%'}
        top={'24%'}
        textSpacing={'4%'}
      />
      <Text style={styles.bodyText}> Selected Trail: {' '}{trailData[selectedIndex]} </Text>
      <Text style={styles.creditText}> Author: Marcus Lee Eugene </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    top: '-30%'
  },
  bodyText: {
    fontSize: 17,
    top: '-10%'
  },
  creditText: {
    fontSize: 17,
    fontWeight: 'bold',
    top: '15%',
    opacity: .7
  }
});
