import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const HeroSlider = ({ images }: { images: string[] }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);
  return (
    <div ref={emblaRef} className="embla">
      <div className="embla__container flex">
        {images.map((image) => (
          <div key={image} className="embla__slide rounded-sm relative">
            <img src={image} alt="" className=" h-[80vh] w-full object-cover bg-accent" />
            <div className="absolute top-1/2 left-1/2 rounded-sm -translate-x-1/2 -translate-y-full">
              <h1 className="text-heading-lg text-center font-family-heading color-background max-w-[290px] font-bold">
                More than just a stay, - A story
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
