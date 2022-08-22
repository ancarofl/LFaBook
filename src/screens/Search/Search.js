import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import styles from './SearchStyles';

const Search = () => {
    const navigation = useNavigation();

    const handleNavigateToSearchResultsScreen = () => {
        navigation.navigate('SearchResultsScreen');
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Search screen</Text>
                <TouchableOpacity onPress={() => handleNavigateToSearchResultsScreen()}><Text>Go to search results</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Search;