import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

import SearchIcon from '../../../assets/SearchIcon';
import styles from './SearchBarStyles';

const SearchBar = (props) => {
    const [searchInputText, setSearchInputText] = useState(props.searchInputText);

    const handlePressSearchButton = (text) => {
        if (text?.length) {
			props.handlePressSearchButton(text);
        }
        else {
            alert("Please enter a search term! This could be a book title, an author's name, an ISBN and more...");
        }
    };

    return (
        <View style={styles.searchBar}>
            <TextInput
                onChangeText={setSearchInputText}
                placeholder="Search"
                style={styles.searchInput}
                value={searchInputText}
            />
            <TouchableOpacity
                onPress={() => handlePressSearchButton(searchInputText)}
                style={styles.searchButton}
            >
                <SearchIcon/>
            </TouchableOpacity>
        </View>
    );
};

export default SearchBar;