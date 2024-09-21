import { Flex } from "@chakra-ui/layout";
import { Skeleton, SkeletonText } from "@chakra-ui/skeleton";
import React from "react";

const CardsSkeleton = () => {
  return (
    <Flex
      direction={"column"}
      minHeight={"350px"}
      borderRadius={"10px"}
      width={"300px"}
      border={"1px solid #cec9c9"}
    >
      <Skeleton borderRadius={"10px 10px 0px 0px"} height={"200px"}></Skeleton>
      <Flex direction={"column"} gap={"10px"} padding={"10px"}>
        <Skeleton height={"20px"} width={"90%"} />
        <Skeleton height={"20px"} width={"70%"} />
        <Skeleton height={"20px"} width={"40%"} />
        <Skeleton height={"20px"} width={"10%"} />
      </Flex>
    </Flex>
  );
};

export default CardsSkeleton;
