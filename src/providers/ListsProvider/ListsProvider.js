import React, { useEffect, useState } from 'react';

import { constants } from "../../constants/constants";
import { clearAsyncStorage } from '../../util/Helpers';
import { getItemFromStorage } from '../../util/Helpers';
import { seeAsyncStorageContent } from '../../util/Helpers';
import { storeItemToStorage } from '../../util/Helpers';


export const ListsContext = React.createContext()

export const ListsProvider = ({ children }) => {
    const [bookLists, setBookLists] = useState({readingList: [], wishList: []});
    const [areBookListsLoadedFromStorage, setAreBookListsLoadedFromStorage] = useState(false);

    useEffect(() => {
        //clearAsyncStorage();
        seeAsyncStorageContent();
    }, [])

    useEffect(() => {
        if (! areBookListsLoadedFromStorage) {
            loadBookLists([constants.READING_LIST_STORAGE_KEY, constants.WISH_LIST_STORAGE_KEY]);
        } 
        else {
            listKeys = [constants.READING_LIST_STORAGE_KEY, constants.WISH_LIST_STORAGE_KEY];
            for (let i = 0 ; i < listKeys.length; i++) {
                storeItemToStorage(listKeys[i], bookLists[listKeys[i]]);
            } 
        }
            
    }, [areBookListsLoadedFromStorage, bookLists])

    const loadBookLists = async (listKeys) => {
        for (let i = 0 ; i < listKeys.length; i++) {
            const list = await getItemFromStorage(listKeys[i]);
            if (list) setBookLists((bookLists) => ({...bookLists, [listKeys[i]]: list}));
        }  
        setAreBookListsLoadedFromStorage(true);   
    }

    const isBookOnList = (listKey, bookKey) => {
        return bookLists[listKey].includes(bookKey);
    }

    const updateList = (listKey, bookKey) => {
        isBookOnList(listKey, bookKey) ? removeBookFromList(listKey, bookKey) : addBookToList(listKey, bookKey);
    }

    const addBookToList = (listKey, bookKey) => {
        setBookLists((bookLists) => ({...bookLists, [listKey]: [...bookLists[listKey], bookKey]}))
    }

    const removeBookFromList = (listKey, bookKey) => {
        const newList = bookLists[listKey].filter((prevItem) => prevItem !== bookKey);

        setBookLists((bookLists) => 
            ({...bookLists, [listKey]: newList }))    
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
