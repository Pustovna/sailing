import qs from "qs";

const allEvents = qs.stringify(
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

const eventsQuert = qs.stringify(
  {
    filters: {
      info: {
        eventTypes: {
          name: {
            $eq: "Круизный яхтинг",
          },
        },
      },
    },
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

export const getPosts = async (filters) => {
  if (filters) {
    const { query, type, community, date } = filters;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/events?${allEvents}`
      );
      const data = await response.json();
      console.log("filters");
      return { success: data };
    } catch (error) {
      return { error: error };
    }
  } else {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/events?${allEvents}`
      );
      const data = await response.json();
      console.log("not filters");
      return { success: data };
    } catch (error) {
      return { error: error };
    }
  }
};


export const getPostsById = async (id: string) => {
  const query = qs.stringify(
    {
      filters: {
        eventUID: {
          $eq: id,
        },
      },
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

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/events?${query}`
    );
    const data = await response.json();
    console.log(data.data);
    return { success: data.data[0] };
  } catch (error) {
    return { error: error };
  }
};
