
const SectionTitle = ({ heading, subHeading }) => {
   
    return (
      <div className="text-center md:w-3/12 mx-auto my-8 ">
        <p className="text-yellow-600 mb-2">---{subHeading}---</p>
        <div className="divider mb-[-5px]"></div>
        <h3 className="text-2xl   py-4"> {heading}</h3>
        <div className="divider mt-[-5px]"></div>
      </div>
    );
}; 

export default SectionTitle;