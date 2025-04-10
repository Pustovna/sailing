import React, { Suspense } from "react";
import { Container } from "@mui/material";
import "./calendar.scss";
import Calendar from "./Calendar";
import { getPosts } from "../actions/events";

const newDate = new Date();
const currentDate = newDate.toISOString().split("T")[0];

export default async function Page() {
  const { error, success } = await getPosts();

  return (
    <Container
      className="calendarPage_container"
      component={"main"}
      maxWidth="lg"
    >
      <Suspense fallback={<div>Loading...</div>}>
        {success && <Calendar posts={success.data} newDate={newDate} />}
        {error && <div>Какая-то ошибка</div>}
      </Suspense>
    </Container>
  );
}
