import React, {useState} from 'react';
import axios from "axios";

import { openLibraryAPI } from "../../constants/openLibraryAPI";
import { getDescription } from './SearchProviderHelpers';

export const SearchContext = React.createContext()

export const SearchProvider = ({ children }) => {
    const [isNewBookSearchInProgress, setIsNewBookSearchInProgress] = useState(false);
    const [isBookSearchInProgress, setIsBookSearchInProgress] = useState(false);
    const [isGetWorkDescriptionInProgress, setIsGetWorkDescriptionInProgress] = useState(false);

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
            isGetWorkDescriptionInProgress
        }}>
            {children}
        </SearchContext.Provider>
    )
}
