import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookSingle from '../screens/BookSingle/BookSingle';
import Search from '../screens/Search/Search';
import SearchResults from '../screens/SearchResults/SearchResults';
import { ListsProvider } from '../providers/ListsProvider/ListsProvider';
import { SearchProvider } from '../providers/SearchProvider/SearchProvider';

const Stack = createNativeStackNavigator();

const AppNav = () => {
  return (
	<ListsProvider>
		<SearchProvider>
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}
			>
				<Stack.Screen component={Search} name="SearchScreen"/>
				<Stack.Screen component={SearchResults} name="SearchResultsScreen"/>
				<Stack.Screen component={BookSingle} name="BookSingleScreen"/>
			</Stack.Navigator>
		</SearchProvider>
	</ListsProvider>
  );
};

export default AppNav;
