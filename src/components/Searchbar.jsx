import {Heading, Select, Flex} from "@chakra-ui/react";
import {useContext} from "react";
import {HouseContext} from "../context/HouseContext";

const Searchbar = () => {
  const {setProperty, properties} = useContext(HouseContext);

  const propertyTypeHandler = (event) => {
    setProperty(event.target.value);
  };

  return (
    <>
      <Flex m="10" justifyContent="space-between">
        <Heading fontSize={{base: "xl", sm: "2xl", md: "3xl"}}>
          Search Properties to rent
        </Heading>
        <Select
          placeholder="Search  with Searchbar"
          onChange={propertyTypeHandler}
          w="60"
          color="#534191"
          bg="#fff"
        >
          {properties.map((type, index) => (
            <option key={index}>{type}</option>
          ))}
        </Select>
      </Flex>
    </>
  );
};
export default Searchbar;
