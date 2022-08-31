import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';

export default StyleSheet.create({
    content: {
		borderColor: colors.grey,
		borderWidth: 1,   
		flexDirection: 'row',
		height: 180,
        marginVertical: 10,
        paddingVertical: 12,
		paddingHorizontal: 10,
    },
	thumbnailContainer: {
        borderColor: colors.grey,
        borderWidth: 2,
        justifyContent: 'flex-start',
        overflow: 'hidden',
    },
	thumbnail: {
        width: 120,
        height: 200,
    },
    title: {
        color: colors.blue,
        fontSize: sizes.fontLarge,
        textAlign: 'left',
    },
    author: {
        fontSize: sizes.fontSmall,
    },
    year: {
        alignSelf: 'center',
        fontSize: sizes.fontSmall,
    },
    cardContent: {
        flexShrink: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        width: '100%',
    },
    authorAndListButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
