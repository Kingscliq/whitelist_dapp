const WhiteListForm = () => {
  return (
    <div className="px-12 py-4">
      <aside>
        <h2 className="text-3xl text-slate-100 font-bold mb-6">
          😎 Hey Ox3567256732...8767
        </h2>
        <p className="text-slate">
          Welcome to WhiteMan, a platform designed to streamline and manage
          whitelisting and blacklisting of accounts efficiently. We&apos;re
          thrilled to have you on board!
        </p>
      </aside>

      <aside className="mt-8">
        <div className="mb-4">
          <div className="mb-2">
            <label className="text-base text-slate-100 mb-4" htmlFor="account">
              Enter Account to Whitelist
            </label>
          </div>
          <input
            type="text"
            className="h-[50px] rounded-sm border-slate border bg-transparent w-full"
            name="account"
          />
        </div>

        <button className="border h-[50px] transition-all duration-200 ease-in-out rounded-sm border-primary/70 hover:border-primary w-full text-primary/70 hover:text-primary">
          Whitelist Account
        </button>
      </aside>
    </div>
  );
};

export default WhiteListForm;
