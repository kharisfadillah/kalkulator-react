import PropTypes from "prop-types";

const TombolNol = ({ onClick }) => {
  return (
    <button
      key="0"
      className="p-4 rounded-full h-16 text-2xl text-[#D4D4D2] font-bold bg-[#505050] hover:bg-[#888886] col-span-2"
      onClick={() => onClick("0")}
    >
      0
    </button>
  );
};

TombolNol.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default TombolNol;
