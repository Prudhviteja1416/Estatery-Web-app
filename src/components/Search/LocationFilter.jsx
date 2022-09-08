import {Hide, Select} from "@chakra-ui/react";
import {useContext} from "react";
import {HouseContext} from "../../context/HouseContext";

const LocationFilter = () => {
  const {setCountry, countries} = useContext(HouseContext);

  const locationHandler = (event) => {
    setCountry(event.target.value);
  };

  return (
    <>
      <Select
        placeholder=""
        onChange={locationHandler}
        variant="unstyled"
        icon={Hide}
        fontWeight="bold"
        fontSize="18px"
      >
        {countries.map((country, index) => (
          <option key={index}>{country}</option>
        ))}
      </Select>
    </>
  );
};

export default LocationFilter;
