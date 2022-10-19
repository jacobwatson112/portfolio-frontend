import { Box, Button, Flex, IconButton } from "@chakra-ui/react";
import { AiOutlineHome, AiOutlineMail, AiOutlineBulb } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

function NavbarComponent() {
    const navigate = useNavigate();
  return (
    <>
      <Flex h="50px" bg="green" w='100%'>
        <Button h="100%" onClick={() => navigate('/')} leftIcon={<AiOutlineHome size={25} />}>Home</Button>
        <Button h="100%" leftIcon={<AiOutlineBulb size={25} />}>Projects</Button>
        <Button h="100%" leftIcon={<AiOutlineMail size={25} />}>Contact</Button>
      </Flex>
    </>
  );
}
export default NavbarComponent;
