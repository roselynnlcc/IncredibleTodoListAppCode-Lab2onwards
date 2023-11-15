import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

// click Ctrl M to debug
const ChuckNorrisFact = ({ navigation }) => {
  const [fact, setFact] = React.useState('');
  const fetchFact = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    console.log(response);
    // have to put await here because it is a promise that we have to wait for
    const parsed = await response.json();

    const newFact = parsed.value;
    setFact(newFact);
    // or using destructuring
    // const {value : fact } = parsed;
  };

  // cannot directly call async function in useEffect
  React.useEffect(() => {
    fetchFact();
    // if we add fact in dependency array, it will re-render every time fact is changed
  }, []);

  const handleRefresh = () => {
    fetchFact();
  };
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 22}}>{fact}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Refresh" onPress={handleRefresh} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  buttonContainer: {
    marginBottom: 10,
  },
});

export default ChuckNorrisFact;
