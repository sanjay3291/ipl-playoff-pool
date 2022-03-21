import React from "react";
import axios from "axios";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    //width: "100%",
    overflowX: "hide",
  },
  heading: {
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightBold,
    color: "#004ba0",
  },
  details: {
    alignItems: "center",
    justifyContent: "center",
  },
  table: {
    //minWidth: 50,
    tableLayout: "fixed",
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#004ba0",
    color: theme.palette.common.white,
    fontSize: "0.9rem",
    paddingRight: 3,
    paddingLeft: 3,
  },
  body: {
    fontSize: "0.9rem",
    paddingRight: 3,
    paddingLeft: 3,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function PicksTable(props) {
  const classes = useStyles();

  let [picksTableData, setResponseData] = React.useState("");

  React.useLayoutEffect(() => {
    axios
      .get("/getGroupData", {
        params: {
          groupName: props.groupName,
        },
      })
      .then((res) => {
        const picksTableData = res.data.picksTableData;
        setResponseData(picksTableData);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-fluid mt-5 mb-5 p-5">
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Click here to see the picks of other participants.
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <Typography component={"span"} variant={"body2"}>
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <TableContainer component={Paper}>
                    <Table
                      className={classes.table}
                      aria-label="customized table"
                    >
                      <TableHead>
                        <TableRow>
                          <StyledTableCell style={{ width: "20%" }}>
                            Username
                          </StyledTableCell>
                          <StyledTableCell>CSK</StyledTableCell>
                          <StyledTableCell>DC</StyledTableCell>
                          <StyledTableCell>GT</StyledTableCell>
                          <StyledTableCell>KKR</StyledTableCell>
                          <StyledTableCell>LSG</StyledTableCell>
                          <StyledTableCell>MI</StyledTableCell>
                          <StyledTableCell>PBKS</StyledTableCell>
                          <StyledTableCell>RCB</StyledTableCell>
                          <StyledTableCell>RR</StyledTableCell>
                          <StyledTableCell>SRH</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {picksTableData
                          ? picksTableData.map((row) => (
                              <StyledTableRow key={row.username}>
                                <StyledTableCell
                                  component="th"
                                  scope="row"
                                  style={{ width: "20%" }}
                                >
                                  {row.username}
                                </StyledTableCell>
                                <StyledTableCell>
                                  {row.pointsArray[0]}
                                </StyledTableCell>
                                <StyledTableCell>
                                  {row.pointsArray[1]}
                                </StyledTableCell>
                                <StyledTableCell>
                                  {row.pointsArray[2]}
                                </StyledTableCell>
                                <StyledTableCell>
                                  {row.pointsArray[3]}
                                </StyledTableCell>
                                <StyledTableCell>
                                  {row.pointsArray[4]}
                                </StyledTableCell>
                                <StyledTableCell>
                                  {row.pointsArray[5]}
                                </StyledTableCell>
                                <StyledTableCell>
                                  {row.pointsArray[6]}
                                </StyledTableCell>
                                <StyledTableCell>
                                  {row.pointsArray[7]}
                                </StyledTableCell>
                                <StyledTableCell>
                                  {row.pointsArray[8]}
                                </StyledTableCell>
                                <StyledTableCell>
                                  {row.pointsArray[9]}
                                </StyledTableCell>
                              </StyledTableRow>
                            ))
                          : null}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
