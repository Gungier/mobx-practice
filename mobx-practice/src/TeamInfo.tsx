import { observer } from "mobx-react";
import React from "react";
import { useTeamStore } from "./TeamStore";

function TeamNameInfo() {
  const { teamName, setState, setMascot } = useTeamStore();
  return (
    <>
      <h1 style={{ marginBottom: 1 }}>Team:{teamName}</h1>
      <input
        type="text"
        placeholder="Choose team"
        onChange={(e) => setState(e.target.value)}
        style={{ marginBottom: 8 }}
      />

      <input
        type="text"
        placeholder="Change mascot"
        onChange={(e) => setMascot(e.target.value)}
        style={{ marginBottom: 8 }}
      />
      {""}
    </>
  );
}

export default observer(TeamNameInfo);
