import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
function Copyright() {
  return (
    <div className="text-black text-lg flex-col flex gap-5 md:flex lg:flex lg:flex-row md:flex-row lg:justify-between lg:items-center p-10">
      <p>Copyright © 2024 Brandstore. Powered by Brandstore.</p>
      <div className="flex gap-5 items-center">
        <FaFacebookF />
        <FaInstagram />
        <FaYoutube />
        <FaTwitter />
        <FaTwitter />
      </div>
    </div>
  );
}

export default Copyright;
