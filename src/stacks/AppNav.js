import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Search from '../screens/Search/Search';
import SearchResults from '../screens/SearchResults/SearchResults';

const Stack = createNativeStackNavigator();

const AppNav = () => {
  return (
	<Stack.Navigator
		screenOptions={{
			headerShown: false
		}}
	>
		<Stack.Screen component={Search} name="SearchScreen"/>
		<Stack.Screen component={SearchResults} name="SearchResultsScreen"/>
	</Stack.Navigator>
  );
};

export default AppNav;
