import { Box, Container, Typography } from "@mui/material";
import * as React from "react";

export default function Header() {
  return (
    <Box
      sx={{ position: "fixed", backgroundColor: "#6d6d6db3", width: "100%", zIndex: 10, backdropFilter: "blur(5px)" }}
    >
      <Container
        sx={{
          padding: "20px 0",
          display: "flex",
          alignItems: "center",
        }}
        maxWidth="lg"
      >
        <Typography variant='h5'>
          Питерский яхтинг - бессмысленный и беспощадный
        </Typography>
     
      </Container>
    </Box>
  );
}
