import React, { useState } from 'react';
import { View, Text, SafeAreaView, Button, StyleSheet } from 'react-native';
import ToDoList from '../ToDoList';
import ToDoForm from '../ToDoForm';

const lightTheme = {
  backgroundColor: 'white',
  textColor: 'black',
  buttonColor: '#007BFF', // Example light theme button color
};

const darkTheme = {
  backgroundColor: 'black',
  textColor: 'white',
  buttonColor: '#1E90FF', // Example dark theme button color
};

function Home({ navigation }) {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  const addTask = task => {
    if (task === '') {
      alert('Please input the task.');
    } else if (!tasks.includes(task)) {
      setTasks([...tasks, task]);
    } else {
      alert('The task already exists! Please enter a new task.');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>
        Incredible ToDo App
      </Text>
      <Button
        title={theme === lightTheme ? 'Change to Dark Mode' : 'Change to Light Mode'}
        onPress={toggleTheme}
        color={theme.buttonColor}
      />
      <SafeAreaView style={styles.safeAreaView}>
        <ToDoList tasks={tasks} theme={theme} />
        <View style={styles.toDoFormContainer}>
        <ToDoForm addTask={addTask} />
        </View>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
          color={theme.buttonColor}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    marginBottom: 20,
  },
  safeAreaView: {
    flex: 1,
  },
  toDoFormContainer: {
    marginBottom: 20,
  }
});

export default Home;
