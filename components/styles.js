import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#000000',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 50,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#FFA500',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  Buttonstyle: {
    backgroundColor: '#ffcd90'
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  inputLabel: {
    marginBottom: 8,
    color: '#000000',
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000000',
  },
  picker: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000000',
  },
  datePicker: {
    width: '100%',
    marginBottom: 20,
  },
  // Exercise History List Styles
  workoutItem: {
    marginBottom: 20,
  },
  workoutText: {
    fontSize: 16,
    marginBottom: 5,
  },
  totalDistanceContainer: {
    marginBottom: 20,
  },
  totalDistanceText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});