const Input = (props) => {
  return (
    <input
      className={`${props.className} bg-[#FAFAFA] border-[#CDCDCD] px-5 py-3 max-w-[315px] w-full border-[1px] rounded-full placeholder:font-montserrat placeholder:text-[12px] md:placeholder:text-[15px] placeholder:text-green-400 placeholder:font-medium`}
      type={props.type || "text"}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
