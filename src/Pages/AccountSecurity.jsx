import { GrKey } from 'react-icons/gr';
import Modal from '../components/Modal';
import { FaRegEdit } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

function AccountSecurity() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl">Security Settings</h1>
      <p className="text-gray-400">Change Password and Phone Number </p>
      <div>
        <div className="space-y-2">
          <label htmlFor="password">Password</label>
          <div className="flex items-center p-4 bg-gray-100  rounded-xl text-2xl">
            <GrKey />
            <input disabled type="password" id="password" className="w-full bg-transparent focus:outline-none" value={''} />
            <Modal>
              <Modal.Open opens="edit password">
                <FaRegEdit className="text-blue-400" />
              </Modal.Open>
              <Modal.Window name="edit password">
                <div className="p-4 space-y-4">
                  <h1 className="text-2xl"> Edit Password</h1>
                  <div className="flex items-center p-4 bg-gray-100  rounded-xl text-2xl">
                    <GrKey />
                    <input type="password" id="password" className="w-full bg-transparent focus:outline-none" value={''} />
                  </div>
                  <div>
                    <button className="bg-blue-500 text-white rounded-lg p-2 ml-auto mr-0 block">Save</button>
                  </div>
                </div>
              </Modal.Window>
            </Modal>
          </div>
          <div className="space-y-2">
            <label htmlFor="phone">Phone Number</label>
            <div className="flex items-center p-4 bg-gray-100  rounded-xl text-2xl">
              <FiPhone />
              <input disabled type="tel" id="phone" className="w-full bg-transparent focus:outline-none" value={''} />
              <Modal>
                <Modal.Open opens="edit phone">
                  <FaRegEdit className="text-blue-400" />
                </Modal.Open>
                <Modal.Window name="edit phone">
                  <div className="p-4 space-y-4">
                    <h1 className="text-2xl"> Edit Phone Number</h1>
                    <div className="flex items-center p-4 bg-gray-100  rounded-xl text-2xl">
                      <FiPhone />
                      <input type="tel" id="phone" className="w-full bg-transparent focus:outline-none" value={''} />
                    </div>
                    <div>
                      <button className="bg-blue-500 text-white rounded-lg p-2 ml-auto mr-0 block">Save</button>
                    </div>
                  </div>
                </Modal.Window>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AccountSecurity;
