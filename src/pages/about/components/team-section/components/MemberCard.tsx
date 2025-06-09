import type { TeamMember } from "@/data/teamMembers";

const MemberCard = ({ image, member, role }: TeamMember) => {
  return (
    <figure className="bg-amber-500 relative rounded-sm overflow-hidden">
      <img src={image} alt="" className="bg-red-400 w-[212px] h-[280px] md:w-[280px] md:h-[340px]" />
      <figcaption className="sr-only">Team member photo</figcaption>
      <div className="w-fit absolute left-4 bottom-4">
        <h6 className="text-body-sm md:text-body-base font-medium">{member}</h6>
        <p className="text-body-xs md:text-body-sm">{role}</p>
      </div>
    </figure>
  );
};

export default MemberCard;
