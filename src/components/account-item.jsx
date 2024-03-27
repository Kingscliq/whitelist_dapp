import { Ellipsis } from 'lucide-react';
import { shorten } from '../utils/formatters';

const AccountItem = ({ timestamp, addressTo }) => {
  return (
    <section className="flex items-center px-4 h-[70px] rounded-xl justify-between cursor-pointer text-slate border border-primary/50 hover:border-primary bg-primary/5 hover:bg-primary/20">
      <div>
        <h3 className="font-bold mb-2">{shorten(addressTo)}</h3>
        <p className="text-xs">{timestamp}</p>
      </div>
      <div>
        <Ellipsis />
      </div>
    </section>
  );
};

export default AccountItem;
