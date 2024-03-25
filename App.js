import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import AddExerciseScreen from './components/AddExercise'; 
import ExerciseHistoryScreen from './components/ExerciseHistoryList';
import SettingsScreen from './components/Settings';

const Stack = createStackNavigator();

export default function App() {
  const [units, setUnits] = useState('km'); // Initialize units to kilometers
  const [exerciseHistory, setExerciseHistory] = useState([]); // Initialize exercise history

  // Function to add exercise to exercise history
  const onAddExercise = (exercise) => {
    setExerciseHistory([...exerciseHistory, exercise]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen 
          name="AddExercise" 
          // Pass the units and onAddExercise props to AddExerciseScreen
          children={({ navigation }) => <AddExerciseScreen units={units} onAddExercise={onAddExercise} navigation={navigation} />} 
        />
        <Stack.Screen 
          name="ExerciseHistory" 
          // Pass the units and exerciseHistory props to ExerciseHistoryScreen
          children={({ navigation }) => <ExerciseHistoryScreen units={units} exerciseHistory={exerciseHistory} navigation={navigation} />} 
        /> 
        <Stack.Screen 
          name="Settings"
          // Pass the setUnits function to SettingsScreen
          children={({ navigation }) => <SettingsScreen setUnits={setUnits} navigation={navigation} />} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
