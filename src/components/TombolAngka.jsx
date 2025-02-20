import PropTypes from "prop-types";

const TombolAngka = ({ label, onClick }) => {
  return (
    <button
      key={label}
      className="p-4 rounded-full w-16 h-16 text-2xl text-[#D4D4D2] font-bold bg-[#505050] hover:bg-[#888886]"
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

TombolAngka.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TombolAngka;
