
const SectionTitle = ({ heading, subHeading }) => {
   
    return (
      <div className="text-center md:w-1/2 mx-auto my-8 ">
        <p className="text-orange-700 mb-[-10px]">---{subHeading}---</p>
        <div className="divider mb-[-1px]"></div>
        <h3 className="text-2xl   py-1"> {heading}</h3>
        <div className="divider mt-[-1px]"></div>
      </div>
    );
}; 

export default SectionTitle;