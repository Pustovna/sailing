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
  console.log(process.env.NEXT_PUBLIC_DOMAIN)
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/events?${eventsQuert}`
    );
    const data = await response.json();

    return { success: data };
  } catch (error) {
    return { error: error };
  }
};
