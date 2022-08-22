import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    content: {
		paddingVertical: 12,
		paddingHorizontal: 10,
		marginVertical: 10,
		borderColor: 'grey',
		borderWidth: 1,   
		flexDirection: 'row',
		height: 180,
    },
	thumbnailContainer: {
        borderColor: 'orange',
        borderWidth: 2,
        overflow: 'hidden',
        justifyContent:'flex-start'
    },
	thumbnail: {
        width: 120,
        height: 200,
    },
    title: {
        textAlign: 'left',
        color: "blue",
        fontSize: 22
    },
    author: {
        fontSize: 18,
    },
    year: {
        fontSize: 18,
        alignSelf: 'center',
    },
    cardContent: {
        flexShrink: 1,
        paddingHorizontal: 8,
        justifyContent: 'space-between',
        width: '100%',
    },
    authorAndListButtonsContainer: {
        alugnContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
