import PropTypes from "prop-types";

const DisplayResult = ({ value }) => {
  return (
    <div className="rounded-lg text-3xl text-right text-[#D4D4D2]">{value}</div>
  );
};

DisplayResult.propTypes = {
  value: PropTypes.string.isRequired,
};

export default DisplayResult;
