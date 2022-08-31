import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';

import WishListIcon from '../../../assets/WishListIcon';
import ReadingListIcon from '../../../assets/ReadingListIcon';
import { constants } from '../../constants/constants';
import { colors } from '../../constants/colors';
import { ListsContext } from '../../providers/ListsProvider/ListsProvider';
import styles from './ReadingAndWishListButtonsStyles';

const ReadingAndWishListButtons = (props) => {
    const ListsService = useContext(ListsContext);
    const book = props.book;

    const handlePressListButton = (listKey) => {
        ListsService.updateList(listKey, book.key);
    }

    const iconColor = (listKey) => { return ListsService.isBookOnList(listKey, book.key) ? colors.primaryButtonIconActive : colors.primaryButtonIcon; }

    return (
        <View style={styles.listButtonsContainer}>
            <TouchableOpacity
                onPress={() => handlePressListButton(constants.WISH_LIST_STORAGE_KEY)}
                style={styles.listButton}
            >
                <WishListIcon color={iconColor(constants.WISH_LIST_STORAGE_KEY)} height={props.height} width={props.width} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handlePressListButton(constants.READING_LIST_STORAGE_KEY)}
                style={styles.listButton}
            >
                <ReadingListIcon color={iconColor(constants.READING_LIST_STORAGE_KEY)} height={props.height} width={props.width}/>
            </TouchableOpacity>
        </View> 
    );
};

export default ReadingAndWishListButtons;
