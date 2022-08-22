import React, { useContext, useEffect, useState } from 'react';
import { Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { openLibraryAPI } from '../../constants/openLibraryAPI';
import theme from "../../constants/theme";
import Loading from '../../components/Loading/Loading';
import BookCoverHeader from '../../components/BookCoverHeader/BookCoverHeader';
import { SearchContext } from '../../providers/SearchProvider/SearchProvider';
import styles from './BookSingleStyles';

const BookSingleScreen = (props) => {
    const SearchService = useContext(SearchContext);
    const book = props.route.params.item;
    const [bookDescription, setBookDescription] = useState(null);

    useEffect(() => {
        fetchBookDescription();
    }, [])

    const fetchBookDescription = async () => {
        const result = await SearchService.getWorkDescription(book.key);
        if (result) setBookDescription(result);
    }

    const renderBookDescriptionArea = () => {
        if (bookDescription) {
            return (
                <Text>{bookDescription}</Text>
            );
        }
        else if (SearchService.isGetWorkDescriptionInProgress) {
            return (
                <Loading/>
            );
        }
        else return (
                <>
                    <View style={styles.missingDescriptionContainer}>
                        <Text style={styles.missingDescriptionText}>This work appears to be missing a description. Check out {renderVolunteerText()} to find out how you can contribute.</Text>
                    </View>
                </>
            );
    }

    const renderVolunteerText = () => {
        return (
            <TouchableOpacity onPress={() => Linking.openURL(openLibraryAPI.VOLUNTEER_LINK)}>
                <Text style={[theme.link, styles.link]}>{openLibraryAPI.VOLUNTEER_LINK}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <SafeAreaView style={theme.safeAreaContainer}>
            <BookCoverHeader book={book}/>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <Text style={styles.title}>{book.title}</Text>
                    <View style={styles.authorPublishYearContainer}>
                        <Text style={styles.authorPublishYearText}>{book.author_name?.join(', ')}</Text>
                        <Text style={styles.authorPublishYearText}>{book.first_publish_year}</Text>
                    </View>
                    {renderBookDescriptionArea()}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default BookSingleScreen;