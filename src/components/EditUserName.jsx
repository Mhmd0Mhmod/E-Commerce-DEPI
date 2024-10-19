function EditUserName() {
  function handleEdit() {}
  return (
    <>
      <div className="p-4 space-y-4">
        <h1 className="text-2xl"> First Name and Last Name</h1>
        <div>
          <label htmlFor="fname">First Name</label>
          <input disabled type="text" id="fname" className="w-full p-4 bg-gray-100 focus:outline-none" />
        </div>
        <div>
          <label htmlFor="lname">Last Name</label>
          <input disabled type="text" id="lname" className="w-full p-4 bg-gray-100 focus:outline-none" />
        </div>
        <div>
          <button className="bg-blue-500 text-white rounded-lg p-2 ml-auto mr-0 block" onClick={handleEdit}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}
export default EditUserName;
