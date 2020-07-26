# react-native-breadcrumb-navigation [![npm version](https://badge.fury.io/js/react-native-breadcrumb-navigation.svg)](https://badge.fury.io/js/react-native-breadcrumb-navigation)
A basic react-native breadcrumb component library for both Android and ios. The component accounts for any number of trails that you input as an array to 'trailData' prop. The component is also dynamic and can handle for custom background colour, fontSize, fontColour, container height, top position from status bar, textSpacing.

## Basic Example:
A basic example where you can see the change in the breadcrumb trail. [Source Code](https://github.com/marcusleeeugene/react-native-breadcrumb-navigation/blob/master/examples/Basic/App.js)
<p align="center">
  <img align="center" src="https://github.com/marcusleeeugene/react-native-breadcrumb-navigation/blob/master/examples/Basic/Basic%20Example.gif?raw=true" height="600">
</p>

## React Navigation Example:
 An example using react navigation. Clicking on each breadcrumb trail will navigate user to destination screens. [Source Code](https://github.com/marcusleeeugene/react-native-breadcrumb-navigation/tree/master/examples/ReactNavigation/screens)
 <p align="center">
   <img align="center" src="https://github.com/marcusleeeugene/react-native-breadcrumb-navigation/blob/master/examples/ReactNavigation/React%20Navigation%20Example.gif?raw=true" height="600">
 </p>

## Installation
Installing with Npm:
```
npm i react-native-breadcrumb-navigation
```

## Usage
```js
import BreadCrumb from 'react-native-breadcrumb-navigation';

<BreadCrumb
    trailData={['Home', 'Explore', 'Message', 'Settings']}
    selectedIndex={0}
    onPress={updateSelection}
    backgroundColor={'#2196f3'}
    fontColor={'#000000'}
    fontSize={15}
    height={'10%'}
    top={'24%'}
    textSpacing={'4%'}
/>
 ```
## Props
| Name | Type | Description
| ------------- | ------------- | ------------- |
| trailData | Array | Array of destination trails for BreadCrumb  |
| selectedIndex | Int | indicates selected crumb where index starts from 0 |
| onPress | Function | Returns selected crumb index  |
| backgroundColor | String | Background colour of BreadCrumb where you may also set to 'transparent' if preferred  |
| fontColor | String | Colour of font  |
| fontSize | Int | Size of font |
| height | String | Height of container for BreadCrumb  |
| top | String | Position of BreadCrumb from Status Bar  |
| textSpacing | String | Spacing between each crumb text |

## License
react-native-breadcrumb-navigation is [MIT Licensed](https://github.com/marcusleeeugene/react-native-breadcrumb-navigation/LICENSE.txt)
