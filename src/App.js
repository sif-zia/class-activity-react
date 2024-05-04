import { Button, Container, Stack, Typography, TextField } from "@mui/material";
import BookCardRow from "./components/BookCardRow";
import data from "./data/books";
import { useState } from "react";
import BookTable from "./components/BookTable";

function App() {
  const [isListView, setIsListView] = useState(false);
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState(data);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);

    const toSearch = e.target.value
    
    setBooks(
      data.filter(
        (book) =>
          book.author.toLowerCase().includes(toSearch.toLowerCase()) ||
          book.description.toLowerCase().includes(toSearch.toLowerCase()) ||
          book.genre.toLowerCase().includes(toSearch.toLowerCase()) ||
          book.title.toLowerCase().includes(toSearch.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <Container>
        <Stack direction="column" spacing={2}>
          <Stack
            sx={{ width: "100%" }}
            justifyContent="space-between"
            direction="row"
          >
            <Typography variant="h6">Books List:</Typography>
            <Button
              variant="contained"
              onClick={() => {
                setIsListView((prev) => !prev);
              }}
            >
              {isListView ? "List View" : "Grid View"}
            </Button>
          </Stack>
          <TextField
            fullWidth
            label="Search"
            id="search"
            value={search}
            onChange={handleSearchChange}
          />
          {isListView ? <BookTable books={books}/> : <BookCardRow books={books} />}
        </Stack>
      </Container>
    </div>
  );
}

export default App;
