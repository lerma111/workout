import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';

const ExerciseHistoryList = ({ exerciseHistory, units }) => {
  if (!exerciseHistory || exerciseHistory.length === 0) {
    return <Text>No workouts available</Text>;
  }

  const calculateTotalDistance = (workoutType) => {
    const filteredWorkouts = exerciseHistory.filter(workout => workout.sportType === workoutType);
    const totalDistance = filteredWorkouts.reduce((sum, workout) => sum + workout.distance, 0);
    return totalDistance.toFixed(2);
  };

  return (
    <View style={styles.container}>
      {/* total distances */}
      <View style={styles.totalDistanceContainer}>
        <Text style={styles.totalDistanceText}>Running: {calculateTotalDistance('Running')} {units}</Text>
        <Text style={styles.totalDistanceText}>Walking: {calculateTotalDistance('Walking')} {units}</Text>
        <Text style={styles.totalDistanceText}>Swimming: {calculateTotalDistance('Swimming')} {units}</Text>
      </View>
      {/* workouts */}
      <FlatList
        data={exerciseHistory}
        renderItem={({ item }) => (
          <View style={styles.workoutItem}>
            <Text style={styles.workoutText}>{item.sportType}: {item.distance.toFixed(2)} {units}</Text>
            <Text style={styles.workoutText}>Duration: {item.duration} minutes</Text>
            <Text style={styles.workoutText}>Date: {item.date.toDateString()}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ExerciseHistoryList;
