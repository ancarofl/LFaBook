import React, { useContext, useState } from 'react';
import { ActivityIndicator, TextInput, TouchableOpacity, View } from 'react-native';

import { colors } from '../../constants/colors';
import { SearchContext } from '../../providers/SearchProvider/SearchProvider';
import SearchIcon from '../../../assets/SearchIcon';
import styles from './SearchBarStyles';

const SearchBar = (props) => {
    const SearchService = useContext(SearchContext);
    const [searchInputText, setSearchInputText] = useState(props.searchInputText);

    const handlePressSearchButton = (text) => {
        if (text?.length) {
            props.handlePressSearchButton(text);
        }
        else {
            alert("Please enter a search term! This could be a book title, an author's name, an ISBN and more...");
        }
    };

    const renderIcon = () => {
        if (SearchService.isNewBookSearchInProgress) {
            return <ActivityIndicator color={colors.white} style={styles.searchingActivityIndicator}></ActivityIndicator>;
        }
        return <SearchIcon/>;
    }

    return (
        <View style={styles.searchBar}>
            <TextInput
                onChangeText={setSearchInputText}
                placeholder="Search"
                style={styles.searchInput}
                value={searchInputText}
            />
            <TouchableOpacity
                disabled={SearchService.isNewBookSearchInProgress}
                onPress={() => handlePressSearchButton(searchInputText)}
                style={styles.searchButton}
            >
                {renderIcon()}
            </TouchableOpacity>
        </View>
    );
};

export default SearchBar;