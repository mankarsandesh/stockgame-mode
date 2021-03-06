import React from "react";
import "./CurrentBet.css";

import PropTypes from "prop-types";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
// import TablePagination from '@material-ui/core/TablePagination';
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import TableHead from "@material-ui/core/TableHead";
import { Button } from "@material-ui/core";

import Pagination from "@material-ui/lab/Pagination";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#292828",
    color: theme.palette.common.white,
    textTransform: "uppercase",
  },
}))(TableCell);

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(betID, gameId, betDetails, time, amount, payout, status) {
  return { betID, gameId, betDetails, time, amount, payout, status };
}

const rows = [
  createData(
    "JBDJSBHJD1",
    "242454545454",
    "Both Digit - Odd (1.94) BTC",
    "8:50 PM",
    "$200",
    "2.9",
    "Pending"
  ),
  createData(
    "JBDJSBHJD2",
    "242454545454",
    "Both Digit - Odd (1.94) BTC",
    "8:50 PM",
    "$200",
    "2.9",
    "Pending"
  ),
  createData(
    "JBDJSBHJD3",
    "242454545454",
    "Both Digit - Odd (1.94) BTC",
    "8:50 PM",
    "$200",
    "2.9",
    "Pending"
  ),
  createData(
    "JBDJSBHJD5",
    "242454545454",
    "Both Digit - Odd (1.94) BTC",
    "8:50 PM",
    "$200",
    "2.9",
    "Pending"
  ),
  createData(
    "JBDJSBHJ4D",
    "242454545454",
    "Both Digit - Odd (1.94) BTC",
    "8:50 PM",
    "$200",
    "2.9",
    "Pending"
  ),
  createData(
    "JBDJSBHJD5",
    "242454545454",
    "Both Digit - Odd (1.94) BTC",
    "8:50 PM",
    "$200",
    "2.9",
    "Pending"
  ),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function CurrentBet() {
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className="header__AllPageTabPanel">
      <h2> Current Bet</h2>
      <TableContainer component={Paper}>
        <Table
          className="betHistory__table"
          aria-label="custom pagination table"
          rounded="true"
        >
          <TableHead className="betHistory_dataHeader">
            <TableRow className="TableRow">
              <StyledTableCell>BET ID </StyledTableCell>
              <StyledTableCell align="center">GAME ID</StyledTableCell>
              <StyledTableCell align="center">Bet Details</StyledTableCell>
              <StyledTableCell align="center">Time</StyledTableCell>
              <StyledTableCell align="center">Amount</StyledTableCell>
              <StyledTableCell align="center">Payout</StyledTableCell>
              <StyledTableCell align="center">Bet Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody className="betHistory_data">
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.betID}>
                <TableCell className="betHistory__TableCell">
                  {row.betID}
                </TableCell>
                <TableCell className="betHistory__TableCell">
                  {row.gameId}
                </TableCell>
                <TableCell className="betHistory__TableCell">
                  {row.betDetails}
                </TableCell>
                <TableCell className="betHistory__TableCell">
                  {row.time}
                </TableCell>
                <TableCell className="betHistory__TableCell">
                  {row.amount}
                </TableCell>
                <TableCell className="betHistory__TableCell">
                  {row.payout}
                </TableCell>
                <TableCell className="betHistory__TableCell">
                  <Button className="betHistory_pending"> {row.status}</Button>
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow className="betHistory__bottomTableRow">
              <TableCell colSpan={1} className="betHistory__TableCell">
                {" "}
                Total
              </TableCell>
              <TableCell colSpan={3} className="betHistory__TableCell">
                {" "}
                5 Bets{" "}
              </TableCell>
              <TableCell colSpan={1} className="betHistory__TableCell">
                {" "}
                $1500
              </TableCell>
              <TableCell colSpan={1} className="betHistory__TableCell">
                {" "}
                $1500
              </TableCell>
              <TableCell
                colSpan={1}
                className="betHistory__TableCell"
              ></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          color="secondary"
          className="betHistory__pagination"
        />
      </TableContainer>
    </div>
  );
}
