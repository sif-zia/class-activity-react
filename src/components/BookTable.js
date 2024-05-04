import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import React from 'react'

function BookTable({books}) {
  return (
	<TableContainer component={Paper}>
		<Table>
			<TableHead bgColor="sky-blue">
				<TableRow>
					<TableCell sx={{fontWeight: "bold"}}>Title</TableCell>
					<TableCell sx={{fontWeight: "bold"}}>Author</TableCell>
					<TableCell sx={{fontWeight: "bold"}}>Genre</TableCell>
					<TableCell sx={{fontWeight: "bold"}}>Description</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{books.map((book) => (
					<TableRow key={book.title}>
						<TableCell>{book.title}</TableCell>
						<TableCell>{book.author}</TableCell>
						<TableCell>{book.genre}</TableCell>
						<TableCell>{book.description}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	</TableContainer>
  )
}

export default BookTable