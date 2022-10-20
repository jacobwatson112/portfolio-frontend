import React from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Spacer,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineBulb,
  AiOutlineMenu,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { NavbarComponentProps } from "../Types/props/NavbarComponentProps";

function NavbarComponent(props: NavbarComponentProps) {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Flex h="50px" bg="green" w="100%">
        <Box>
          <Text
            color="black"
            fontWeight="bold"
            fontSize="32px"
            ml="50px"
            mr="50px"
          >
            Jacob Watson
          </Text>
        </Box>
        <Spacer />
        {props.pageWidth < 730 ? (
          <>
            {props.pageWidth < 520 ? (
              <>
                <Box bg="blue" alignContent="right" h="100%">
                  <IconButton
                    h="100%"
                    w="50px"
                    ml="10px"
                    mr="10px"
                    aria-label="Home"
                    onClick={() => navigate("/")}
                    icon={<AiOutlineHome size={25} />}
                  ></IconButton>
                  <IconButton
                    h="100%"
                    w="50px"
                    ml="10px"
                    mr="10px"
                    aria-label="Menu"
                    onClick={onOpen}
                    icon={<AiOutlineMenu size={25} />}
                  ></IconButton>
                  <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />
                      <Button
                        h="50px"
                        m="10px"
                        mt="50px"
                        onClick={() => {onClose(); navigate("/")}}
                        leftIcon={<AiOutlineHome size={25} />}
                      >
                        Home
                      </Button>
                      <Button
                        h="50px"
                        m="10px"
                        leftIcon={<AiOutlineBulb size={25} />}
                      >
                        Projects
                      </Button>
                      <Button
                        h="50px"
                        m="10px"
                        leftIcon={<AiOutlineMail size={25} />}
                      >
                        Contact
                      </Button>
                    </DrawerContent>
                  </Drawer>
                </Box>
              </>
            ) : (
              <>
                <Box bg="blue" alignContent="right" h="100%">
                  <IconButton
                    h="100%"
                    w="50px"
                    ml="10px"
                    mr="10px"
                    aria-label="Home"
                    onClick={() => navigate("/")}
                    icon={<AiOutlineHome size={25} />}
                  ></IconButton>
                  <IconButton
                    h="100%"
                    w="50px"
                    ml="10px"
                    mr="10px"
                    aria-label="Home"
                    icon={<AiOutlineBulb size={25} />}
                  ></IconButton>
                  <IconButton
                    h="100%"
                    w="50px"
                    ml="10px"
                    mr="10px"
                    aria-label="Home"
                    icon={<AiOutlineMail size={25} />}
                  ></IconButton>
                </Box>
              </>
            )}
          </>
        ) : (
          <>
            <Box bg="blue" alignContent="right" h="100%">
              <Button
                h="100%"
                ml="10px"
                mr="10px"
                onClick={() => navigate("/")}
                leftIcon={<AiOutlineHome size={25} />}
              >
                Home
              </Button>
              <Button
                h="100%"
                ml="10px"
                mr="10px"
                leftIcon={<AiOutlineBulb size={25} />}
              >
                Projects
              </Button>
              <Button
                h="100%"
                ml="10px"
                mr="10px"
                leftIcon={<AiOutlineMail size={25} />}
              >
                Contact
              </Button>
            </Box>
          </>
        )}
      </Flex>
    </>
  );
}
export default NavbarComponent;
