import PropTypes from "prop-types";

const TombolOperasi = ({ label, onClick }) => {
  return (
    <button
      key={label}
      className="p-4 rounded-full w-16 h-16 text-2xl font-bold text-white bg-[#FF9500] hover:bg-[#A85A00]"
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

TombolOperasi.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TombolOperasi;