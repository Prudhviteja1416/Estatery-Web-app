import {
  VStack,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Flex,
  Circle,
} from "@chakra-ui/react";
import {BiBed, BiBath, BiArea} from "react-icons/bi";
import {AiOutlineHeart} from "react-icons/ai";
const HouseItem = ({house}) => {
  return (
    <Flex justify="center" align="center">
      <Stack
        justify="center"
        width="500px"
        bg="white"
        boxShadow="xl"
        borderRadius="xl"
        mb="10"
        m="5"
      >
        <Image src={house.imageLg} h="200" alt="houses" borderRadius="xl" />
        <Text
          className="ribbon mt-0 "
          fontSize="18px"
          position="relative"
          top="-3"
          paddingTop="2"
        >
          &#9734; POPULAR
        </Text>
        <VStack p="4" align="left">
          <Text
            mt="-1"
            fontWeight="extrabold"
            fontSize="18px"
            color="rgb(90, 6, 173)"
            display="flex"
          >
            ${house.price}
            <span
              style={{
                fontSize: 14,
                color: "grey",
                fontWeight: "normal",
                marginTop: 4,
              }}
            >
              /month
            </span>
            <Circle size="40px" marginLeft="auto" border="1px solid gray">
              <AiOutlineHeart
                style={{fontSize: "22px", color: "rgb(90, 6, 173)"}}
              />
            </Circle>
          </Text>

          <Heading fontSize="24px" letterSpacing="tight">
            {house.name}
          </Heading>
          <Text fontSize="13px" color="grey">
            {house.address}
          </Text>

          <Divider my="2.5" />

          <HStack spacing="5">
            <HStack>
              <BiBed style={{color: "rgb(90, 6, 173)"}} />
              <Text fontSize="12px">{house.bedrooms}</Text>
            </HStack>

            <HStack>
              <BiBath style={{color: "rgb(90, 6, 173)"}} />
              <Text fontSize="12px">{house.bathrooms}</Text>
            </HStack>

            <HStack>
              <BiArea style={{color: "rgb(90, 6, 173)"}} />
              <Text fontSize="12px">{house.surface}</Text>
            </HStack>
          </HStack>
        </VStack>
      </Stack>
    </Flex>
  );
};

export default HouseItem;
