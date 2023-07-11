import React from "react";
import { HeroSection } from "../../shared/heroContainer/HeroSection";
import { InfoBlock } from "../../shared/infoBlock/InfoBlock";
import { infoBlock } from "../../../data/infoBlock";
import { Header } from "../../layout/header/Header";

export const MainCafe = () => {
  const homeInfo = infoBlock.map((item) => {
    return (
      <InfoBlock
        key={item.id}
        title={item.title}
        heading={item.heading}
        desc={item.desc}
      />
    );
  });
  return (
    <>
    <Header/>
    <div>
      <HeroSection />
      <div>
        {homeInfo}
      </div>
    </div>
    </>
  );
};
