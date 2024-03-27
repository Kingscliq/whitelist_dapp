import Modal from './modal';
import { useWhiteListsContext } from '../context';
import { validationSchema } from './whitelist-form';
import { useFormik } from 'formik';

const AccountCheckModal = () => {
  // const [modalOpen, setModalOpen] = useState(true);

  const context = useWhiteListsContext();
  const { handleChange, handleSubmit, errors, values, touched } = useFormik({
    initialValues: {
      address: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      //   context?.whiteListAccount(values);
      console.log(values);
    },
  });
  return (
    <Modal
      closeModal={() => context?.setAccountStatusModal(false)}
      isOpen={context?.accountStatusModal}
    >
      <div className="px-12 py-4">
        <aside>
          <h2 className="text-3xl text-slate-100 font-bold mb-6">
            Check Account Status
          </h2>
          <p className="text-slate">
            Verify that the account entered on the input is whitelisted
          </p>
        </aside>
        <aside className="mt-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="mb-2">
                <label
                  className="text-base text-slate-100 mb-4"
                  htmlFor="address"
                >
                  Enter Account to Check Status
                </label>
              </div>
              <input
                type="text"
                className={`h-[50px] px-4 text-slate rounded-full border-slate border bg-transparent w-full ${
                  errors.address && touched.address && 'border border-red-600'
                }`}
                name="address"
                id="address"
                value={values.address}
                onChange={handleChange}
                placeholder="E.g 0x0xxx.....xxxx 😎"
              />
              {errors.address && touched.address && (
                <p className="text-red-600 text-sm mt-2">{errors.address}</p>
              )}
            </div>
            <button
              disabled={context?.whitelisting}
              type="submit"
              className="border h-[50px] transition-all duration-200 ease-in-out rounded-full border-primary/70 hover:border-primary w-full text-primary/70 hover:text-primary disabled:bg-primary/10 disabled:cursor-not-allowed"
            >
              {context?.whiteListing ? 'Loading...' : ' Check Status'}
            </button>
          </form>
        </aside>
      </div>
    </Modal>
  );
};

export default AccountCheckModal;
