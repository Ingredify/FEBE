const TeamCard = ({ name, role, photoURL = '' }) => {
  return (
    <>
      <section className="@container/team-card w-full bg-amber-300">
        <div key={name} className="w-full">
          <img
            src={photoURL || 'https://placehold.co/600x400'}
            alt={`${name}'s photo`}
            className="h-24 w-24 rounded-full object-cover"
          />
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </section>
      ;
    </>
  );
};

export default TeamCard;
