import React, { useEffect, useState } from 'react';

import { constants } from "../../constants/constants";
import { clearAsyncStorage } from '../../util/Helpers';
import { getItemFromStorage } from '../../util/Helpers';
import { seeAsyncStorageContent } from '../../util/Helpers';
import { storeItemToStorage } from '../../util/Helpers';


export const ListsContext = React.createContext()

export const ListsProvider = ({ children }) => {
    const [readingList, setReadingList] = useState([]);
    const [isReadingListLoadedFromLocalStorage, setIsReadingListLoadedFromLocalStorage] = useState(false);

    const [wishList, setWishList] = useState([]);
    const [isWishListLoadedFromLocalStorage, setIsWishListLoadedFromLocalStorage] = useState(false);

    useEffect(() => {
        ! isReadingListLoadedFromLocalStorage ? loadReadingList() : storeItemToStorage(constants.READING_LIST_STORAGE_KEY, readingList);
    }, [readingList])

    useEffect(() => {
        ! isWishListLoadedFromLocalStorage ? loadWishList() : storeItemToStorage(constants.WISH_LIST_STORAGE_KEY, wishList);
    }, [wishList])

    const loadReadingList = async () => {
        const list = await getItemFromStorage(constants.READING_LIST_STORAGE_KEY);
        setIsReadingListLoadedFromLocalStorage(true);
        if (list) setReadingList(list);
    }

    const loadWishList = async () => {
        const list = await getItemFromStorage(constants.WISH_LIST_STORAGE_KEY);
        setIsWishListLoadedFromLocalStorage(true);
        if (list) setWishList(list);
    }

    const isBookOnList = (listKey, bookKey) => {
        return listKey === constants.READING_LIST_STORAGE_KEY ? readingList.includes(bookKey) : wishList.includes(bookKey);
    }

    const updateList = (listKey, bookKey) => {
        isBookOnList(listKey, bookKey) ? removeBookFromList(listKey, bookKey) : addBookToList(listKey, bookKey);
    }

    const addBookToList = (listKey, bookKey) => {
        listKey === constants.READING_LIST_STORAGE_KEY ? setReadingList([...readingList, bookKey]) : setWishList([...wishList, bookKey]);
    }

    const removeBookFromList = (listKey, bookKey) => {
        listKey === constants.READING_LIST_STORAGE_KEY ?
            setReadingList((prevState) => prevState.filter((prevItem) => prevItem !== bookKey)) : setWishList((prevState) => prevState.filter((prevItem) => prevItem !== bookKey));
    }

    return (
        <ListsContext.Provider value={{ 
                readingList, setReadingList,
                wishList, setWishList,
                isBookOnList, updateList
            }}>
            {children}
        </ListsContext.Provider>
    )
}
