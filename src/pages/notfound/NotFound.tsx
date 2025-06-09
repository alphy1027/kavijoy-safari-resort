import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-[350px] flex flex-col items-center">
      <h2 className="text-center p-2">Page Not Found</h2>
      <Link to="/" className="text-blue-400 underline hover:no-underline">
        Go back to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
