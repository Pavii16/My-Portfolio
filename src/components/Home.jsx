import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <div id="home" className="bg-[#FFFFFF]">
      <div className="max-w-[85%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-8 items-center  min-h-screen">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col items-center md:items-start justify-start space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            I’m <span className="text-[#6ea655]">Pavithra D</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold flex gap-2">
            <span className="text-[#6ea655]">I’m a</span>
            <Typewriter
              options={{
                strings: [
                  "Network Engineer",
                  "Java Devloper",
                  "Web Developer",
                  "Software Developer"
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>
          {/* About Me */}
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            A passionate and detail-oriented networking enthusiast.
I enjoy configuring and understanding systems that keep the world connected.
Always eager to learn, troubleshoot, and grow through real-time challenges.
          </p>

          {/* Contact Information */}
          <div className=" flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-6 text-lg md:text-xl font-semibold ">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#6ea655]" size={20} />
              <span>Tiruppur</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#6ea655]" size={20} />
              <span>7397343622</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#6ea655]" size={20} />
              <span>pavithradharmalingam3@gmail.com</span>
            </div>
          </div>
          {/* Button */}
          <div className="bg-[#6ea655] px-5 py-2 rounded-2xl font-bold ">
            <a href="https://drive.google.com/file/d/16QhhWF0TOnc9sb4vc-wpLj8hGbfM2zhS/view?usp=sharing">Download CV</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="order-1 lg:order-2 flex justify-end items-center">
          <img
            className="w-[70%] rounded-[50px]"
            src="/profile img.jpg"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
