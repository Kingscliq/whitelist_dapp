import { Wallet } from 'lucide-react';
import { dummyData } from '../utils/dummyData';
import AccountItem from './account-item';
import { useWhiteListsContext } from '../context';

const AccountList = () => {
  const context = useWhiteListsContext();
  return (
    <div className="w-full lg:px-12 px-4 mt-24 lg:mt-0">
      <aside className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <h2 className="text-xl lg:text-3xl text-slate-100 font-bold mb-6 flex items-center">
          Whitelisted Accounts <Wallet className="text-primary ml-4" />
        </h2>
        <div>
          <button
            type="button"
            className="px-8 h-[50px] font-bold transition-all duration-200 ease-in-out bg-primary rounded-full bg-primary/70 hover:bg-primary w-full text-dark/70 hover:text-dark"
            onClick={() => context.setAccountStatusModal(true)}
          >
            Check Account Status
          </button>
        </div>
      </aside>
      {dummyData.map(item => (
        <section key={item.id} className="my-4 w-full">
          <AccountItem timestamp={item.timestamp} addressTo={item?.addressTo} />
        </section>
      ))}
    </div>
  );
};

export default AccountList;
