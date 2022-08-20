import { ReactNode } from "react";

const TabItem = ({
  activetab,
  title,
  children,
}: {
  activetab: string;
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className={`${activetab === title ? "block" : "hidden"}`}>
      {children}
    </div>
  );
};

export default TabItem;
