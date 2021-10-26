# Hacker News App

A simple App that fetches data from the Hacker News Top Stories API and displays a list of the individual stories.

[![Screen-Shot-2021-10-26-at-13-33-31.png](https://i.postimg.cc/x8v0YDBN/Screen-Shot-2021-10-26-at-13-33-31.png)](https://postimg.cc/LgsdB79m)
[![Screen-Shot-2021-10-26-at-13-33-24.png](https://i.postimg.cc/3Rg6xgFW/Screen-Shot-2021-10-26-at-13-33-24.png)](https://postimg.cc/Kk8Q93Vy)

# Approach

The UI is built using `React + Typescript` and styled using `Styled-Components`. `Framer-Motion` is used for UI animations. A `SkeltonLoader` component is shown while data is being fetched from the API and a `useInfiniteScroll` custom hook is used to render more data as the user reaches near the bottom of the page. When the use clicks on the title of the individual story, they are navigated to the actual page on a new tab.

# Optmizations

The `ListItems` component is wrapped in the React.memo higher order component to stop unnecessary rendering of the component unless the props have changed in value. The `serviceWorker.ts` file registers a service-worker to cache the page results to speed up subsequent loads of the page.

# Tests

`React-testing-library` is used along with `MSW` for testing and mocking the API calls. By using `MSW`, we can avoid directly mocking the Fetch API and still have confidence that Fetch function is being called correctly.
