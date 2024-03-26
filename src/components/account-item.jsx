import { Ellipsis } from 'lucide-react';

const AccountItem = () => {
  return (
    <section className="flex items-center px-4 h-[70px] rounded-xl justify-between cursor-pointer text-slate border border-primary/50 hover:border-primary bg-primary/5 hover:bg-primary/20">
      <div>
        <h3 className="font-bold mb-2">AccountItem</h3>
        <p className="text-xs">Lorem ipsum dolor sit amet consectetur</p>
      </div>
      <div>
        <Ellipsis />
      </div>
    </section>
  );
};

export default AccountItem;
