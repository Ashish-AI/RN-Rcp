import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.catText}>Categories Screen</Text>
      <Button
        title="Nav to Cat Meals"
        onPress={() => {
          console.log(props);
          props.navigation.navigate('CategoryMeals');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catText: {
    color: 'black',
  },
});

export default CategoriesScreen;
