import "react-datepicker/dist/react-datepicker.css";

const Datepicker = () => {
  return (
    <>
      <input
        type="date"
        placeholder="Select Movie-in Date"
        required
        style={{marginLeft: -20}}
      />
    </>
  );
};

export default Datepicker;
