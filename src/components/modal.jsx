import { CircleX } from 'lucide-react';

const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <section
      className={`h-full w-screen z-50 bg-black  text-slate-100 items-center justify-center bg-opacity-80 fixed top-0 left-0 duration-1000 transition-all ${
        isOpen ? 'opacity-100 flex' : 'opacity-0 hidden'
      }  `}
    >
      <div className="p-4 border border-gray-50 bg-black">
        <div className="flex justify-between">
          <div></div>
          <div
            onClick={closeModal}
            className="p-4 cursor-pointer hover:bg-opacity-20 hover:bg-gray-200 hover:border-red-200 border-white h-2 w-2 flex rounded-full items-center justify-center"
          >
            <div>
              <CircleX strokeWidth={1} />
            </div>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Modal;
