import { Box, Container, Typography } from "@mui/material";
import * as React from "react";

export default function Header() {
  return (

    <Container maxWidth="lg">
      <Box display={"flex"} justifyContent={"center"}>
        <Typography component={"span"} padding={"10px 0"} color={"white"}>
    
        Питерский яхтинг - бессмысленный и беспощадный
  
        </Typography>
      </Box>
    </Container>
  );
}
