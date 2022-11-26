import { observer } from "mobx-react";
import React from "react";
import Athlete from "./Athlete";
import { useTeamStore } from "./TeamStore";
import TradeForm from "./TradeForm";

function Roster() {
  const { players } = useTeamStore();
  return (
    <table>
      <tr>
        {/* headers are the name and the age */}
        <th>Name</th>
        <th>Age</th>
        <th>Teams</th>
        <th>Trade Form</th>
        <th>Is it their birthday?</th>
        <th>Salary</th>
      </tr>
      {players.map((athlete) => {
        //loop over the the athletes and display their stats in table data
        return (
          <tr key={athlete.name}>
            <td>{athlete.name}</td>
            <td>{athlete.age}</td>
            <td>{athlete.teamHistory}</td>
            <td>
              <TradeForm athlete={athlete} />
            </td>
            <td>
              <button
                type="button"
                style={{ width: "100%" }}
                onClick={() => athlete.wishHappyBirthday()} //onClick make the call for that specific athlete and call wishHappyBirthday function and increment their age by +1
              >
                Wish happy birthday
              </button>
            </td>
            <td>{athlete.salary}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default observer(Roster); //wrapping component in observer, works like this from eslint rules created
