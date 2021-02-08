import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TableCell, TableRow, Avatar } from "@material-ui/core";
import ReorderIcon from "@material-ui/icons/Reorder";

class Team extends Component {
  state = {};

  render() {
    return (
      <Draggable draggableId={this.props.team.id} index={this.props.index}>
        {(provided, snapshot) => (
          <TableRow
            {...provided.draggableProps}
            ref={provided.innerRef}
            //isDragging={snapshot.isDragging}
          >
            <TableCell {...provided.dragHandleProps}>
              <ReorderIcon />
            </TableCell>

            <TableCell>
              <Avatar
                variant="square"
                src={this.props.team.image}
                alt="team_logo"
              />
            </TableCell>

            <TableCell
              style={{ fontSize: "10pt", fontWeight: "bold", color: "#004BA0" }}
            >
              {this.props.team.content}
            </TableCell>
            <TableCell
              style={{ fontSize: "8pt", fontWeight: "bold", color: "#004BA0" }}
            >
              {8 - this.props.index} Points
            </TableCell>
          </TableRow>
        )}
      </Draggable>
    );
  }
}

export default Team;
