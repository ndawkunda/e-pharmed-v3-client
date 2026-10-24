# e-Pharmed Client (v3)

Front end for **e-Pharmed**, a French-language drug reference app. It lets users browse drug brands, generic names (DCI, *dénomination commune internationale*), medical terms and pharmacies (*officines*), with data served by the [e-Pharmed API](https://github.com/ndawkunda/e-pharmed-v3-server).

## Tech stack

- React 18 (Create React App)
- Redux Toolkit and React Redux for state
- Material UI for layout and theming
- React Router
- Axios for API calls

## Project structure

```
src/
  app/          Redux store setup
  components/   Layout: Topbar, Sidebar, Content
  feature/      Redux slices for each resource
    brands/
    dcis/
    medicalTerms/
    officines/
    globalSlice.js
  App.jsx       App shell and MUI theme
```

## Running locally

1. Start the [e-Pharmed API](https://github.com/ndawkunda/e-pharmed-v3-server) first.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Point the client at the API by setting `REACT_APP_BASE_URL` in `.env`, for example:
   ```
   REACT_APP_BASE_URL=http://localhost:5000/api/v1
   ```
4. Start the dev server:
   ```bash
   npm start
   ```

The app runs at `http://localhost:3000`.
