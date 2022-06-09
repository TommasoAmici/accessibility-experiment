import Image from "next/image";

interface ComponentProps {
  images: string[];
  alts: ProductImagesAlts;
}

const Accessible = ({ images, alts }: ComponentProps) => {
  return (
    <ul className="flex space-x-4 overflow-scroll lg:grid lg:grid-cols-2 lg:gap-y-4 lg:gap-x-6 lg:space-x-0 lg:overflow-hidden">
      {images.map((image, index) => (
        <li className="w-64 min-w-[16rem] lg:w-auto" key={index}>
          <Image
            src={image}
            alt={alts[index]}
            width={360}
            height={450}
            priority={index < 2}
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
          />
        </li>
      ))}
    </ul>
  );
};

const Inaccessible = ({ images }: ComponentProps) => {
  return (
    <div className="flex space-x-[16px] overflow-scroll lg:grid lg:grid-cols-2 lg:gap-y-[16px] lg:gap-x-[24px] lg:space-x-0 lg:overflow-hidden">
      {images.map((image, index) => (
        <div className="w-[256px] min-w-[256px] lg:w-auto" key={index}>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image
            src={image}
            width={360}
            height={450}
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
};

export const ProductGallery = ({
  accessible,
  ...props
}: { accessible: boolean } & ComponentProps) => {
  if (accessible) {
    return <Accessible {...props} />;
  }
  return <Inaccessible {...props} />;
};
