import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import Modal from "./Modal";
import SearchBar from "./SearchBar";
import SmallModal from "./SmallModal";
import ProfileMenu from "./ProfileMenu";
import CartContainer from "./CartContainer";

function IconBar() {
  return (
    <ul className="flex items-center space-x-2 sm:space-x-4 text-xl order-3">
      <Modal>
        <Modal.Open opens="search">
          <li className="cursor-pointer">
            <IoIosSearch className="text-2xl" />
          </li>
        </Modal.Open>
        <Modal.Window name="search">
          <div>
            <SearchBar />
          </div>
        </Modal.Window>
      </Modal>
      <SmallModal>
        <SmallModal.Open opens="cart">
          <li className="cursor-pointer">
            <RiShoppingCart2Line />
          </li>
        </SmallModal.Open>
        <SmallModal.Window name="cart">
          <CartContainer />
        </SmallModal.Window>
      </SmallModal>
      <SmallModal>
        <SmallModal.Open opens="profile menu">
          <li className="cursor-pointer">
            <FaRegUser />
          </li>
        </SmallModal.Open>
        <SmallModal.Window name="profile menu">
          <ProfileMenu />
        </SmallModal.Window>
      </SmallModal>
    </ul>
  );
}

export default IconBar;
