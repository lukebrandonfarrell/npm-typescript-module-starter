/**
 * @author Luke Brandon Farrell
 * @description Text component.
 */

/* NPM - Node Package Manage */
import React from "react";

interface IProps {
  children: any;
}

const MyAwesomeComponent = ({
  children: items,
  ...props
}: IProps): any => {
  return <></>;
};

export { MyAwesomeComponent };
