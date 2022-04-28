import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import CategoriesScreen from '../screens/CatagoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import React from 'react';

const Stack = createNativeStackNavigator();

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{title: 'Category Screen'}}
        />
        <Stack.Screen
          name="CategoryMeals"
          component={CategoryMealsScreen}
          options={{title: 'Category Meals Screen'}}
        />
        <Stack.Screen
          name="MealDetails"
          component={MealDetailsScreen}
          options={{title: 'Meal Details Screen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
