import { Box, Container, Typography } from "@mui/material";
import * as React from "react";

export default function Header() {
  return (
    <Box
      sx={{
       
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
        }}
        maxWidth="lg"
      >
        <Typography padding={'10px 0'}  >
          Питерский яхтинг - бессмысленный и беспощадный
        </Typography>
      </Container>
    </Box>
  );
}
