import React, { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SearchBar from '../../components/SearchBar/SearchBar';
import theme from '../../constants/theme';
import styles from './SearchResultsStyles';

const SearchResults = ({route}) => {
    const [searchText, setSearchText] = useState(route.params.searchText);

    const handlePressSearchButton = () => {
        console.log("Handle press search bar button!");
    }

    return (
        <SafeAreaView style={theme.safeAreaContainer}>
            <View style={styles.container}>
                <SearchBar handlePressSearchButton={handlePressSearchButton} searchInputText={searchText}/>
            </View>
        </SafeAreaView>
    );
};

export default SearchResults;