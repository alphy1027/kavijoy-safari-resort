// components/Breadcrumb.tsx
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean); // removes empty strings

  return (
    <nav className="text-sm ">
      <ol className="flex justify-center items-center space-x-2  text-background">
        <li>
          <Link to="/" className="hover:text-primary font-medium">
            Home
          </Link>
        </li>
        {paths.map((segment, index) => {
          const fullPath = "/" + paths.slice(0, index + 1).join("/");
          const isLast = index === paths.length - 1;
          const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

          return (
            <li key={index} className="flex items-center space-x-2">
              <span>/</span>
              {isLast ? (
                <span>{label}</span>
              ) : (
                <Link to={fullPath} className="hover:text-primary font-medium">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
