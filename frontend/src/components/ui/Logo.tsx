import { Link } from "react-router";

type Props = React.HTMLAttributes<HTMLAnchorElement>;

const Logo: React.FC<Props> = ({ style = {} }) => {
  return (
    <Link to={"/"} className="text-2xl font-bold text-gradient" style={style}>
      GetHired
    </Link>
  );
};

export default Logo;
