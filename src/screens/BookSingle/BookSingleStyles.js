import { StyleSheet } from 'react-native';

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
        textAlign: 'left',
        color: "blue",
        fontSize: 26
    },
    authorPublishYearContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    authorPublishYearText: {
        fontSize: 20,
    },
    missingDescriptionContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    missingDescriptionText: {
        fontSize: 18,
    },
    link: {
        fontSize: 18,
    }
});
