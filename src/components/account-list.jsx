import { Wallet } from 'lucide-react';
import { dummyData } from '../utils/dummyData';
import AccountItem from './account-item';

const AccountList = () => {
  return (
    <div className="w-full px-12">
      <aside className="flex items-center justify-between">
        <h2 className="text-3xl text-slate-100 font-bold mb-6 flex items-center">
          Whitelisted Accounts <Wallet className="text-primary ml-4" />
        </h2>
        <div>
          <button className="px-8 h-[50px] font-bold transition-all duration-200 ease-in-out bg-primary rounded-full bg-primary/70 hover:bg-primary w-full text-dark/70 hover:text-dark">
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
