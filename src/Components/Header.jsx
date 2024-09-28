import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
} from "@chakra-ui/react";

// import { CiSearch } from "react-icons/ci";
import React, { useEffect, useRef, useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { AnimatePresence, motion } from "framer-motion";
import { Modal } from "../Components/common/Modal";
import { Link } from "react-router-dom";

const Header = ({ searchText, handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasAnimated = useRef(false);

  useEffect(() => {
    console.log("dsjfdsd");
    if (!hasAnimated.current) {
      hasAnimated.current = true;
    }
  }, []);

  const MotionButton = motion(Button);
  return (
    <>
      <Flex
        p={"10px 20px"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Flex gap={"40px"}>
          <Image src="/food-logo.png" alt="logo" width={"200px"} />
          <List display={"flex"} gap={"60px"} alignItems={"center"}>
            <Link to={"/"}>
              <ListItem>Home</ListItem>
            </Link>
            <Link to={"/about"}>
              <ListItem>About Us</ListItem>
            </Link>
            <Link to={"/contact"}>
              <ListItem>Contact Us</ListItem>
            </Link>
            <Link to={"/career"}>
              <ListItem>Career</ListItem>
            </Link>
          </List>
        </Flex>
        <Flex gap={"10px"}>
          <MotionButton
            //   initial={{ scale: 0 }}
            animate={
              !hasAnimated.current
                ? { scale: 1, rotate: [0, 0, 360, 360, 0] }
                : { scale: 1 }
            }
            transition={{
              duration: 0.5,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.1 }}
            onClick={() => setIsOpen(true)}
          >
            Filters
          </MotionButton>
          <InputGroup>
            <Input
              value={searchText}
              onChange={handleChange}
              placeholder="Search"
            />
            <InputRightElement>
              <Search2Icon />{" "}
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Flex>
      {isOpen ? <Modal handleClose={setIsOpen}>hello</Modal> : null}{" "}
    </>
  );
};

export default Header;
