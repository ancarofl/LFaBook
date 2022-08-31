import { StyleSheet } from 'react-native';
import { colors } from './colors';

import { sizes } from './sizes';

export default StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        fontSize: sizes.fontBase,
    },
    link: {
        color: colors.blue,
        textDecorationLine: 'underline',
    },
});
