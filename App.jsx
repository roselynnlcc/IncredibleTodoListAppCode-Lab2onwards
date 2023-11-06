/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
import {SafeAreaView, Button, View, Text, StyleSheet} from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

const lightTheme = {
  backgroundColor: 'white',
  textColor: 'black',
};

const darkTheme = {
  backgroundColor: 'black',
  textColor: 'white',
};

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  // Step 2
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
    <View style={[{flex: 1, backgroundColor: theme.backgroundColor}]}>
      <SafeAreaView>
        <Text
          style={[
            {
              color: theme.textColor,
              textAlign: 'center',
              fontSize: 32,
              margin: 10,
            },
          ]}>
          Incredible ToDo App
        </Text>
        <Button
          title={
            theme === lightTheme
              ? 'Change to Dark Mode'
              : 'Change to Light Mode'
          }
          onPress={toggleTheme}
        />
        <ToDoList tasks={tasks} theme={theme} />
        <ToDoForm addTask={addTask} />
      </SafeAreaView>
    </View>
  );
}

export default App;
