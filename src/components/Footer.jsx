import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#6ea655] text-white py-6">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto text-center space-y-2">
        <p className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} Pavithra. All rights reserved.
        </p>
        <p className="text-sm md:text-base font-medium">
          Made with ❤️ by{" "}
          <a href="#" className="underline hover:text-[#ffffff]">
            Pavithra
          </a>
        </p>
        <div className="flex justify-center gap-4 mt-2">
        <a
            href="https://github.com/Pavii16"
            className="hover:text-[#6ea655]"
          >
            <FaGithub size={29} />
          </a>
          <a
            href="https://www.linkedin.com/in/pavithra-d-81b455256/"
            className="hover:text-[#6ea655]"
          >
            <FaLinkedin size={29} />
          </a>
          <a
            href="https://www.instagram.com/ival_pavi._?igsh=MTB1ZTVxNnZtcTZmcQ=="
            className="hover:text-[#6ea655]"
          >
            <FaInstagram size={29} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
