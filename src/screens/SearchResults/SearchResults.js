import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { openLibraryAPI } from '../../constants/openLibraryAPI';
import BookCard from '../../components/BookCard/BookCard';
import Loading from '../../components/Loading/Loading';
import SearchBar from '../../components/SearchBar/SearchBar';
import theme from '../../constants/theme';
import { SearchContext } from '../../providers/SearchProvider/SearchProvider';
import styles from './SearchResultsStyles';

const SearchResults = ({route}) => {
    const SearchService = useContext(SearchContext);

    const [books, setBooks] = useState([]);
    const [searchOffset, setSearchOffset] = useState(0);
    const [searchText, setSearchText] = useState(route.params.searchText);
    const [resultsCount, setResultsCount] = useState(0);

    useEffect(() => {
        console.log("SEARCH OFFSET CHANGED TO ", searchOffset);

        fetchMoreBooks()
            .catch(console.error);
    }, [searchOffset])

    useEffect(() => {
        console.log("SEARCH TEXT CHANGED TO", searchText);

        fetchBooks()
            .catch(console.error);
    }, [searchText])

    // If the current offset+limit are higher than the number of results then all search results for the current searchText have been retrieved.
    const isSearchResultsEnd = () => {
        return resultsCount < searchOffset + openLibraryAPI.defaultLimit;
    }

    const isSearchTextUnchanged = (newText) => {
        return searchText === newText;
    }

    const fetchBooks = async () => {
        console.log("FETCH BOOKS");

        const results = await SearchService.searchBook(searchText, openLibraryAPI.defaultLimit, openLibraryAPI.defaultOffset);
        setBooks(results.docs);
        setResultsCount(results.numFound);
        setSearchOffset(openLibraryAPI.defaultOffset);
    }

    const fetchMoreBooks = async () => {
        console.log("FETCH MORE BOOKS");
        
        const results = await SearchService.searchBook(searchText, openLibraryAPI.defaultLimit, searchOffset);
        searchOffset === 0 ? setBooks(results.docs) : setBooks([...books, ...results.docs]);
    }

    const handleListEndReached = () => {
        if (! isSearchResultsEnd()) {
            setSearchOffset(searchOffset + openLibraryAPI.defaultLimit);
        }
    }

    const handlePressSearchButton = async (text) => {
        console.log("Handle press search bar button");

        isSearchTextUnchanged(text) ? redoPreviousSearch() : setSearchText(text);
    }

    /* This is needed because normally a new search is only performed when a change is detected in searchText(using the useEffect hook).
    Here we want to force a search even if searchText did not change. Whether that is the case or not is checked in the handlePressSearchButton function which calls this one. */
    const redoPreviousSearch = () => {
        fetchBooks()
            .catch(console.error);
    }

    const renderItem = ({item}) => <BookCard item={item}/>;

    const renderSearchMoreBooksSpinner = () => {
        if (SearchService.isBookSearchInProgress) 
            return (
                <Loading/>
            );
    }

    const renderSearchResults = () => {
        return (
            SearchService.isNewBookSearchInProgress ?
                <Loading/>
            :
                <>
                    <View style={styles.resultsCountContainer}>
                        <Text style={styles.resultsCount}>{resultsCount} result(s) found.</Text>
                    </View>
                    <FlatList
                        data={books}
                        keyExtractor={(item) => item.key}
                        onEndReached={handleListEndReached}
                        renderItem={renderItem}
                    />
                    {renderSearchMoreBooksSpinner()}
                </>
        );
    }

    return (
        <SafeAreaView style={theme.safeAreaContainer}>
            <View style={styles.container}>
                <SearchBar handlePressSearchButton={handlePressSearchButton} searchInputText={searchText}/>
                {renderSearchResults()}
            </View>
        </SafeAreaView>
    );
};

export default SearchResults;