import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

// import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";

// Custom styled table cell for header and body
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

// Custom styled table row
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ToDoTable = ({ toDos, isDeleted, setIsDeleted }) => {
  const handleDelete = (id) => {
    // Filter out the item with the specified id
    const filteredItems = toDos.filter((item) => item.id !== id);

    // Save the filtered array of items back to local storage
    localStorage.setItem("toDos", JSON.stringify(filteredItems));
    setIsDeleted(!isDeleted);
  };
  return (
    <TableContainer sx={{ maxHeight: 1600 }} component={Paper}>
      {toDos.length ? (
        <Table
          stickyHeader
          sx={{ minWidth: 700 }}
          aria-label="customized table"
        >
          {/* Table header */}
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell>Checked</StyledTableCell>
              <StyledTableCell>created At</StyledTableCell>
              <StyledTableCell> Finished At</StyledTableCell>
              <StyledTableCell> Archive At</StyledTableCell>
              <StyledTableCell align="center"> Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          {/* Table body */}
          <TableBody>
            {toDos?.map((item) => (
              <StyledTableRow key={item?.id}>
                <StyledTableCell component="th" scope="row">
                  {item?.title}
                </StyledTableCell>
                <StyledTableCell>{item?.description || "---"}</StyledTableCell>
                <StyledTableCell>{item?.checked || "---"}</StyledTableCell>
                <StyledTableCell>{item?.createdAt || "---"}</StyledTableCell>
                <StyledTableCell>{item?.finishedAt || "---"}</StyledTableCell>
                <StyledTableCell>{item?.archiveAt || "---"}</StyledTableCell>
                <StyledTableCell sx={{ width: "100px" }}>
                  {/* Buttons */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: "12px",
                    }}
                  >
                    <Button component={RouterLink} to={`/edit/${item.id}`}>
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Typography sx={{ textAlign: "center", p: 12, fontSize: 32 }}>
          Add To Do Tasks
        </Typography>
      )}
    </TableContainer>
  );
};

export default ToDoTable;
