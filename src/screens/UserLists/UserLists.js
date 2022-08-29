import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { openLibraryAPI } from '../../constants/openLibraryAPI';
import BookCard from '../../components/BookCard/BookCard';
import Loading from '../../components/Loading/Loading';
import theme from '../../constants/theme';
import { SearchContext } from '../../providers/SearchProvider/SearchProvider';
import styles from './UserListsStyles';
import { constants } from '../../constants/constants';
import { ListsContext } from '../../providers/ListsProvider/ListsProvider';

const UserLists = () => {
    const ListsService = useContext(ListsContext);
    const SearchService = useContext(SearchContext);

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks(constants.READING_LIST_STORAGE_KEY);
    }, [ListsService.bookLists])

    const fetchBooks = async (listKey) => {
        const results = await SearchService.searchListBooks(listKey);
        console.log("Results: " , results);
        setBooks(results);
    }

    const renderItem = ({item}) => <Text>{item}</Text>;

    const renderLists = () => {
        return (
            SearchService.isBookSearchInProgress ?
                <Loading/>
            :
                <>
                    <FlatList
                        data={books}
                        keyExtractor={(item) => item.key}
                        renderItem={renderItem}
                    />
                </>
        );
    }

    return (
        <SafeAreaView style={theme.safeAreaContainer}>
            <View style={styles.container}>
                {renderLists()}
            </View>
        </SafeAreaView>
    );
};

export default UserLists;