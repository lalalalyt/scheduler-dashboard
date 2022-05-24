import React, { Component } from "react";
import classnames from "classnames";
import Loading from "./Loading";
import Panel from "./Panel";

const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6,
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm",
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday",
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3",
  },
];

class Dashboard extends Component {
  state = { loading: false, focused: null };

  selectPanel(id) {
    if (this.state.focused === id) {
      this.setState({ focused: null });
    } else {
      this.setState({ focused: id });
    }
  }

  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused,
    });
    if (this.state.loading) {
      return <Loading />;
    }
    const panels = (
      this.state.focused
        ? data.filter((each) => this.state.focused === each.id)
        : data
    ).map((each) => (
      <Panel
        key={each.id}
        id={each.id}
        label={each.label}
        value={each.value}
        onSelect={() => this.selectPanel(each.id)}
      />
    ));

    return <main className={dashboardClasses}>{panels}</main>;
  }
}

export default Dashboard;
