import logo from '../assets/logo.png'

const Loader = () => {
  return (
    <div className=" fixed inset-0 flex gap-1 items-center justify-center bg-black/30 z-50">
      <span className='text-xl md:text-7xl text-purple-600 font-bold'>L</span><img
        src={logo}
        alt="loading"
        className=" w-10 h-10 md:w-16 md:h-16 animate-spin"
      /> <span className=' text-2xl md:text-7xl text-purple-600 font-bold'>ading...</span>
    </div>
  );
};

export default Loader;