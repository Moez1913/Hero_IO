import logo from '../assets/logo.png'

const Loader = () => {
  return (
    <div className=" fixed inset-0 flex gap-1 items-center justify-center bg-black/30 z-50">
      <span className='text-7xl text-purple-600 font-bold'>L</span><img
        src={logo}
        alt="loading"
        className="w-16 h-16 animate-spin"
      /> <span className='text-7xl text-purple-600 font-bold'>ading...</span>
    </div>
  );
};

export default Loader;