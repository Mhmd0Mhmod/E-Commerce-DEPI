import { BsHandbag } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineLogin } from "react-icons/hi";
import { IoLogOutOutline } from "react-icons/io5";
import Modal from "./Modal";
import ProfileMenuItem from "./ProfileMenuItem";
import LoginSignContainer from "./LoginSignContainer";

function ProfileMenu() {
  return (
    <div className="space-y-4">
      <ProfileMenuItem icon={<FaRegCircleUser />}>
        <p className="text-primary-main text-lg ">Jimmy Smith</p>
        <p className="text-sm">Jimmy.smith1996@gmail.com</p>
      </ProfileMenuItem>
      <ProfileMenuItem icon={<BsHandbag />}>Orders </ProfileMenuItem>
      <ProfileMenuItem icon={<HiOutlineLogin />}>log out </ProfileMenuItem>
      <Modal>
        <Modal.Open opens="loginForm">
          <ProfileMenuItem icon={<IoLogOutOutline />}>log in </ProfileMenuItem>
        </Modal.Open>
        <Modal.Window name="loginForm">
          <LoginSignContainer />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default ProfileMenu;
