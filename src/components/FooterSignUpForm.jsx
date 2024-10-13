import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegUser,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function FooterSignUpForm() {
  return (
    <div className="text-white space-y-4 order-1 sm:order-3">
      <h4>Sign up for News and updates</h4>
      <div className="p-3 border border-white w-fit rounded-lg flex gap-2 items-center group-focus:border-red-400">
        <FaRegUser className="text-xl" />

        <input
          className="bg-transparent focus:outline-none group"
          placeholder="E-mail Address"
        />
      </div>
      <ul className="flex text-xl space-x-4">
        <li className="cursor-pointer">
          <FaInstagram />
        </li>
        <li className="cursor-pointer">
          <FaFacebookF />
        </li>
        <li className="cursor-pointer">
          <FaXTwitter />
        </li>
        <li className="cursor-pointer">
          <FaLinkedinIn />
        </li>
      </ul>
    </div>
  );
}

export default FooterSignUpForm;
