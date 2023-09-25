# New Next Project

This project was created from the neue fische `next` template.

You can [🔗 **use this template on CodeSandbox**](https://codesandbox.io/p/sandbox/github/neuefische/web-exercises/tree/main/templates/next?file=/README.md) or locally by running this command in your Terminal:

```bash
npx -y ghcd@latest neuefische/web-exercises/tree/main/templates/next my-app -i
```

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

Use `npm run test` to run the tests.

### CodeSandbox Cloud

Select the "Preview: 3000" tab to view this project.

Select the "Tests: logs" tab to view the tests.

> The `npm run dev` and `npm run test` scripts run automatically.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project
- `npm run start` to start a production server
- `npm run test` to run the tests
- `npm run lint` to run the linter

## [User Stories](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#user-stories)

### [User Story 1: List of all Art Pieces](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#user-story-1-list-of-all-art-pieces)

<details><summary></summary>

### [Value Proposition](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#value-proposition)

**As an** art enthusiast

**I want to** see a list of all art pieces

**so that** I can get an overview of all art pieces.

### [Acceptance Criteria](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#acceptance-criteria)

- [x] All art pieces are displayed as a list
- [x] Each art piece's image is displayed
- [x] Each art piece's title is displayed
- [x] Each art piece's artist is displayed

### [Tasks](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#tasks)

- [x] Fetch all art pieces with `SWR` in `pages/index.js`
- [x] Create the component `ArtPieces` to render a list
- [x] `ArtPieces` props: `pieces`
- [x] Create the component `ArtPiecePreview`
- [x] `ArtPiecePreview` props: `image`, `title`, `artist`

---

</details>

### [User Story 2: Spotlight Piece](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#user-story-2-spotlight-piece)

### [Value Proposition](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#value-proposition-1)

**As an** art enthusiast

**I want to** see a spotlight piece

**so that** I can get inspirational highlights.

### [Acceptance Criteria](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#acceptance-criteria-1)

- [x] One art piece is picked at random to show as a spotlight piece
- [x] The art piece image is displayed
- [x] The art piece artist is displayed

### [Tasks](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#tasks-1)

- [x] Write function to pick one art piece [at random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#examples)
- [x] Create the component `Spotlight`
- [x] `Spotlight` props: `image`, `artist`

---

### [User Story 3: Separate Pages and Navigation Bar](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#user-story-3-separate-pages-and-navigation-bar)

### [Value Proposition](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#value-proposition-2)

**As an** art enthusiast

**I want to** be able to switch between the spotlight and list view

**so that** I can navigate the app easier.

### [Acceptance Criteria](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#acceptance-criteria-2)

- [x] A navigation link labeled "Spotlight" is displayed
- [x] A navigation link labeled "Pieces" is displayed
- [x] Clicking "Spotlight" shows the SpotlightPage
- [x] Clicking "Pieces" shows the ArtPiecesPage

### [Tasks](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#tasks-2)

- [x] Move the data fetching logic to `pages/_app`
- [x] Find a solution for global state handling to have the art pieces available on all pages
- [x] Adapt the page `pages/index`: rename the function to `SpotlightPage` and have it render only the `Spotlight` component
- [x] Create the page `pages/art-pieces/index` that renders the `ArtPieces` component
- [x] Create the component `Navigation` that renders all navigation links
- [x] Create the component `Layout` that renders the `Navigation` component
- [x] Apply the `Layout` component in `pages/_app`

---

### [User Story 4: Art Piece Details Page](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#user-story-4-art-piece-details-page)

### [Value Proposition](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#value-proposition-3)

**As an** art enthusiast

**I want to** be able to see the full art piece with detail information

**so that** I can learn everything about the piece.

### [Acceptance Criteria](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#acceptance-criteria-3)

- [x] Clicking an art piece from the list shows the detail page
- [x] The art piece image is displayed
- [x] The art piece title is displayed
- [x] The art piece artist is displayed
- [x] The art piece year is displayed
- [x] The art piece genre is displayed
- [x] A back-button is displayed
- [x] Clicking the back-button shows the list view

### [Tasks](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#tasks-3)

- [x] Create the component `ArtPieceDetails`
- [x] `ArtPieceDetails` props: `image`, `title`, `artist`, `year`, `genre`
- [x] Create the page `pages/art-pieces/[slug]` that renders `ArtPieceDetails`
- [x] Read the query parameter `slug` from `next/router`
- [x] Use the `slug` to find the art piece to display

---

### [User Story 5: Favorites](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#user-story-5-favorites)

### [Value Proposition](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#value-proposition-4)

**As an** art enthusiast

**I want to** mark art piece pieces as favorites

**so that** I can find them easier.

### [Acceptance Criteria](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#acceptance-criteria-4)

- [ ] The favorite-button is displayed in the spotlight view
- [ ] The favorite-button is displayed in each entry in the list view
- [ ] The favorite-button is displayed in the details view
- [ ] Clicking the favorite-button on a non-favorite piece saves it as a favorite
- [ ] Clicking the favorite-button on a favorite piece removes it from favorites

### [Tasks](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#tasks-4)

- [ ] Create an additional state `artPiecesInfo` to save further information for art pieces
- [ ] Make the `artPiecesInfo` state globally available for all pages
- [ ] Store the favorite flag in the `artPiecesInfo`
- [ ] Reference art pieces by `slug` in the additional state
- [ ] Create the component `FavoriteButton`
- [ ] `FavoriteButton` props: `isFavorite`, `onToggleFavorite`
- [ ] Render the `FavoriteButton` component in the `Spotlight`, `ArtPiecePreview` and `ArtPieceDetails` component

---

### [User Story 6: Favorite Listing Page](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#user-story-6-favorite-listing-page)

### [Value Proposition](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#value-proposition-5)

**As an** art enthusiast

**I want to** see a comprehensive list of all my favorite art pieces

**so that** I can have an overview of all of my favorites.

### [Acceptance Criteria](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#acceptance-criteria-5)

- [x] A navigation link labeled "Favorites" is displayed
- [x] Clicking the "Favorites" shows the FavoritesPage
- [x] All favorite art pieces are displayed as a list
- [x] Each art piece's image is displayed
- [x] Each art piece's title is displayed
- [x] Each art piece's artist is displayed
- [x] Each art piece's is displayed with active favorite-button

### [Tasks](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#tasks-5)

- [x] Create the page `pages/favorites` that renders the `ArtPieces` component
- [x] Use data from the `artPiecesInfo` state to filter for all favorite art pieces
- [x] Pass the list of all favorite art pieces via prop `pieces` to the `ArtPieces` component

---

### [User Story 7: Comments for Art Pieces](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#user-story-7-comments-for-art-pieces)

### [Value Proposition](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#value-proposition-6)

**As an** art enthusiast

**I want to** write comments for art pieces

**so that** I can note my ideas regarding the work.

### [Acceptance Criteria](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#acceptance-criteria-6)

- [ ] The detail view has a list of comments for this art piece with the headline "Comments"
- [ ] Each comment's text is displayed
- [ ] Each comment's date and time is displayed
- [ ] The detail view has an input field to write a comment
- [ ] The detail view has a submit button labeled "Send"
- [ ] After submitting the form, the comment is appended to the list of comments

### [Tasks](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#tasks-6)

- [ ] Store comments per art piece in the `artPiecesInfo` state
- [ ] Create a `CommentForm` component
- [ ] `CommentForm` props: `onSubmitComment`
- [ ] Create a `Comments` components
- [ ] `Comments` props: `comments`

---

### [User Story 8: Persist Favorites and Comments in the Browser](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#user-story-8-persist-favorites-and-comments-in-the-browser)

### [Value Proposition](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#value-proposition-7)

**As an** art enthusiast

**I want to** persist my favorites and comments

**so that** the data will not be lost when I close the app.

### [Acceptance Criteria](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#acceptance-criteria-7)

- [ ] All favorite flags and comments added to art pieces are persisted across browser reloads

### [Tasks](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#tasks-7)

- [ ] Install the package `use-local-storage-state`
- [ ] Use the `useLocalStorageState` hook to store the `artPiecesInfo` state

---

### [User Story 9: Show Color Palette](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#user-story-9-show-color-palette)

### [Value Proposition](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#value-proposition-8)

**As an** art enthusiast

**I want to** see the color palette of an art piece

**so that** I can find color inspiration.

### [Acceptance Criteria](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#acceptance-criteria-8)

- [ ] The art piece detail page shows a list of all colors used in the image
- [ ] The colors may be displayed as circles, squares, ...

### [Tasks](https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md#tasks-8)

- [ ] Pass the `colors` given by the API to the `ArtPieceDetails` component
- [ ] Use the color hex-code in a styled component to render an element with this color as background
