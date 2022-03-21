import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./initialData";
import Column from "./column/column";

class SortTeams extends Component {
  state = initialData;

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const column = this.state.columns[source.droppableId];
    const newTeamIds = Array.from(column.teamIds);
    newTeamIds.splice(source.index, 1);
    newTeamIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      teamIds: newTeamIds,
    };
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };
    this.setState(newState);

    var teamsObject = [];

    for (var i = 0; i < newColumn.teamIds.length; i++) {
      teamsObject.push({
        id: 10 - i,
        team: this.state.teams[newColumn.teamIds[i]].key,
      });
    }

    this.props.sendTeamsObject(teamsObject);
  };

  render() {
    return (
      <div style={{
        backgroundColor: "white"}}>
      <DragDropContext onDragEnd={this.onDragEnd} >
        {this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];
          const teams = column.teamIds.map(
            (teamId) => this.state.teams[teamId]
          );

          return <Column key={column.id} column={column} teams={teams} />;
        })}
      </DragDropContext>
      </div>
    );
  }
}
export default SortTeams;
