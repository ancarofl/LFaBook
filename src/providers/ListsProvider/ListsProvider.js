import React, { useEffect, useState } from 'react';

import { constants } from "../../constants/constants";
import { getItemFromStorage } from '../../util/Helpers';
import { storeItemToStorage } from '../../util/Helpers';

export const ListsContext = React.createContext()

export const ListsProvider = ({ children }) => {
    const CURRENT_LISTS_KEYS = [constants.READING_LIST_STORAGE_KEY, constants.WISH_LIST_STORAGE_KEY];

    const [bookLists, setBookLists] = useState({bookDemoReadingList: [], bookDemoWishList: []});
    const [areBookListsLoadedFromStorage, setAreBookListsLoadedFromStorage] = useState(false);

    useEffect(() => {
        ! areBookListsLoadedFromStorage ? loadBookListsFromStorage(CURRENT_LISTS_KEYS) : storeBookListsToStorage(CURRENT_LISTS_KEYS);
    }, [areBookListsLoadedFromStorage, bookLists])

    const loadBookListsFromStorage = async (listKeys) => {
        for (let i = 0 ; i < listKeys.length; i++) {
            const list = await getItemFromStorage(listKeys[i]);
            if (list) setBookLists((bookLists) => ({...bookLists, [listKeys[i]]: list}));
        }  
        setAreBookListsLoadedFromStorage(true);   
    }

    const storeBookListsToStorage = (listsKeys) => {
        for (let i = 0 ; i < listsKeys.length; i++) {
            storeItemToStorage(listsKeys[i], bookLists[listsKeys[i]]);
        } 
    }

    const isBookOnList = (listKey, bookKey) => {
        return bookLists[listKey].includes(bookKey);
    }

    const updateList = (listKey, bookKey) => {
        isBookOnList(listKey, bookKey) ? removeBookFromList(listKey, bookKey) : addBookToList(listKey, bookKey);
    }

    const addBookToList = (listKey, bookKey) => {
        setBookLists((bookLists) => ({...bookLists, [listKey]: [...bookLists[listKey], bookKey]}));
    }

    const removeBookFromList = (listKey, bookKey) => {
        const listAfterItemRemoved = bookLists[listKey].filter((prevItem) => prevItem !== bookKey);
        setBookLists((bookLists) => ({...bookLists, [listKey]: listAfterItemRemoved }));
    }

    return (
        <ListsContext.Provider value={{ 
                bookLists, setBookLists,
                isBookOnList, updateList
            }}>
            {children}
        </ListsContext.Provider>
    )
}
