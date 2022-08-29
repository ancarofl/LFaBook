import React, { useContext, useState } from 'react';
import axios from "axios";

import { openLibraryAPI } from "../../constants/openLibraryAPI";
import { getDescription } from './SearchProviderHelpers';

import { ListsContext } from '../ListsProvider/ListsProvider';

export const SearchContext = React.createContext()

export const SearchProvider = ({ children }) => {
    const [isNewBookSearchInProgress, setIsNewBookSearchInProgress] = useState(false);
    const [isBookSearchInProgress, setIsBookSearchInProgress] = useState(false);
    const [isGetWorkDescriptionInProgress, setIsGetWorkDescriptionInProgress] = useState(false);

    const ListsService = useContext(ListsContext);

    // A new book search has the default offset. Otherwise we append offset results to existing results to get an infinite scroll effect.
    const isNewBookSearch = (offset) => {
        return offset === openLibraryAPI.defaultOffset;
    }

    const searchBook = async (searchTerm, limit = openLibraryAPI.defaultLimit, offset = openLibraryAPI.defaultOffset) => {
        isNewBookSearch(offset) ? setIsNewBookSearchInProgress(true) : setIsBookSearchInProgress(true);

        return axios.get(openLibraryAPI.SEARCH_ENDPOINT + searchTerm + '&fields=title,author_name,first_publish_year,cover_i,key&limit=' + limit + '&offset=' + offset)
            .then(function(response) {
                return response.data;
            }).catch(function(error) {
                console.log(error);
            }).finally(function() {
                setIsBookSearchInProgress(false);
                setIsNewBookSearchInProgress(false);
            });
    }

    const fetchWork = async (work) => {
        return axios.get('https://openlibrary.org' + work + '.json')
            .then(function(response) {
                return response.data.title;
            }).catch(function(error) {
                console.log(error);
            });
    }

    const searchListBooks = async (listKey, limit = openLibraryAPI.defaultLimit, offset = openLibraryAPI.defaultOffset) => {
        setIsNewBookSearchInProgress(true);

        const userListsData = [];
        const list = ListsService.bookLists[listKey];
        for (let i = 0; i < list.length; i++) {
            const book = await fetchWork(list[i]);
            console.log("Book= ", book);
            userListsData.push(book);
        }

        console.log("User list data" , userListsData);
        return userListsData;
    }

    const getWorkDescription = async (id) => {
        setIsGetWorkDescriptionInProgress(true);

        return axios.get("https://openlibrary.org/" + id + ".json")
            .then(function(response) {
                return getDescription(response.data?.description);
            }).catch(function(error) {
                console.log(error);
            }).finally(function() {
                setIsGetWorkDescriptionInProgress(false);
            });
    }

    return (
        <SearchContext.Provider value={{
            searchBook,
            isNewBookSearchInProgress,
            isBookSearchInProgress,
            getWorkDescription,
            isGetWorkDescriptionInProgress,

            searchListBooks
        }}>
            {children}
        </SearchContext.Provider>
    )
}
