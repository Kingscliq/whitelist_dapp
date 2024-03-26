import AccountList from './account-list';
import WhiteListForm from './whitelist-form';

const Home = () => {
  return (
    <section className="grid grid-cols-3">
      <aside className="col-span-1">
        <WhiteListForm />
      </aside>
      <aside className="col-span-2">
        <AccountList />
      </aside>
    </section>
  );
};

export default Home;
