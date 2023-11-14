import React from 'react';
import {StyleSheet, Pressable, View, Text, ScrollView} from 'react-native';

function ToDoList({tasks, theme}) {
  const taskElements = tasks.map((task, index) => (
    <Pressable key={index}>
      {/* if the task is completed, add the completed style later. Now it is assumed as incomplete.*/}
      <View style={[styles.task, {backgroundColor: theme.backgroundColor}]}>
        <Text style={[styles.taskText, {color: theme.textColor}]}>{task}</Text>
      </View>
    </Pressable>
  ));

  return <ScrollView>{taskElements}</ScrollView>;
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 20,
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 20,
  },
});

export default ToDoList;
