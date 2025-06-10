import HeroImage from "@/assets/images/heroimage.avif";

const HeroSection = () => {
  return (
    <section className=" bg-cover bg-center h-[90vh]" style={{ backgroundImage: `url(${HeroImage})` }}>
      <div className="flex flex-col items-center justify-center gap-y-6 p-12 pt-28 text-heading-lg font-family-heading uppercase">
        <span className=" text-center color-primary  font-bold ">Not just a stay- a story.</span>
      </div>
    </section>
  );
};

export default HeroSection;
