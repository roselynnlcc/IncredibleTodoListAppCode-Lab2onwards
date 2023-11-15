import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function About({navigation}) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Lovely To Do List App</Text>
        <Text style={styles.subtitle}>Created by: Joe Blow</Text>
        <Text style={styles.version}>Version: 0.1</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Enjoy some Chuck Norris Facts!"
            onPress={() => navigation.navigate('ChuckNorrisFact')}
          />
        </View>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </>
  );
}

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  version: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 10,
  },
});
