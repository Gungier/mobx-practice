import { action, computed, observable, toJS } from "mobx";
import { observer } from "mobx-react";
import React from "react";

type FormState = {
  //   total: number;
  years: number;
  salary: number;
};

//bring in observable to watch for computed derivations
const formState: FormState = observable({
  //   total: 0,
  years: 0,
  salary: 0,
});

/**
 * able to remove below code for single line 26 also able to remove button for calc on the fly
 */
// const calculateTotal = action((formState: FormState) => {
//   formState.total = formState.years * formState.salary;
// });

function MoneyForm() {
  const totalValue = computed(() => formState.salary * formState.years);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ marginBottom: 0 }}>Money Talks</h1>
      <>Total: {toJS(totalValue)}</>
      <input
        type="number"
        placeholder="Years..."
        style={{ height: "40px" }}
        onChange={action((e) => {
          formState.years = Number(e.target.value);
        })}
      />
      <input
        type="number"
        placeholder="Yearly salary..."
        style={{ height: "40px" }}
        onChange={action((e) => {
          formState.salary = Number(e.target.value);
        })}
      />
      {/* <button type="button" onClick={() => calculateTotal(initialState)}>
        Calculate total
      </button> */}
    </div>
  );
}

export default observer(MoneyForm);
