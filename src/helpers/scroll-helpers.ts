import React, { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, ReactNode } from "react";

export const getValidChildren = (children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | ReactNode[] | null | undefined) => {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  );
};
