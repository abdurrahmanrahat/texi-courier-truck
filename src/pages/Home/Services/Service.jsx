const Service = ({ service }) => {
  const { title, id, image, desc } = service;
  return (
    <div className="bg-white hover:bg-[#ED1B24] text-[#002A54] hover:text-white  px-6 py-8 flex flex-col gap-y-6 rounded-se-[30px] rounded-bl-[30px] shadow-md shadow-white">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex items-center justify-center">
        <img src={image} alt="" className="w-36" />
      </div>
      <p>{desc}</p>
      <div className="flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="24"
          viewBox="0 0 100 24"
          fill="none"
          className="w-16"
        >
          <path
            d="M99.0607 13.0607C99.6464 12.4749 99.6464 11.5251 99.0607 10.9393L89.5147 1.39339C88.9289 0.807604 87.9792 0.807604 87.3934 1.39339C86.8076 1.97918 86.8076 2.92892 87.3934 3.51471L95.8787 12L87.3934 20.4853C86.8076 21.0711 86.8076 22.0208 87.3934 22.6066C87.9792 23.1924 88.9289 23.1924 89.5147 22.6066L99.0607 13.0607ZM1.31134e-07 13.5L98 13.5L98 10.5L-1.31134e-07 10.5L1.31134e-07 13.5Z"
            fill="#ED1B24"
          />
        </svg>
      </div>
    </div>
  );
};

export default Service;
