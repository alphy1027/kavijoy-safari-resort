import HeroImage from "@/assets/images/heroimage.avif";

const HeroSection = () => {
  return (
    <section className=" bg-cover bg-center h-[250px]" style={{ backgroundImage: `url(${HeroImage})` }}>
      <div className="flex flex-col items-center justify-center gap-y-6 p-12">
        <span className=" text-center text-background  font-semibold ">Not just a stay- a story.</span>
      </div>
    </section>
  );
};

export default HeroSection;
