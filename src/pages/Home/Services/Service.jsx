import { BsArrowRight } from 'react-icons/bs';

const Service = ({ service }) => {
  const { title, image, desc } = service;
  return (
    <div className="bg-white hover:bg-[#ED1B24] duration-500 text-[#002A54] hover:text-white  px-6 py-8 flex flex-col gap-y-6 rounded-se-[30px] rounded-bl-[30px] shadow-md shadow-white">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex items-center justify-center">
        <img src={image} alt="" className="w-36" />
      </div>
      <p>{desc}</p>
      <div className="flex justify-end">
        <BsArrowRight className='text-4xl' />
      </div>
    </div>
  );
};

export default Service;
