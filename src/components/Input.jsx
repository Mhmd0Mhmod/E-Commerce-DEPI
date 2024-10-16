function Input({ icon, type = 'text', placeholder, error, register }) {
  return (
    <>
      <div className="flex items-center gap-2 border border-gray-B4B4B4 p-[14px] rounded-lg ">
        {icon}
        <input className="focus:outline-0" placeholder={placeholder} type={type} {...register} />
      </div>
      {error && <p className="text-status-error font-bold"> {error}</p>}
    </>
  );
}

export default Input;
