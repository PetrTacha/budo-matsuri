import React from "react";
import { WebHeader } from "../Header/WebHeader";

export const Layout = ({children}) => {
    return (
        <div>
          <WebHeader />
          {children}
        </div>
      );
}