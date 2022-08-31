import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import SearchBar from '../../components/SearchBar/SearchBar';
import theme from '../../constants/theme';
import styles from './SearchStyles';

const Search = () => {
    const navigation = useNavigation();

	const handleNavigateToSearchResultsScreen = (searchText) => {
        navigation.navigate('SearchResultsScreen', {
            'searchText': searchText
        });
    }

    const handlePressSearchButton = (searchText) => {
        handleNavigateToSearchResultsScreen(searchText);
    }

    return (
        <SafeAreaView style={theme.safeAreaContainer}>
            <View style={styles.container}>
                <SearchBar handlePressSearchButton={handlePressSearchButton} searchInputText={'Harry potter'} />
            </View>
        </SafeAreaView>
    );
};

export default Search;