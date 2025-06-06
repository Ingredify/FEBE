import TeamCard from '../components/TeamCard';

const teamMembers = [
  {
    name: 'Jonathan',
    role: 'Fullstack Developer',
    photo: '',
  },
  {
    name: 'Jonathan 2',
    role: 'Fullstack Developer',
    photo: '',
  },
  {
    name: 'Jonathan 3',
    role: 'Fullstack Developer',
    photo: '',
  },
];

const aboutPage = () => {
  const teamCards = teamMembers.map((member) => (
    <TeamCard key={member.name} name={member.name} role={member.role} />
  ));
  return (
    <>
      <section className="@container/about container mx-auto flex gap-2">{teamCards}</section>
    </>
  );
};
export default aboutPage;
