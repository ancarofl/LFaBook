import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';

export default StyleSheet.create({
    listButtonsContainer: {
        flexDirection: 'row',
    },
    listButton: {
        backgroundColor: colors.primaryButtonBackground,
        borderRadius: 10,
        marginLeft: 5,
        padding: 10,
    },
});
