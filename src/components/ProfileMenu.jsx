import { FaRegCircleUser } from "react-icons/fa6";
import ProfileMenuItem from "./ProfileMenuItem";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineLogin } from "react-icons/hi";

function ProfileMenu() {
  return (
    <div className="space-y-6">
      <ProfileMenuItem icon={<FaRegCircleUser />}>
        <p className="text-primary-main">Jimmy Smith</p>
        <p className="text-sm">Jimmy.smith1996@gmail.com</p>
      </ProfileMenuItem>
      <ProfileMenuItem icon={<BsHandbag />}>Orders </ProfileMenuItem>
      <ProfileMenuItem icon={<HiOutlineLogin />}>log out </ProfileMenuItem>
    </div>
  );
}

export default ProfileMenu;
