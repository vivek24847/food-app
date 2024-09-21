import { Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { imageBaseURL } from "../App";
import { IMG_BASE_URL } from "../utils/constants";

const Cards = ({ data }) => {
  const { cloudinaryImageId, avgRating, costForTwo, cuisines, locality, name } =
    data?.info;
  const MotionFlex = motion(Flex);
  const img = IMG_BASE_URL + cloudinaryImageId;
  console.log(img, "imgimgimg");
  return (
    <MotionFlex
      direction={"column"}
      minHeight={"350px"}
      border={"1px solid #cec9c9"}
      borderRadius={"10px"}
      width={"300px"}
      as={motion.div}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={img}
        alt="label"
        borderRadius={"10px 10px 0px 0px"}
        height={"200px"}
        fit={"cover"}
      />
      <Flex direction={"column"} gap={"5px"} padding={"10px"}>
        <Text fontWeight={600}>{name}</Text>
        <Text>{costForTwo}</Text>
        <Text>{locality}</Text>
        <Text>{avgRating}</Text>
      </Flex>
    </MotionFlex>
  );
};

export default Cards;
