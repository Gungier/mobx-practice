import { action, computed, observable, toJS } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import Athlete from "./Athlete";
import { useTeamStore } from "./TeamStore";

type FormState = {
  //   total: number;
  name: string;
  age: number;
  salary: number;
};

const initialState: FormState = {
  name: "",
  age: 0,
  salary: 0,
};

//bring in observable to watch for computed derivations
let formState: FormState = observable({
  //   total: 0,
  name: "",
  age: 0,
  salary: 0,
});

/**
 * able to remove below code for single line 26 also able to remove button for calc on the fly
 */
// const calculateTotal = action((formState: FormState) => {
//   formState.total = formState.years * formState.salary;
// });

function MoneyForm() {
  const { totalYearlyCost, addPlayer } = useTeamStore();
  //   const totalValue = computed(() => formState.salary * formState.years);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ marginBottom: 0 }}>Money Talks</h1>
      <>Total: {totalYearlyCost} Million</>
      <input
        type="text"
        placeholder="Player name..."
        style={{ height: "40px" }}
        onChange={action((e) => {
          formState.name = e.target.value;
        })}
      />
      <input
        type="number"
        placeholder="Player age..."
        style={{ height: "40px" }}
        onChange={action((e) => {
          formState.age = Number(e.target.value);
        })}
      />
      <input
        type="number"
        placeholder="Player salary..."
        style={{ height: "40px" }}
        onChange={action((e) => {
          formState.salary = Number(e.target.value);
        })}
      />
      <button
        type="button"
        onClick={action((e) => {
          addPlayer(
            new Athlete(formState.name, formState.age, formState.salary)
          );
          formState = initialState;
        })}>
        Add Player
      </button>
      {/* <button type="button" onClick={() => calculateTotal(initialState)}>
        Calculate total
      </button> */}
    </div>
  );
}

export default observer(MoneyForm);
