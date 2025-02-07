import React, { Suspense } from "react";
import { Container } from "@mui/material";

import "./calendar.scss";
import Calendar from "./Calendar";

export default async function Page() {
  const data = await fetch(`${process.env.REACT_DOMAIM}/events`);
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
