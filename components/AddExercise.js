import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { styles } from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';

const sportsOptions = ['Running', 'Walking', 'Swimming'];

const AddExercise = ({ onAddExercise, units }) => {
  const [sportType, setSportType] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleAddExercise = () => {
    if (!sportType || !distance || !duration) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }

    const parsedDistance = parseFloat(distance);
    const parsedDuration = parseFloat(duration);

    if (parsedDistance <= 0 || parsedDuration <= 0) {
      Alert.alert('Validation Error', 'Distance and duration must be greater than zero.');
      return;
    }

    const exercise = {
      sportType,
      distance: units === 'miles' ? parsedDistance * 0.621371 : parsedDistance,
      duration: parsedDuration,
      date,
    };

    onAddExercise(exercise);

    setSportType('');
    setDistance('');
    setDuration('');
    setDate(new Date());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Exercise</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Sport Type:</Text>
        {sportsOptions.map(option => (
          <TouchableOpacity
            key={option}
            style={[styles.button, sportType === option && styles.Buttonstyle]}
            onPress={() => setSportType(option)}
          >
            <Text style={[styles.buttonText, sportType === option && { color: 'white' }]}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>


      <View style={styles.inputContainer}>
        <Text style={styles.label}>Distance ({units === 'miles' ? 'miles' : 'km'}):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={distance}
          onChangeText={text => setDistance(text)}
        />
      </View>


      <View style={styles.inputContainer}>
        <Text style={styles.label}>Duration (min):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={duration}
          onChangeText={text => setDuration(text)}
        />
      </View>


      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date:</Text>
        <TouchableOpacity style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
          <Text style={styles.datePickerButtonText}>{date.toDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>

      <TouchableOpacity style={[styles.button, styles.Buttonstyle]} onPress={handleAddExercise}>
        <Text style={styles.buttonText}>Add Exercise</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddExercise;
