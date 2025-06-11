const TeamCard = ({ name, role, photoURL, university, desc, github, linkedin }) => {
  return (
    <div className="shadow-card-about flex w-70 flex-col items-center gap-0.5 rounded-xl p-4 md:w-58 lg:w-68">
      <img src={photoURL} alt="user" className="mb-1 w-30 rounded-full lg:w-33" />
      <p className="text-light-green text-xs font-semibold">{role}</p>
      <p className="text-custom-black text-center text-lg font-semibold">{name}</p>
      <p className="text-custom-gray text-sm font-medium">{university}</p>
      <p className="text-custom-gray mt-2 text-center text-xs">{desc}</p>
      <div className="mt-5">
        <a href={github}>
          <i className="fa-brands fa-github mr-3 text-2xl text-gray-600 transition duration-400 hover:text-black"></i>
        </a>
        <a href={linkedin}>
          <i className="fa-brands fa-linkedin text-2xl text-gray-600 transition duration-400 hover:text-[#126bc4]"></i>
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
