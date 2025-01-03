const SkillCard = ({ icons, title, parcentage }) => {
    return (
      <div className="group">
        <div className="group-hover:border-lime-500 border-gray-700 border gap-3 duration-300 rounded-xl bg-gray-400 bg-opacity-5 shadow-2xl p-3 flex flex-col items-center justify-between relative h-full">
          <img className="w-20" src={icons} alt="" />
          <p>{title}</p>
          <p className="w-full text-center group-hover:bg-lime-500 group-hover:text-black py-1 border border-gray-600 rounded-xl transition-all">
            {parcentage}
          </p>
        </div>
      </div>
    );
  };
  
  export default SkillCard;
  