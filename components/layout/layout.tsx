import React from "react";
import MainNavigation from "./main-navigation";

function Layout(props): React.JSX.Element {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
