import { Box, Button, Flex, IconButton, Spacer, Text } from "@chakra-ui/react";
import { AiOutlineHome, AiOutlineMail, AiOutlineBulb } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { NavbarComponentProps } from "../Types/props/NavbarComponentProps";

function NavbarComponent(props: NavbarComponentProps) {
    const navigate = useNavigate();
  return (
    <>
      <Flex h="50px" bg="green" w='100%'>
        <Box>
          <Text color='black' fontWeight='bold' fontSize='32px' ml='50px' mr='50px'>Jacob Watson</Text>
        </Box>
        <Spacer />
        {props.pageWidth < 730 ?(
          <>
        <Box bg='blue' alignContent='right' h='100%'>
          <Button h="100%" ml='10px' mr='10px' onClick={() => navigate('/')} leftIcon={<AiOutlineHome size={25} />}></Button>
          <Button h="100%" ml='10px' mr='10px' leftIcon={<AiOutlineBulb size={25} />}></Button>
          <Button h="100%" ml='10px' mr='10px' leftIcon={<AiOutlineMail size={25} />}></Button>
        </Box>
          </>
        ) : (
          <>
          <Box bg='blue' alignContent='right' h='100%'>
            <Button h="100%" ml='10px' mr='10px' onClick={() => navigate('/')} leftIcon={<AiOutlineHome size={25} />}>Home</Button>
            <Button h="100%" ml='10px' mr='10px' leftIcon={<AiOutlineBulb size={25} />}>Projects</Button>
            <Button h="100%" ml='10px' mr='10px' leftIcon={<AiOutlineMail size={25} />}>Contact</Button>
          </Box>
          </>

        )}
        
      </Flex>
    </>
  );
}
export default NavbarComponent;
