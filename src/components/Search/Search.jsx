import {Box, Button, Flex} from "@chakra-ui/react";
import {useContext} from "react";
import {HouseContext} from "../../context/HouseContext";
import LocationFilter from "./LocationFilter";
import PriceFilter from "./PriceFilter";
import PropertyTypeFilter from "./PropertyTypeFilter";
import Datepicker from "./Datepicker";

const Search = () => {
  const {searchHandler} = useContext(HouseContext);

  return (
    <Flex
      my="3"
      direction="column"
      borderRadius="md"
      bg="#fff"
      boxShadow="lg"
      p="7"
      mb="10"
      fontWeight="bold"
    >
      <Flex
        gap={{base: 3, md: 2}}
        direction={{base: "column", md: "row", fontWeight: "bold"}}
      >
        <Box width="40%">
          <label
            style={{
              fontWeight: "bold",
              padding: "2px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              color: "gray",
            }}
          >
            Location
          </label>
          <LocationFilter />
        </Box>
        <Box width="40%">
          <label
            style={{
              fontWeight: "bold",
              padding: "2px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              color: "gray",
            }}
          >
            <h1>When</h1>
          </label>
          <Datepicker />
        </Box>
        <Box width="80">
          <label
            style={{
              fontWeight: "bold",
              padding: "2px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              color: "gray",
            }}
          >
            Price
          </label>
          <PriceFilter />
        </Box>
        <Box width="80">
          <label
            style={{
              fontWeight: "bold",
              padding: "2px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              color: "gray",
            }}
          >
            Property
          </label>
          <PropertyTypeFilter />
        </Box>
        <Button
          onClick={searchHandler}
          p={{base: 3, md: 2}}
          width="20%"
          marginLeft="40px"
          marginTop="10px"
        >
          Search
        </Button>
      </Flex>
    </Flex>
  );
};

export default Search;
