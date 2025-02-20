import PropTypes from "prop-types";

const TombolFungsi = ({ label, onClick }) => {
    return (
      <button
        key={label}
        className="p-4 rounded-full w-16 h-16 text-2xl font-bold bg-[#d4d4d2] hover:bg-gray-400"
        onClick={() => onClick(label)}
      >
        {label}
      </button>
    );
  };
  
  TombolFungsi.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  export default TombolFungsi;