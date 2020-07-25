import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default function BreadCrumb({ trailData, selectedIndex, onPress, backgroundColor, fontColor, fontSize, height, top, textSpacing}) {

  const handleOnPress = (index) => {
    return index;
  }

  const breadCrumb = (
    <View style={styles.breadCrumbContainer}>
      {
        trailData.map((item, index) => (
          (item == trailData[selectedIndex])
            ? <Text key={index} style={[styles.text, styles.selected, {color: fontColor, fontSize: fontSize, paddingHorizontal: textSpacing}]} onPress={(index) => handleOnPress(index)}> {item} </Text>
            : <Text key={index} style={[styles.text, {color: fontColor, fontSize: fontSize, paddingHorizontal: textSpacing}]} onPress={(index) => handleOnPress(index)}> {item} </Text>
        ))
      }
    </View>
  );

  return (
    <View style={[styles.container, {height: height}, {backgroundColor: backgroundColor}, {top: top}]}>
      {breadCrumb}
    </View>
  );
}

BreadCrumb.propTypes = {
  trailData: PropTypes.array.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
  fontColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  height: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  textSpacing: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  container: {
    marginTop: '0%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  breadCrumbContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  selected: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
});
