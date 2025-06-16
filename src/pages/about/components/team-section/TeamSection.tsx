import ArrowRightIcon from "@/assets/svgs/actions/ArrowRightIcon";
import ArrowLeftIcon from "@/assets/svgs/actions/ArrowLeftIcon";
import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/section/SectionTitle";
import Button from "@/components/UI-primitives/Button";
import { teamMembers } from "@/data/teamMembers";
import MemberCard from "./components/MemberCard";

const TeamSection = () => {
  return (
    <SectionContainer className="flex flex-col gap-y-2.5">
      <div className="flex justify-between items-center">
        <SectionTitle caption="Our Team">
          Our Awesome Team
          <br /> Members
        </SectionTitle>
        <div className="flex gap-x-4">
          <Button variant="outline" leftIcon={<ArrowLeftIcon />} />
          <Button variant="outline" rightIcon={<ArrowRightIcon />} />
        </div>
      </div>
      <div className="p-2 flex flex-wrap justify-center gap-6">
        {teamMembers.map((teamMember, index) => (
          <MemberCard key={index} image={teamMember.image} member={teamMember.member} role={teamMember.role} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default TeamSection;
