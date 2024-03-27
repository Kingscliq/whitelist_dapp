import { Fragment } from 'react';
import { useWhiteListsContext } from '../context';
import AccountList from './account-list';
import DefaultScreen from './default-screen';
import WhiteListForm from './whitelist-form';
import AccountCheckModal from './account-check-modal';

const Home = () => {
  const context = useWhiteListsContext();

  if (!context?.currentAccount) {
    return <DefaultScreen />;
  }
  return (
    <Fragment>
      <AccountCheckModal />
      <section className="grid grid-cols-3 h-screen">
        <aside className="col-span-1 border-r border-primary/30 flex items-center justify-center">
          <WhiteListForm />
        </aside>
        <aside className="col-span-2 flex items-center justify-center">
          <AccountList />
        </aside>
      </section>
    </Fragment>
  );
};

export default Home;
