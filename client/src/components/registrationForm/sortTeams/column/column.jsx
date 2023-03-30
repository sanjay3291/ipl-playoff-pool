import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import {
  Table,
  TableBody,
  TableContainer,
  Box,
  Tooltip,
} from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Team from "../team/team";


class Column extends Component {
  render() {
    return (
      <Box width="50" border={1} borderColor="grey.500" borderRadius="16">
        <TableContainer>
          <p
            style={{
              fontSize: "16pt",
              fontWeight: "bold",
              color: "#1B2133",
              textAlign: "center",
            }}
          >
            {this.props.column.title} &emsp;
            <Tooltip title= {<h4> {this.props.column.explanation}</h4>} aria-label="add" placement="right" >

            <InfoOutlinedIcon
              fontSize="inherit"
              style={{
                color: "#1B2133",
                display: "inline-block",
                textAlign: "right",
              }}
            />
            </Tooltip>
          </p>

          <Table >
            <colgroup>
              <col style={{ width: "10%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "50%" }} />
              <col style={{ width: "20%" }} />
            </colgroup>
            <Droppable droppableId={this.props.column.id}>
              {(provided, snapshot) => (
                <TableBody
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  //isDraggingOver={snapshot.isDraggingOver}
                  
                >
                  {this.props.teams.map((team, index) => (
                    <Team key={team.id} team={team} index={index} />
                  ))}
                  {provided.placeholder}
                </TableBody>
              )}
            </Droppable>
          </Table>
        </TableContainer>
      </Box>
    );
  }
}

export default Column;
