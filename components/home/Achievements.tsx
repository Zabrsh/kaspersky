import Image from 'next/image';

interface AchievementProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Achievements: React.FC<AchievementProps> = ({ title, description, imageUrl }) => (
  <section className="flex flex-wrap  p-8">
    <div className="w-full md:w-1/2 p-4">
      <div className="relative">
        <div className="absolute bg-gradient-to-br from-gray-200 to-transparent rounded-lg shadow-2xl transform translate-x-2 translate-y-2"></div>
        <Image src={imageUrl} alt="Achievement Image" layout="responsive" width={600} height={400} className="rounded-lg shadow-lg" />
      </div>
    </div>
    <div className="flex flex-col justify-evenly text-wrap w-full md:w-1/2 p-4">
      <h2 className="text-4xl font-bold text-primary ">{title}</h2>
      <hr className="border-primary mb-4 w-1/4" />
      <p className="text-text text-xl">{description}</p>
    </div>
  </section>
);

export default Achievements;
