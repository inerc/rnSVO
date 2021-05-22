import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

const CreateTaskScreen = ({navigation}) => {
  const onItemPress = item => {
    navigation.navigate(item);
  };

  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Название"
          style={styles.TextInput}
          placeholderTextColor="#003f5c"
          onChangeText={() => {}}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Описание"
          placeholderTextColor="#003f5c"
          onChangeText={() => {}}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Статус"
          placeholderTextColor="#003f5c"
          onChangeText={() => {}}
        />
      </View>

      <View style={styles.inputView}>
        <DatePicker
          style={styles.TextInput}
          mode="time"
          date={date}
          onDateChange={setDate}
        />
      </View>

      <TouchableOpacity
        onPress={onItemPress.bind(this, 'engineer/list/tasks')}
        style={styles.loginBtn}>
        <Text style={styles.loginText}>Войти</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLabel: {
    backgroundColor: '#fff',
    textAlign: 'left',
  },

  image: {
    marginBottom: 40,
    width: '70%',
    resizeMode: 'stretch',
  },

  inputView: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.23)',
    borderRadius: 8,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#008fc2',
  },
  labelInput: {
    textAlign: 'left',
  },
});

export default CreateTaskScreen;
