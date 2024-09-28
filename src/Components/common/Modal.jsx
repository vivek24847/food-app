import { CloseIcon } from "@chakra-ui/icons";
import { Box, Center } from "@chakra-ui/layout";
import React from "react";

export const Modal = ({ children, handleClose }) => {
  return (
    <Box
      position={"absolute"}
      left={0}
      right={0}
      top={0}
      bottom={0}
      height={"100%"}
      width={"100%"}
      bg="rgba(0, 0, 0, 0.5)"
    >
      <Box
        bg={"white"}
        p={"20px"}
        display={"flex"}
        position={"fixed"}
        borderRadius={"0.5rem"}
        top={"50%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
        minWidth={"40rem"}
        minH={"15rem"}
      >
        <Box position={"absolute"} top={"4%"} right={"4%"}>
          <CloseIcon onClick={() => handleClose(false)} cursor={"pointer"} />
        </Box>

        {children}
      </Box>
    </Box>
  );
};
