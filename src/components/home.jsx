import AccountList from './account-list';
import WhiteListForm from './whitelist-form';

const Home = () => {
  return (
    <section className="grid grid-cols-3 h-screen">
      <aside className="col-span-1 border-r border-primary/30 flex items-center justify-center">
        <WhiteListForm />
      </aside>
      <aside className="col-span-2 flex items-center justify-center">
        <AccountList />
      </aside>
    </section>
  );
};

export default Home;
