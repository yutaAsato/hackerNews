import { StoriesArray } from "../components/types";

const topStoriesUrl =
  "https://hacker-news.firebaseio.com/v0/topstories.json";
const baseStoryUrl =
  "https://hacker-news.firebaseio.com/v0/item/";

export async function fetchStories(
  count: number,
  setStories: React.Dispatch<
    React.SetStateAction<StoriesArray>
  >,
  setIsFetching: React.Dispatch<
    React.SetStateAction<boolean>
  >
) {
  try {
    setIsFetching(true);
    const response = await fetch(topStoriesUrl);
    if (!response.ok) {
      throw new Error("Error:" + response.text);
    }
    const res = await response.json();
    const promises = res
      .slice(0, count)
      .map((id: number) =>
        fetch(`${baseStoryUrl}${id}.json`).then(
          (data) => data.json()
        )
      );
    const result: StoriesArray =
      await Promise.all(promises);
    setStories(result);
    setIsFetching(false);
  } catch (err) {
    throw new Error();
  }
}
