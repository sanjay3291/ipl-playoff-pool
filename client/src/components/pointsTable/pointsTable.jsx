import React, { Component } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import "./pointsTable.scss";

class PointsTable extends Component {
  state = {
    pointsTableData: [],
    data: [],
    columns: [
      {
        title: "Team Name",
        field: "name",
      },
      {
        title: "Played",
        field: "played",
      },
      {
        title: "Won",
        field: "won",
      },
      {
        title: "Lost",
        field: "lost",
      },
      {
        title: "No Result",
        field: "nr",
      },
      {
        title: "Points",
        field: "points",
      },
      {
        title: "NRR",
        field: "nrr",
      },
    ],
  };

  componentDidMount() {
    axios.get("/getGroupData").then((res) => {
      const pointsTableData = res.data.pointsTableData;
      this.setState({ pointsTableData });
      let data = [];

      for (let i = 0; i < this.state.pointsTableData.length; i++) {
        let obj = {};
        obj.name = this.state.pointsTableData[i].teamName;
        obj.played = this.state.pointsTableData[i].M;
        obj.won = this.state.pointsTableData[i].W;
        obj.lost = this.state.pointsTableData[i].L;
        obj.nr = this.state.pointsTableData[i].NR;
        obj.points = this.state.pointsTableData[i].PT;
        obj.nrr = this.state.pointsTableData[i].NRR;
        data.push(obj);
      }

      this.setState({ data });
    });
  }

  render() {
    //console.log(this.state.data);
    return (
      <div className="container mt-5 containers " style={{
        backgroundColor: "#add8e6",
      }}>
        <div>
        <h1 style={{ color: "#004ba0" }}>Points Table</h1>
      </div>
        <MaterialTable
          title="Points Table"
          data={this.state.data}
          columns={this.state.columns}
          options={{
            search: false,
            paging: false,
            filtering: false,
            showTitle: false,
            toolbar: false,
            exportButton: false,
            headerStyle: {
                fontSize: 14,
                fontWeight: "bold",
                color: "white",
                backgroundColor: "#004ba0"
              }
          }}
          style={{ fontSize: "16px" }}
        />
      </div>
    );
  }
}

export default PointsTable;
