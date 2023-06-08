const Button = (props) => {
  return (
    <button
      className={`rounded-[40px] py-[10px] px-[30px] font-montserrat font-medium text-[10px] md:text-[13px] ${props.styles}`}
      onClick={props.onClick} // Add onClick event handler
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  props: Array,
  onClick: () => {}, // Default empty function for onClick
};

export default Button;
