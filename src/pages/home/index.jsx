import React, { Fragment } from "react";
import { HeaderCmpt } from "../../components/header";
import { MainSection } from "../../components/main";
import { MenuSection } from "../../components/menu";
import { BannerCmpt } from "../../components/banner";
import { WhoIsWho } from "../../components/whoIsWho";

export const HomePage = () => {
  return (
    <Fragment>
      <HeaderCmpt />
      <MainSection />
      <MenuSection />
      <BannerCmpt />
      <WhoIsWho />
    </Fragment>
  );
};
