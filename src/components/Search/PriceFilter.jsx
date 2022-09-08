import {Select} from "@chakra-ui/react";
import {useContext} from "react";
import {HouseContext} from "../../context/HouseContext";

const PriceFilter = () => {
  const {setPrice} = useContext(HouseContext);

  const prices = [
    {value: "1000 - 2000"},
    {value: "2000 - 3000"},
    {value: "3000 - 4000"},
    {value: "4000 - 5000"},
    {value: "5000 - 6000"},
  ];

  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  return (
    <Select
      placeholder=""
      onChange={priceHandler}
      variant="unstyled"
      fontWeight="bold"
      fontSize="18px"
    >
      {prices.map((price, index) => (
        <option key={index}>{price.value}</option>
      ))}
    </Select>
  );
};

export default PriceFilter;
