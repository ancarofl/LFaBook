import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';

export default StyleSheet.create({
    backgroundImage: {
        backgroundColor: colors.lightGrey,
        height: 260,
    },
    container: {
        flex: 1,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    arrowIconContainer: {
        padding: 10,
    },
    bookImageWrapper: {
        alignItems: 'center',
    },
    thumbnail: {
        height: 180,
        width: 120,
        borderRadius: 10,
    }
});
