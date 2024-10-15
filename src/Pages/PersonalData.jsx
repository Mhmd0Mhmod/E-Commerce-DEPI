import { CiBarcode } from 'react-icons/ci';
import { FaRegEdit } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { GrKey, GrLocation } from 'react-icons/gr';
import { HiOutlineUser } from 'react-icons/hi';
import { MdAttachEmail } from 'react-icons/md';
import Modal from '../components/Modal';

function PersonalData() {
  return (
    <>
      <h1 className="text-2xl">Identifiaction</h1>
      <p className="text-gray-400">Verify Your Identity</p>
      <div className="mt-6 text-gray-400 grid grid-cols-2 grid-rows-3 gap-5">
        <div className="space-y-2">
          <label htmlFor="name">FullName</label>
          <div className="flex items-center p-4 bg-gray-100  rounded-xl text-2xl">
            <HiOutlineUser />
            <input disabled type="text" id="name" className="w-full bg-transparent focus:outline-none" value={''} />
            <Modal>
              <Modal.Open opens="edit name">
                <FaRegEdit className="text-blue-400" />
              </Modal.Open>
              <Modal.Window name="edit name">
                <div className="p-4 space-y-4">
                  <h1 className="text-2xl"> First Name and Last Name</h1>
                  <div>
                    <label htmlFor="fname">First Name</label>
                    <input disabled type="text" id="fname" className="w-full p-4 bg-gray-100 focus:outline-none" value={''} />
                  </div>
                  <div>
                    <label htmlFor="lname">Last Name</label>
                    <input disabled type="text" id="lname" className="w-full p-4 bg-gray-100 focus:outline-none" value={''} />
                  </div>
                  <div>
                    <button className="bg-blue-500 text-white rounded-lg p-2 ml-auto mr-0 block">Save</button>
                  </div>
                </div>
              </Modal.Window>
            </Modal>
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email">E-mail Address</label>
          <div className="flex items-center p-4 bg-gray-100  rounded-xl text-2xl">
            <MdAttachEmail />
            <input type="email" id="email" className="w-full bg-transparent focus:outline-none" value={''} />
            <Modal>
              <Modal.Open opens="edit email">
                <FaRegEdit className="text-blue-400" />
              </Modal.Open>
              <Modal.Window name="edit email">
                <div className="p-4 space-y-4">
                  <h1 className="text-2xl"> Edit Email Address</h1>
                  <div className="flex items-center p-4 bg-gray-100  rounded-xl text-2xl">
                    <MdAttachEmail />
                    <input type="email" id="email" className="w-full bg-transparent focus:outline-none" value={''} />
                  </div>
                  <div>
                    <button className="bg-blue-500 text-white rounded-lg p-2 ml-auto mr-0 block">Save</button>
                  </div>
                </div>
              </Modal.Window>
            </Modal>
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="phone">Phone Number</label>
          <div className="flex items-center p-4 bg-gray-100  rounded-xl text-2xl">
            <FiPhone />
            <input disabled type="tel" id="phone" className="w-full bg-transparent focus:outline-none" value={''} />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="password">Password</label>
          <div className="flex items-center p-4 bg-gray-100  rounded-xl text-2xl">
            <GrKey />
            <input disabled type="password" id="password" className="w-full bg-transparent focus:outline-none" value={''} />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="address">Address</label>
          <div className="flex items-center p-4 bg-gray-100  rounded-xl text-2xl">
            <GrLocation />
            <input disabled type="text" id="address" className="w-full bg-transparent focus:outline-none" value={''} />
            <Modal>
              <Modal.Open opens="edit address">
                <FaRegEdit className="text-blue-400" />
              </Modal.Open>
              <Modal.Window name="edit address">
                <div className="p-4 space-y-4">
                  <h1 className="text-2xl"> Edit Address</h1>
                  <div className="flex items-center p-4 bg-gray-100  rounded-xl text-2xl">
                    <GrLocation />
                    <input type="text" id="address" className="w-full bg-transparent focus:outline-none" value={''} />
                  </div>
                  <div>
                    <button className="bg-blue-500 text-white rounded-lg p-2 ml-auto mr-0 block">Save</button>
                  </div>
                </div>
              </Modal.Window>
            </Modal>
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="postalCode">Postal Code</label>
          <div className="flex items-center p-4 bg-gray-100  rounded-xl text-2xl">
            <CiBarcode />
            <input disabled type="text" id="postalCode" className="w-full bg-transparent focus:outline-none" value={''} />
          </div>
        </div>
      </div>
    </>
  );
}
export default PersonalData;
