# Note Taking

App for taking notes, heavily influenced by [Bear](https://bear.app/).

## Demo

- [Screenshots](./screen-shots/README.md)
- [Live Demo](https://d3jesfpl6tiycw.cloudfront.net/)

## Getting Started

- Clone the repo
- Install dependencies using `yarn`
- Start the server with `yarn dev`

### All together

```shell
git clone https://github.com/christopher-caldwell/note-taking.git && \
yarn && \
yarn dev
```

## Checklist

- [x] User can create a note
- [x] User can edit a note
- [x] User can delete a note
- [x] When closing the browser window the notes will be stored and when the User returns, the data will be retrieved

### Bonus

- [x] User can create and edit a note in Markdown format. On save it will convert Markdown to HTML
- [x] User can see the date when they created the note
- [ ] User can drag and drop the notes to change the order of them ( They are sorted by last updated, dragging and dropping didn't fit here )

## Overview

- Notes are stored in Local Storage
- Notes are sorted by last updated at
- Recoil wraps LS to give reactivity
- Create a new note with the button to the right of the search
- Use of a tagging system similar to [Bear's](https://blog.bear.app/2017/08/bear-tips-organize-notes-with-tags-and-infinite-nested-tags/). This is the `#` in blue below the title.

## Developing

This project is powered by [Vite](https://vitejs.dev/), an incredible tool for bundling front end code. Checkout their docs to learn more, but the general synopsis is; it's really, really fast.

When the dev server is running, it will constantly be running ESLint and the TypeScript compiler on every save. If there is an issue, you will see the issue in the terminal and in the browser. Just like create-react-app.

These errors **cannot be dismissed**, as they are integral to the integrity of the app.

## Testing

I have not done any tests :slightly_frowning_face:

They take a considerable amount of time to do correctly, and it wasn't worth it for this.

## Runtime Libraries Used

- [@mui/material](https://mui.com/getting-started/usage/) ( Material UI )
- [date-fns](https://date-fns.org/docs/Getting-Started)
- [CKEditor](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html)
- [@caldwell619/ms](https://www.npmjs.com/package/@caldwell619/ms)
- [fuse.js](https://www.npmjs.com/package/fuse.js)
- [lodash.debounce](https://lodash.com/docs/4.17.15#debounce)
- [recoil](https://recoiljs.org/)
- [uuid](https://www.npmjs.com/package/uuid)

## Tooling Used

- [Vite](https://vitejs.dev/)
- [prettier](https://prettier.io/docs/en/)
- [eslint](https://eslint.org/)
- [typescript](https://www.typescriptlang.org/)

## Styling

Styling was done with [MUI v5](https://mui.com/getting-started/usage/). There have been significant changes to this library, and overriding base styles has never been easier.

Some benefits of using v5 have been documented on [their blog](https://mui.com/blog/mui-core-v5/).
