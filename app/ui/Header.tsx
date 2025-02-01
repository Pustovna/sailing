import { Box, Container, Typography } from "@mui/material";
import * as React from "react";

export default function Header() {
  return (
    <Box
      sx={{
        position: "fixed",
        backgroundColor: "#6d6d6db3",
        width: "100%",
        zIndex: 10,
        backdropFilter: "blur(5px)",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
        }}
        maxWidth="lg"
      >
        <Typography padding={'10px 0'}  sx={{ typography: { sm: "h5", xs: "body1" } }}>
          Питерский яхтинг - бессмысленный и беспощадный
        </Typography>
      </Container>
    </Box>
  );
}
