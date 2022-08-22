import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { render, fireEvent, waitFor } from "@testing-library/react-native";

import { SearchProvider } from "./SearchProvider";
import { SearchContext } from "./SearchProvider";

/** SearchProvider contains 2 methods and 3 states. In order to test if they behave as expected, create a test component which implements all of them:
	- searchBook
	- getWorkDescription
	- isNewBookSearchInProgress
	- isBookSearchInProgress
	- isGetWorkDescriptionInProgress
*/
export const TestComponent = () => {
    const SearchService = useContext(SearchContext);

	const [ssearchBookTitleResult, setSsearchBookTitleResult] = useState();
	const [ssearchBookAuthorResult, setSsearchBookAuthorResult] = useState();
	const [ssearchBookYearResult, setSsearchBookYearResult] = useState();

	const [getWorkDescriptionResult, setGetWorkDescriptionResult] = useState('The Lord of the Rings Deluxe Edition');

    const handleSearchBookPress = async () => {
		const results = await SearchService.searchBook(9780141806723, 1, 0);

        setSsearchBookTitleResult(results.docs[0].title);
		setSsearchBookAuthorResult(results.docs[0].author_name[0]);
		setSsearchBookYearResult(results.docs[0].first_publish_year);
    };

	const handleGetWorkDescriptionPress = async () => {

	}
  
    return (
		<View>
			<TouchableOpacity testID="test-search" onPress={handleSearchBookPress} />
			<Text testID="test-search-title-result">{ssearchBookTitleResult}</Text>
			<Text testID="test-search-author-result">{ssearchBookAuthorResult}</Text>
			<Text testID="test-search-year-result">{ssearchBookYearResult}</Text>

			<TouchableOpacity testID="test-work-description" onPress={handleGetWorkDescriptionPress} />
			<Text testID="test-work-description-result">{getWorkDescriptionResult}</Text>
		</View>
    );
};

// This helper function is needed to wrap the TestComponent in the SearchProvider 
const renderTestComponent = () => {
	render(
		<SearchProvider>
			<TestComponent />
		</SearchProvider>
	);
}

describe("SearchProvider", () => {
	it("searches the Open Library API for ISBN 13 9780141806723", async () => {
		const component = renderTestComponent();

		const searchTouchableOpacityElement = component.getByTestId('test-search');
		const searchBookTitleResultTestElement = component.getByTestId('test-search-title-result');
		const searchBookAuthorResultTestElement = component.getByTestId('test-search-author-result');
		const searchBookYearResultTestElement = component.getByTestId('test-search-year-result');

		fireEvent.press(searchTouchableOpacityElement);

		await waitFor(() => {
			expect(searchBookTitleResultTestElement.props.children).toBe('The Lightning Thief');
			expect(searchBookAuthorResultTestElement.props.children).toBe('Rick Riordan');
			expect(searchBookYearResultTestElement.props.children).toBe(2005);
		})
	});
});
