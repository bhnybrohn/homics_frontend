import { Button, clsx } from "@mantine/core";
import React from "react";

export const SecondaryButton = ({
  title,
  type,
  w,
  bg,
  className,
  onClick, // Add onClick prop
}: {
  title?: string;
  type: "button" | "submit";
  w?: number;
  bg?: string;
  className?: string;
  onClick?: () => void; // Specify the type for onClick handler
}) => {
  return (
    <Button
      className={clsx(
        className,
        "h-fit  text-sm font-medium rounded-3xl py-[6px]"
      )}
      type={type}
      bg={bg}
      w={w}
      styles={{
        root: {
          "&:hover": {
            backgroundColor: bg,
          },
        },
      }}
      onClick={onClick} // Pass the onClick prop here
    >
      {title}
    </Button>
  );
};