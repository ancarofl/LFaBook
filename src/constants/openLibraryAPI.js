export const openLibraryAPI = {
	defaultOffset: 0,
    defaultLimit: 5,

    // TODO: Improve how endpoints are stored. Include offset+limit as well.
    /* Endpoints */
    SEARCH_ENDPOINT: "https://openlibrary.org/search.json?q=",
    COVER_IMAGE_ENDPOINT: "https://covers.openlibrary.org/b/id/",
    COVER_IMAGE_SMALL_SUFFIX: "-S.jpg",
    COVER_IMAGE_MEDIUM_SUFFIX: "-M.jpg",
    COVER_IMAGE_LARGE_SUFFIX: "-L.jpg",
};
