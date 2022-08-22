import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BookIcon from '../../../assets/BookIcon';
import { openLibraryAPI } from "../../constants/openLibraryAPI";
import styles from './BookCardStyles';

const BookCard = ({item}) => {
    const navigation = useNavigation();

    const handlePressItem = () => {
        navigation.navigate('BookSingleScreen', {
            'item': item
        });
    }

    const renderBookCover = () => {
        if (item.cover_i) {
            return (
                <Image
                    style={styles.thumbnail}
                    source={{uri: openLibraryAPI.COVER_IMAGE_ENDPOINT + item.cover_i + openLibraryAPI.COVER_IMAGE_MEDIUM_SUFFIX}}
                />
            );
        }
        return <BookIcon height={150} width={120}/>;
    }

    return (
        <TouchableOpacity onPress={() => handlePressItem()}>
            <View style={styles.content}> 
                <View style={styles.thumbnailContainer}>
                    {renderBookCover()}
                </View>

                <View style={styles.cardContent}>
                    <Text numberOfLines={3} style={styles.title}>{item.title}</Text>
                    <Text numberOfLines={1} style={styles.author}>{item.author_name?.join(', ')}</Text>
                    <View style={styles.authorAndListButtonsContainer}>
                        <Text style={styles.year}>{item.first_publish_year}</Text>
                    </View>
                </View>  
            </View>
        </TouchableOpacity>
    );
};

export default BookCard;
