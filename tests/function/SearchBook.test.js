import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { render, fireEvent, waitFor } from "@testing-library/react-native";

import { SearchProvider } from "../../src/providers/SearchProvider/SearchProvider";
import { SearchContext } from "../../src/providers/SearchProvider/SearchProvider";

export const TestComponent = () => {
    const SearchService = useContext(SearchContext);

	const [searchBookTitleResult, setSearchBookTitleResult] = useState();
	const [searchBookAuthorResult, setSearchBookAuthorResult] = useState();
	const [searchBookYearResult, setSearchBookYearResult] = useState();


    const handleSearchBookPress = async () => {
		const results = await SearchService.searchBook(9780141806723, 1, 0);

        setSearchBookTitleResult(results.docs[0].title);
		setSearchBookAuthorResult(results.docs[0].author_name[0]);
		setSearchBookYearResult(results.docs[0].first_publish_year);
    };
  
    return (
		<View>
			<TouchableOpacity testID="test-search" onPress={handleSearchBookPress} />
			<Text testID="test-search-title-result">{searchBookTitleResult}</Text>
			<Text testID="test-search-author-result">{searchBookAuthorResult}</Text>
			<Text testID="test-search-year-result">{searchBookYearResult}</Text>
		</View>
    );
};

// This helper function is needed to wrap the TestComponent in the SearchProvider 
const renderTestComponent = () =>
	render(
		<SearchProvider>
			<TestComponent />
		</SearchProvider>
	);

describe("SearchProvider", () => {
	it("searches the Open Library API for ISBN 13 9780141806723 then returns the correct book title, author and first publish year", async () => {
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
