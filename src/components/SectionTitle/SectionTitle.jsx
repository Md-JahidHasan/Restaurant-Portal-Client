
const SectionTitle = ({ heading, subHeading }) => {
   
    return (
      <div className="text-center md:w-3/12 mx-auto my-8 ">
        <p className="text-yellow-600 mb-1">---{subHeading}---</p>
        <div className="divider mb-[-1px]"></div>
        <h3 className="text-2xl   py-3"> {heading}</h3>
        <div className="divider mt-[-1px]"></div>
      </div>
    );
}; 

export default SectionTitle;