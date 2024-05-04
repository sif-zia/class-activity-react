import React from "react";
import Stack from "@mui/material/Stack";
import { Card, Paper, Typography } from "@mui/material";

function BookCardRow({ books }) {
  return (
    <Stack
      sx={{ width: "100%" }}
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
	  rowGap={2}
    >
      {books.map((book) => (
        <Paper elevation={1}>
          <Card>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
			  margin={2}
            >
              <Typography variant="h6">{book.title}</Typography>
              <Typography variant="p">{book.genre}</Typography>
            </Stack>
          </Card>
        </Paper>
      ))}
    </Stack>
  );
}

export default BookCardRow;
