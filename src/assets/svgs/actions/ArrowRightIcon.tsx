type ArrowProps = {
  variant?: "primary" | "secondary" | "foreground" | "background";
};

const ArrowRightIcon = ({ variant = "primary" }: ArrowProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 5L21 12M21 12L14 19M21 12H3"
      className={`stroke-${variant}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowRightIcon;
