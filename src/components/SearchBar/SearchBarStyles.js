import { StyleSheet } from 'react-native';

import { colors } from "../../constants/colors"
import { sizes } from '../../constants/sizes';

export default StyleSheet.create({
    searchBar: {
        alignItems: 'center', 
        borderColor: colors.black,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    searchInput: {
        flex: 1,
        fontSize: sizes.fontBase,
        padding: 10,
    },
    searchButton: {
        backgroundColor: colors.primaryButtonBackground,
        borderRadius: 10,
        margin: 5,
        padding: 10,
    },
    searchingActivityIndicator: {
        height: sizes.defaultIconSize,
        width: sizes.defaultIconSize,
    }
});
