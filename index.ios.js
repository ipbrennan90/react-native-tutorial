/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
	NavigatorIOS,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SearchPage from './SearchPage'

export default class PropertyFinder extends Component {
  render() {
    return (
			<NavigatorIOS style={styles.container} initialRoute={{
				title:'Property Finder',
				component: SearchPage
			}}/>
    );
  }
}

class HelloWorld extends Component {
	render() {
		return(
			<View>
				<Text style={styles.text}>
					Hello BreBreShuop
				</Text>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	text: {
		color: 'black',
		backgroundColor: 'transparent',
		fontSize: 30,
		margin: 80
	},
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
