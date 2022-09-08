import {
  Flex,
  Heading,
  Button,
  HStack,
  chakra,
  useBreakpointValue,
  ButtonGroup,
} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import NavMobile from "./NavMobile";
import {BsFillHouseFill} from "react-icons/bs";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
const Header = () => {
  const isDesktop = useBreakpointValue({base: true, lg: true});

  return (
    <chakra.header id="header" bg="whitesmoke">
      <Flex w="100%" py="6" px="2" mx="3">
        <Link to="/">
          <span>
            <Heading
              fontSize="2xl"
              display="flex"
              alignItems="center"
              marginTop="5px"
            >
              <BsFillHouseFill
                style={{color: "#6a45ad", marginRight: "10px"}}
              />
              Estatery
            </Heading>
          </span>
        </Link>
        {isDesktop ? (
          <>
            <Flex marginLeft="20">
              <ButtonGroup>
                <Button background="none" color="black">
                  Rent
                </Button>
                <Button background="none" color="black">
                  Sell
                </Button>
                <Button background="none" color="black">
                  Buy
                </Button>
                <Button background="none" color="black">
                  Manage Properties
                  <span>
                    <MdOutlineKeyboardArrowDown fontSize="20px" />
                  </span>
                </Button>
                <Button background="none" color="black">
                  Resources
                  <span>
                    <MdOutlineKeyboardArrowDown fontSize="20px" />
                  </span>
                </Button>
              </ButtonGroup>
            </Flex>

            <HStack marginLeft="80px">
              <Button size="sm" variant="outline">
                Login
              </Button>
              <Button size="sm" variant="solid">
                Sign up
              </Button>
            </HStack>
          </>
        ) : (
          <NavMobile />
        )}
      </Flex>
      {/* <Divider color='purple.800' w={}='20px' />  */}
    </chakra.header>
  );
};

export default Header;
