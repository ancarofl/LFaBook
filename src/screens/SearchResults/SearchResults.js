import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './SearchResultsStyles';

const SearchResults = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Search results</Text>
            </View>
        </SafeAreaView>
    );
};

export default SearchResults;