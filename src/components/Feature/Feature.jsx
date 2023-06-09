const Feature = ({ data }) => {
  return (
    <div className="flex flex-col lg:max-w-[440px] basis-1/3 hover:bg-white gap-[10px] z-50 transition-all px-[30px] first:shadow-shadow text-center justify-center py-[60px] hover:shadow-shadow">
      <div className="text-center mb-[40px] flex justify-center">
        <img src={data.image} alt="" />
      </div>
      <h1 className="text-green-400 font-primary text-2xl lg:text-[30px]">{data.name}</h1>
      <p className="font-montserrat text-md lg:text-base leading-5 font-normal">
        {data.description}
      </p>
    </div>
  );
};

Feature.propTypes = {
  data: Array
}
export default Feature;
