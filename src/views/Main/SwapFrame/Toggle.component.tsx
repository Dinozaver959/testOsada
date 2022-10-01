import React from "react";
import { Toggle } from "react-toggle-component";
import styled from "styled-components";

const Sample = styled.div`
  padding: 16px;
`;

function ToggleComponent() {
  return (
    <>
      <Sample>
        <Toggle
          name="toggle-1"
          onToggle={(e) => console.log("onToggle", e.target)}
        />
      </Sample>
    </>
  );
}

export default ToggleComponent;
