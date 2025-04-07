import qs from "qs";
import { Filters, FilterAPI } from "../types/EventFilter";

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

export const getPosts = async (filters?:  Filters) => {
  if (filters) {
    const { query, type, community, date } = filters;

    const filtersObject: FilterAPI = {
      title: {
      },
      info: {
        date: { 
          
        },
        eventTypes:  {
          name: {}
        }, 
        community: {
          name: {
          }
        }
      }
    };

    console.log(query, type, community, date);
    if (query) {
      filtersObject.title.$containsi = query;
    }
    if (type) { 
      filtersObject.info.eventTypes.name.$in = type;
    }
    if (community) {
      filtersObject.info.community.name.$in = community;
    }
    if (date && date.startDate && date.endDate) { 
      filtersObject.info.date.$between = [date.startDate, date.endDate];
    }
    const eventsQuert = qs.stringify(
      {
        filters: filtersObject,
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
        `${process.env.NEXT_PUBLIC_DOMAIN}/events?${eventsQuert}`
      );
      const data = await response.json();
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
