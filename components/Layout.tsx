import React from "react";

export const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <header></header>
      {children}
      <footer></footer>
    </>
  );
};
