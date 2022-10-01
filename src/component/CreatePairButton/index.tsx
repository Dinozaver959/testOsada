import React from "react";
import { useRouter } from "next/router";
import {
  CreatePairButtonFrame,
  CreatePairButtonFrameBorder,
} from "./CreatePairButton.style";

const CreatePairButton = (props) => {
  const router = useRouter();
  return (
    <CreatePairButtonFrame onClick={() => props.setShowWait(true)}>
      <CreatePairButtonFrameBorder>
        {props.buttonName}
      </CreatePairButtonFrameBorder>
    </CreatePairButtonFrame>
  );
};
export default CreatePairButton;
