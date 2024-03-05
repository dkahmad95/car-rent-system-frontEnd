interface heroProps {
  coverImage: string;
  icon: string;
  title: string;
  name?: string;
}

const Hero: React.FC<heroProps> = ({ coverImage, icon, title, name }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* client image and cover Image */}
      <div className="relative w-full">
        {/* cover Image */}
        <div className="relative flex justify-center">
          <img
            src={coverImage}
            alt="cover image"
            className="w-full h-64    lg:max-w-3xl object-cover rounded-lg lg:rounded-t-lg"
          />
          {/* client Icon */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <img
              src={icon}
              alt="icon"
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-white"
            />
          </div>
        </div>
      </div>
      {/* title and client name  */}
      <div className="flex justify-center items-center flex-col bg-white p-4 mt-4">
        {/* title */}
        <div className="text-lg font-semibold">{title}</div>
        {/* client name */}
        <div className="text-gray-500">{name}</div>
      </div>
    </div>
  );
};

export default Hero;
