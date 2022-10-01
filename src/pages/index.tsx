import React, { useState } from "react";
import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import { Swap } from "views/Main";
import { Pool } from "views/Main";
import Header from "layout/AppLayout/Header";
import ToggleItem from "layout/AppLayout/ToggleItem";

const Home: NextPage = () => {
  const [isToggleChange, setToggleChange] = useState(true);

  return (
    <>
      <SEO title="Surprise" description="DeX Platform" />
      <Header />
      <ToggleItem
        setToggleChange={setToggleChange}
        isToggleChange={isToggleChange}
      />
      {isToggleChange ? <Swap /> : <Pool />}
    </>
  );
};

export default Home;
