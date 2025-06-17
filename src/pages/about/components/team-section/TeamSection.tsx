import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/section/SectionTitle";
import { teamMembers } from "@/data/teamMembers";
import MemberCard from "./components/MemberCard";

const TeamSection = () => {
  return (
    <SectionContainer className="flex flex-col items-center gap-y-2.5">
      <SectionTitle caption="Our Team" className="text-center">
        Our Awesome Team
        <br /> Members
      </SectionTitle>
      <div className="p-2 flex flex-wrap justify-center gap-6">
        {teamMembers.map((teamMember, index) => (
          <MemberCard key={index} image={teamMember.image} member={teamMember.member} role={teamMember.role} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default TeamSection;
