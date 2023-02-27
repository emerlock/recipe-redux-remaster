import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicIngredients({ ingredients }) {
    return (
        ingredients && (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Ingredients</TableCell>
                            <TableCell align="right">Measurement</TableCell>
                            <TableCell>Measurement Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ingredients.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0
                                    }
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.ingredient}
                                </TableCell>
                                <TableCell align="right">
                                    {row.measurement}
                                </TableCell>
                                <TableCell>{row.measurementType}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    );
}
