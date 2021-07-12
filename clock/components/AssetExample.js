import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AssetExample extends React.Component {
  constructor() {
    super()
    this.state = { date: new Date() }
  }
  componentDidMount() {
    setInterval(() => this.time(), 1000)
  }
  time() {
    this.setState({ 
      date: new Date()
       });
  }
  render() {
    return (
      <View style={styles.container}>
      <Text style = {{marginBottom: 20,fontSize:30, fontWeight:'bold',color: 'pink'}}>
      Live Clock
      </Text>
        <Text style={styles.paragraph}>
        {this.state.date.toLocaleDateString()}
        </Text>
        <Text style={styles.paragraph}>
          {this.state.date.toLocaleTimeString('en-US')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
     backgroundColor:'green'
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
   
  },
  logo: {
    height: 128,
    width: 128,
  },
});
