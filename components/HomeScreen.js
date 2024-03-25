import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Diary</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.Buttonstyle]}
          onPress={() => navigation.navigate('AddExercise')}
        >
          <Text style={styles.buttonText}>Add Exercise</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.Buttonstyle]}
          onPress={() => navigation.navigate('ExerciseHistory')}
        >
          <Text style={styles.buttonText}>Exercise History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.Buttonstyle]}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
