import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';

export default StyleSheet.create({
    scrollView: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        flexGrow: 1,
        padding: 20,
    },
    title: {
        color: colors.blue,
        fontSize: sizes.fontExtraLarge,
        textAlign: 'left',
    },
    authorPublishYearContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    authorPublishYearText: {
        fontSize: sizes.fontBase,
    },
    missingDescriptionContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    missingDescriptionText: {
        fontSize: sizes.fontSmall,
    },
    link: {
        fontSize: sizes.fontSmall,
    }
});
