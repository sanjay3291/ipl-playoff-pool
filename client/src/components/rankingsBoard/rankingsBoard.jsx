import React from "react";
import axios from "axios";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { FaMedal } from "react-icons/fa";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#004ba0",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

export default function RankingsBoard(props) {
  const classes = useStyles();

  let [leaderBoardData, setResponseData] = React.useState("");

  React.useLayoutEffect(() => {
    axios
      .get("/getGroupData", {
        params: {
          groupName: props.groupName,
        },
      })
      .then((res) => {
        const leaderBoardData = res.data.leaderBoardData;
        setResponseData(leaderBoardData);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-fluid  mt-5 mb-5 p-5">
      <div>
        <h1 className="text-center" style={{ color: "#004ba0" }}>Leader Board</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell style={{ width: "10%", fontSize: 14 }}>
                    Rank
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "60%", fontSize: 14 }}>
                    Username
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "30%", fontSize: 14 }}>
                    Points
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {leaderBoardData
                  ? leaderBoardData.map((row, index) => (
                      <StyledTableRow key={row.rank}>
                        <StyledTableCell
                          style={{ width: "10%" }}
                          component="th"
                          scope="row"
                        >
                          {(() => {
                            switch (index) {
                              case 0:
                                return <FaMedal size={24} color="gold" />;
                              case 1:
                                return <FaMedal size={24} color="silver" />;
                              case 2:
                                return <FaMedal size={24} color="#A97142" />;
                              default:
                                return `${row.rank}`;
                            }
                          })()}
                        </StyledTableCell>
                        <StyledTableCell style={{ width: "60%" }}>
                          {row.username}
                        </StyledTableCell>
                        <StyledTableCell style={{ width: "30%" }}>
                          {row.points}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
