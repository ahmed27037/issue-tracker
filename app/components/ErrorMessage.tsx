import { Text } from "@radix-ui/themes";
import React, { PropsWithChildren } from "react";

export const ErrorMessage = ({children} : PropsWithChildren) => {
 if (!children) return null;
  return (
    <Text color="red" as="p">{children}</Text>
  )
}
