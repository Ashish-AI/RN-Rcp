import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MealDetailsScreen = props => {
  return (
    <View style={style.screen}>
      <Text>Meal Details Screen</Text>
    </View>
  );
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailsScreen;
