import React from 'react';
import {StyleSheet, Pressable, View, Text, ScrollView} from 'react-native';

function ToDoList({tasks}) {
  const taskElements = tasks.map((task, index) => (
    <Pressable key={index}>
      <View style={[styles.task, styles.incomplete]}>
        <Text style={styles.taskText}>{task}</Text>
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
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
