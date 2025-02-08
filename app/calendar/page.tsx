import React, { Suspense } from "react";
import { Container } from "@mui/material";
import qs from "qs";
import "./calendar.scss";
import Calendar from "./Calendar";

export default async function Page() {
  const query = qs.stringify(
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
  const data = await fetch(`${process.env.REACT_DOMAIM}/events?${query}`);
  const posts = await data.json();

  return (
    <Container
      className="calendarPage_container"
      component={"main"}
      maxWidth="lg"
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Calendar posts={posts.data} />
      </Suspense>
    </Container>
  );
}
