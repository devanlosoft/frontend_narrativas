export default function InputForm({ name, onChange }) {
  return (
    <div>
      <div className="mt-2 rounded-md shadow-sm ">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
        <input
          type={name}
          name={name}
          id={name}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="escribe aqui"
          onChange={onChange}
        />

        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
        </div>
      </div>
    </div>
  );
}
