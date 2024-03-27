import { useWhiteListsContext } from '../context';

const DefaultScreen = () => {
  const context = useWhiteListsContext();
  return (
    <section className=" h-screen flex items-center justify-center">
      <aside className="w-[500px]">
        <h2 className="text-3xl text-slate-100 font-bold mb-6 text-center">
          😎 Hi! Welcome to Whiteman
        </h2>
        <p className="text-slate text-center mb-6">
          Welcome to WhiteMan, a platform designed to streamline and manage
          whitelisting and blacklisting of accounts efficiently. We&apos;re
          thrilled to have you on board!
        </p>

        <button
          className=" h-[50px] font-bold transition-all duration-200 ease-in-out bg-primary rounded-full bg-primary/70 hover:bg-primary w-full text-dark/70 hover:text-dark"
          onClick={() => context?.connectToWallet()}
        >
          Whitelist Account
        </button>
      </aside>
    </section>
  );
};

export default DefaultScreen;
