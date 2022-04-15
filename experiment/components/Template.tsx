interface ComponentProps {}

const Accessible = ({}: ComponentProps) => {
  return <div></div>;
};

const Inaccessible = ({}: ComponentProps) => {
  return <div></div>;
};

export const ShoeGallery = ({ accessible, ...props }: { accessible: boolean } & ComponentProps) => {
  if (accessible) {
    return <Accessible {...props} />;
  }
  return <Inaccessible {...props} />;
};
