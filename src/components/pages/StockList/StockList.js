import React from 'react'
import "./StockList.css";


import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#292828',
        color: theme.palette.common.white,
        textTransform: 'uppercase'
    }
}))(TableCell);

const demoData = [1, 2, 3, 4, 5];

export default function StockList() {
    return (
        <div className="header__AllPageTabPanel">
            <h2> Stock List</h2>

            <TableContainer>
                <Table className="stockPage__table" aria-label="custom pagination table" >
                    <TableHead >
                        <TableRow >
                            <StyledTableCell align="center">Stock Name </StyledTableCell>
                            <StyledTableCell align="center">Live Price </StyledTableCell>
                            <StyledTableCell align="left">Reference </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="stockPage_data">
                        {demoData.map((number) =>
                            <TableRow key={number} >
                                <TableCell className="betHistory__TableCell" align="center">SHO0001 </TableCell>
                                <TableCell className="betHistory__TableCell" align="center" >25.255</TableCell>
                                <TableCell className="betHistory__TableCell" align="left"  > https://html-color-codes.info/colors-from-image/</TableCell>
                            </TableRow>
                        )}


                    </TableBody>


                </Table>

            </TableContainer>


        </div>
    )
}

