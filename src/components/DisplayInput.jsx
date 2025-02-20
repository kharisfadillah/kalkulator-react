import PropTypes from "prop-types";

const DisplayInput = ({ value }) => {
  return (
    <div className="mt-4 rounded-lg text-xl text-right text-[#828282]">
      {value}
    </div>
  );
};

DisplayInput.propTypes = {
  value: PropTypes.string.isRequired,
};

export default DisplayInput;
