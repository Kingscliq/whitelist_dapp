import { Wallet } from 'lucide-react';
import { dummyData } from '../utils/dummyData';
import AccountItem from './account-item';

const AccountList = () => {
  return (
    <div className="w-full px-12">
      <h2 className="text-3xl text-slate-100 font-bold mb-6 flex items-center">
        Whitelisted Accounts <Wallet className="text-primary ml-4" />
      </h2>
      {dummyData.map(item => (
        <section key={item.addressFrom} className="my-4 w-full">
          <AccountItem />
        </section>
      ))}
    </div>
  );
};

export default AccountList;
