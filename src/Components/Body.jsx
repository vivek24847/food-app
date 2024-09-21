import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import CardsSkeleton from "./skeleton/CardsSkeleton";

const Body = ({ cardData }) => {
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Flex
      flexWrap={"wrap"}
      gap={"30px"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {cardData?.length
        ? cardData?.map((data) => {
            return <Cards data={data} key={data?.info?.id} />;
          })
        : skeleton?.map((ele) => {
            return <CardsSkeleton />;
          })}
    </Flex>
  );
};

export default Body;
