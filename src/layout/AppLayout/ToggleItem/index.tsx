import React from "react";

import {
  ToggleContainer,
  ToggleButtons,
  SelectedState,
  UnSelectedState,
} from "./ToggleItem.style";

const ToggleItem = (props) => {
  return (
    <ToggleContainer>
      {props.isToggleChange ? (
        <ToggleButtons>
          <SelectedState onClick={() => props.setToggleChange(true)}>
            Swap
          </SelectedState>
          <UnSelectedState onClick={() => props.setToggleChange(false)}>
            Pool
          </UnSelectedState>
        </ToggleButtons>
      ) : (
        <ToggleButtons>
          <UnSelectedState onClick={() => props.setToggleChange(true)}>
            Swap
          </UnSelectedState>
          <SelectedState onClick={() => props.setToggleChange(false)}>
            Pool
          </SelectedState>
        </ToggleButtons>
      )}
    </ToggleContainer>
  );
};
export default ToggleItem;
