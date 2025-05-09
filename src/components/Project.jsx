const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#6ea655]">
          🧩Projects
        </h1>

        {/* Project 1 and 2 in one row */}
        <div className="flex flex-col md:flex-col gap-10">
          {/* Plate For All Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#6ea655] font-extrabold text-[32px] mb-4">
              🍽️ Plate For All
            </h1>
            <p className="text-lg text-gray-700 mb-4">
             A social good platform built with TypeScript, React, Vite, and Supabase 
             that connects food donors with people in need. 
             Designed to reduce food waste and bridge the gap between surplus and scarcity.
            </p>
            <a
              href="https://github.com/Pavii16/PLATE-FOR-ALL-Mini-Project-.git"
              className="text-[#6ea655] font-bold text-lg hover:underline"
            >
            Source Code
            </a>
          </div>

          {/* PGLife Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#6ea655] font-extrabold text-[32px] mb-4">
              🏠 PGLife
            </h1>
            <p className="text-lg text-gray-700 mb-4">
             A responsive web app using HTML, CSS, and JavaScript that helps users find
             nearby PGs, hostels, and hotels in metro cities like Delhi, Mumbai, and Bangalore. 
             Ideal for students and professionals relocating to big cities.
            </p>
            <a
              href="https://github.com/Pavii16/pglife.git"
              className="text-[#6ea655] text-center font-bold text-lg hover:underline"
            >
              Source Code
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-col gap-10">
        </div>

        {/* Project 3 and 4 in one row */}
        <div className="flex flex-col md:flex-col gap-10 mt-10">
          {/* Library Management System Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#6ea655] font-extrabold text-[32px] mb-4">
              📚 Library Management System
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            A robust backend solution built with Java, Spring Boot, Spring Data JPA, and MySQL
             for managing books, users, and transactions. 
            Enables efficient borrowing, returning, and tracking of library resources.
            </p>
            <a
              href="https://github.com/Pavii16/Library-Management-System.git"
              className="text-[#6ea655] font-bold text-lg hover:underline"
            >
              Source Code 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
