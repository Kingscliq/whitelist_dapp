import { useFormik } from 'formik';
import * as yup from 'yup';
import { useWhiteListsContext } from '../context';
import { shorten } from '../utils/formatters';

export const validationSchema = yup.object({
  address: yup.string().required('Please provide an address'),
});

const WhiteListForm = () => {
  const context = useWhiteListsContext();
  const { handleChange, handleSubmit, errors, values, touched } = useFormik({
    initialValues: {
      address: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      context?.whiteListAccount(values);
    },
  });
  return (
    <div className="lg:px-12 px-4 py-4">
      <aside>
        <h2 className="text-3xl text-slate-100 font-bold mb-6">
          😎 Hey {shorten(context?.currentAccount)}
        </h2>
        <p className="text-slate">
          Welcome to WhiteMan, a platform designed to streamline and manage
          whitelisting and blacklisting of accounts efficiently. We&apos;re
          thrilled to have you on board!
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
                Enter Account to Whitelist
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
            {context?.whiteListing ? 'Loading...' : ' Whitelist Account'}
          </button>
        </form>
      </aside>
    </div>
  );
};

export default WhiteListForm;
