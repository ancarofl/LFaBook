# Looking For a Book (LFaB)

Search for books using Open Library Api.

https://user-images.githubusercontent.com/35558437/185999153-063ca24a-2217-4f53-8ad6-3f1df77a45b9.mp4

## Features (v0.1) ##
- Search for a book by title, author, ISBN, specific terms using https://openlibrary.org/dev/docs/api/search
- See total number of results
- See results list containing book title, author, first publish year and book cover
- See a description of the book by pressing on an item from the results list. Description retrieved from https://openlibrary.org/dev/docs/api/books
- Add an item to locally stored read list or wish list

## Planned features/future ideas ##
- Implement (more) tests
- Implement image caching
- Use SQLLite to persist read list and wish list
- Cloud sync of the lists
- Read list + wish list separate screens
- Dynamic layout where the user can create their own app with the details they find relevant
- Recommendations based on lists
- Button animations
- App themes

## Development process
Development time: ~7h

Challenges: testing (no prior React Native testing experience)

# Local development  #

Clone the repo then from the project's root folder:
- run `npx react-native start`
- in a new terminal run `npx react-native run-ios` or `npx react-native run-android`

#### Additional IOS steps ####
- `cd ios`
- `pod install` 

#### Tests ###
- `npm test`
