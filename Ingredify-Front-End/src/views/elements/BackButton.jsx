import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <Link
      to="/home"
      className="text-light-green group flex w-fit cursor-pointer items-center gap-1.5"
    >
      <i className="fa-solid fa-chevron-left h-4"></i>
      <span className="font-semibold group-hover:underline">Back</span>
    </Link>
  );
};

export default BackButton;
