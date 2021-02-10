import React, { Component } from "react";
import RankingsBoard from "./../components/rankingsBoard/rankingsBoard";
import PicksTable from "./../components/picksTable/picksTable";

class GroupName extends Component {
  state = {};

  render() {
    return (
      <div>
        <div>
          <RankingsBoard groupName={this.props.match.params.groupName} />
          <PicksTable groupName={this.props.match.params.groupName} />
        </div>
      </div>
    );
  }
}

export default GroupName;
