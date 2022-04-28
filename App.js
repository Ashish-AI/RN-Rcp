import React from 'react';

import {StyleSheet, View, Text} from 'react-native';
import MealsNavigator from './navigations/MealsNavigator';
import MealDetailsScreen from './screens/MealDetailsScreen';

const App = () => {
  return (
    // <View style={style.screen}>
    //   <Text>You're On The App.js Page</Text>
    // </View>
    <MealsNavigator></MealsNavigator>
  );
};

export default App;
