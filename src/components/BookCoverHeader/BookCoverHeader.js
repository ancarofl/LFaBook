import React, { useMemo } from 'react';
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ArrowIcon from '../../../assets/ArrowIcon';
import BookIcon from '../../../assets/BookIcon';
import { openLibraryAPI } from '../../constants/openLibraryAPI';
import { generateRandomHexColorCode } from '../../util/Helpers';
import styles from './BookCoverHeaderStyles';

const BookCoverHeader = (props) => {
    const navigation = useNavigation();
    const book = props.book;
    const bookIconColor = generateRandomHexColorCode(); 

    const renderBookCover = () => {
        if (book.cover_i) {
            return (
                <Image
                    style={styles.thumbnail}
                    source={{uri: openLibraryAPI.COVER_IMAGE_ENDPOINT + book.cover_i + openLibraryAPI.COVER_IMAGE_LARGE_SUFFIX}}
                />
            );
        }
        return <BookIcon height={150} width={120} color={bookIconColor}/>;
    }

    return (
        <ImageBackground 
            blurRadius={10}
            resizeMode={'cover'}
            source={{uri: openLibraryAPI.COVER_IMAGE_ENDPOINT + book.cover_i + openLibraryAPI.COVER_IMAGE_MEDIUM_SUFFIX}} 
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity 
                        onPress={() => navigation.goBack()}
                        style={styles.arrowIconContainer}
                    >
                        <ArrowIcon/>
                    </TouchableOpacity>
                </View>
                <View style={styles.bookImageWrapper}>
                    {renderBookCover()}
                </View>
            </View>
        </ImageBackground>
    )
};

// The book header doesn't have to be rerendered.
export default React.memo(BookCoverHeader);
