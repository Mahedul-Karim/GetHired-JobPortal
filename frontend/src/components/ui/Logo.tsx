import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to={"/"} className="text-2xl font-bold text-primary">
      H<span>i</span>reMe
    </Link>
  );
};

export default Logo;
