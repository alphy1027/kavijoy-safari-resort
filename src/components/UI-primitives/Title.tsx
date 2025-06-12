import { twMerge } from "tailwind-merge";

const Title = ({ className }: { className?: string }) => {
  return (
    <h3 className={twMerge("text-heading-base tracking-wide font-medium font-family-heading", className)}>
      Kavijoy Safari Resort
    </h3>
  );
};

export default Title;
