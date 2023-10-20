import Image from 'next/image';

interface TechCardProps {
  imageSrc: string;
  altText: string;
  label: string;
}

const TechCard: React.FC<TechCardProps> = ({ imageSrc, altText, label }) => {
  return (
    <section className="flex items-center gap-4 rounded-md py-2 px-5 border-2 hover:cursor-pointer  hover:duration-100 hover:animate-bounce  border-[#64CCC5]">
      <Image width={20} height={20} src={imageSrc} alt={altText} />
      <span className="text-white ">{label}</span>
    </section>
  );
};

export default TechCard;