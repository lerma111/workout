import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const SettingsScreen = () => {
  // Remove the props and state variables
  // const [units, setLocalUnits] = useState('km');

  // Remove the handleSaveSettings function

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings EI KÄYTÖSSÄ</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.Buttonstyle]}
          // Remove onPress handlers from buttons
        >
          <Text style={styles.buttonText}>Kilometers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.Buttonstyle]}
          // Remove onPress handlers from buttons
        >
          <Text style={styles.buttonText}>Miles</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.button, styles.Buttonstyle]}
        // Remove onPress handler from Save Settings button
      >
        <Text style={styles.buttonText}>Save Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
