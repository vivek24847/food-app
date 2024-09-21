import { Box, Center } from "@chakra-ui/layout";
import React from "react";

export const Modal = ({ children }) => {
  return (
    <Box>
      <Center bg={"white"} p={"20px"} minHeight={"30%"} minWidth={"50%"}>
        {children}
      </Center>
    </Box>
  );
};
