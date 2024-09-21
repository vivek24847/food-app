import { Circle, Flex, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import React from "react";
import TestComponent from "./TestComponent";
import TestComponent2 from "./TestComponent2";

const Footer = () => {
  const MotionFlex = motion(Flex);
  const MotionText = motion(Text);
  const textAnimation = {
    initial: { x: 0 },
    hover: {
      x: [-80, 0, -80],
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const data = [1, 2, 3, 4, 5, 6];
  return (
    <Flex padding={"80px"} gap={"40px"} bg={"black"} direction={"column"}>
      {/* {data?.map((ele, index) => {
        const angle = index * (180 / data.length);
        return (
          <MotionFlex
            ml={"-15px"}
            direction={"column"}
            alignItems={"center"}
            gap={"5px"}
            whileHover={{ scale: 1.01 }}
          >
            <MotionText
              initial="initial"
              whileHover="hover"
              variants={textAnimation}
              fontSize={"12px"}
              style={{
                position: "absolute",
                top: "-40px", // Adjust as needed
                transform: `translateX(${
                  50 * Math.cos(angle * (Math.PI / 180))
                }px) translateY(${50 * Math.sin(angle * (Math.PI / 180))}px)`,
              }}
            >
              Name
            </MotionText>
            <Circle
              border={"1px solid red"}
              size="80px"
              bg="pink"
              color="white"
            ></Circle>
          </MotionFlex>
        );
      })} */}
      <TestComponent />
      <TestComponent2 />
    </Flex>
  );
};

export default Footer;
