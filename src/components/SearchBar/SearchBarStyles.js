import { StyleSheet } from 'react-native';

import { colors } from "../../constants/colors"

export default StyleSheet.create({
    searchBar: {
        alignItems: 'center', 
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    searchInput: {
        flex: 1,
        fontSize: 20,
        padding: 10,
    },
    searchButton: {
        backgroundColor: colors.primaryButtonBackground,
        borderRadius: 10,
        margin: 5,
        padding: 10,
    }
});
