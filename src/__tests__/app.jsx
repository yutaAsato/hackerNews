import * as React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom";
import {
  render,
  screen,
  within,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "../App";
import {
  mockStoriesId,
  mockStoriesList,
} from "../mockData/mockData";

const server = setupServer();

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => {
  server.resetHandlers();
});

describe("render the application", () => {
  beforeEach(() => {
    server.use(
      rest.get(
        "https://hacker-news.firebaseio.com/v0/item/:id.json",
        (_res, res, ctx) => {
          return res(ctx.json(mockStoriesList));
        }
      )
    );
    server.use(
      rest.get(
        "https://hacker-news.firebaseio.com/v0/topstories.json",
        (_res, res, ctx) => {
          return res(ctx.json(mockStoriesId));
        }
      )
    );
    render(<App />);
  });

  test("renders story data correctly", async () => {
    //check list header is there
    expect(
      screen.getByTestId("list-header-wrapper")
    ).toBeInTheDocument();

    // check skelton loader is there
    expect(
      screen.getByTestId(
        `skeleton-loader-wrapper`
      )
    ).toBeInTheDocument();

    // wait for skeleton loader to be removed
    await waitForElementToBeRemoved(() =>
      screen.getByTestId(
        `skeleton-loader-wrapper`
      )
    );

    // check data renders correctly
    const storyWrapper = screen.getByTestId(
      `story-wrapper`
    );
    expect(storyWrapper).toBeInTheDocument();

    expect(
      within(storyWrapper).getByText(
        mockStoriesList.by
      )
    ).toBeInTheDocument();
    expect(
      within(storyWrapper).getByText(`By:`)
    ).toBeInTheDocument();
    expect(
      within(storyWrapper).getByText(
        mockStoriesList.title
      )
    ).toBeInTheDocument();
    expect(
      document
        .querySelector("a")
        .getAttribute("href")
    ).toBe(mockStoriesList.url);
  });
});
