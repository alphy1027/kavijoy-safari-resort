import type { TeamMember } from "@/data/teamMembers";

const MemberCard = ({ image, member, role }: TeamMember) => {
  return (
    <figure className="bg-amber-200 w-[200px] relative rounded-sm overflow-hidden">
      <img src={image} alt="" className="bg-accent w-[200px] h-[270px]" />
      <figcaption className="sr-only">Team member photo</figcaption>
      <div className="w-fit absolute left-4 bottom-4">
        <h6 className="text-body-sm md:text-body-base font-semibold color-foreground">{member}</h6>
        <p className="text-body-xs md:text-body-sm color-foreground font-family-caption">{role}</p>
      </div>
    </figure>
  );
};

export default MemberCard;
