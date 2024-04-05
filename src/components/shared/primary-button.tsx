import { Button } from "@mantine/core";
import React, { ReactNode } from "react";

export const PrimarButton = ({
  title,
  type,
  children,
  w,
}: {
  title?: string;
  type: "button" | "submit";
  children?: ReactNode;
  w?: number;
}) => {
  return (
    <Button
      w={w}
      className="h-fit bg-homics-success-500 text-white text-sm font-medium rounded-lg py-[10px]"
      type={type}
      styles={{
        root: {
          "&:hover": {
            backgroundColor: "#218E11",
          },
        },
      }}
    >
      {title}
      {children}
    </Button>
  );
};
