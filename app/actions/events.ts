import qs from "qs";

const eventsQuert = qs.stringify(
  {
    populate: {
      info: {
        populate: [
          "contact",
          "eventTypes",
          "metadata",
          "community",
          "place",
          "images",
        ],
      },
    },
  },
  {
    encodeValuesOnly: true, // prettify URL
  }
);

export const getPosts = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_DOMAIM}/events?${eventsQuert}`
    );
    const data = await response.json();

    return { success: data };
  } catch (error) {
    return { error: error };
  }
};
