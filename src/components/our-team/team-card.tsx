import React, { useState } from "react";

export const TeamCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModalOnOutsideClick = (e: any) => {
    if (e.target.id === "modal-overlay") {
      setIsOpen(false);
    }
  };

  return (
    <>
      <main className="flex flex-col gap-3" onClick={toggleModal}>
        {/* Card with image and hover effect */}
        <div className="relative group cursor-pointer">
          <figure className="min-h-[6rem] min-w-[6rem] md:min-h-[10rem] md:min-w-[10rem] bg-gray-500 rounded-2xl overflow-hidden">
            <img
              src="https://res.cloudinary.com/xenerr/image/upload/v1725977206/WhatsApp_Image_2024-09-09_at_22.30.19_1_ydnpkp.jpg"
              alt="Michael David"
              className="object-cover w-50 h-50"
            />
          </figure>
          {/* Overlay text */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
            <p className="text-white text-lg font-semibold">
              Michael David Ph.D
            </p>
          </div>
        </div>
        {/* Card details */}
        <div className="flex flex-col items-center text-center px-2">
          <p className="text-base font-semibold text-black">Michael David Ph.D</p>
          <p className="text-sm font-medium text-gray-600">Principal Partner</p>
        </div>
      </main>

      {/* Modal for showing more details */}
      {isOpen && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModalOnOutsideClick}
        >
          <div className="bg-white rounded-lg p-4 w-[85%] md:w-[50%] lg:w-[35%] relative">
            <figure className="mb-4">
              <img
                src="https://res.cloudinary.com/xenerr/image/upload/v1725977206/WhatsApp_Image_2024-09-09_at_22.30.19_1_ydnpkp.jpg"
                alt="Michael David"
                className="object-cover w-full rounded-lg"
              />
            </figure>
            <div className="flex flex-col text-center">
              <h2 className="text-xl font-semibold text-black mb-2">
                Michael David Ph.D
              </h2>
              <p className="text-sm font-medium text-gray-600 mb-4">Principal Partner</p>
              <p className="text-sm text-gray-700 px-2">
                Dr. Michael David, with over 40 years of professional experience, leads the company as CEO and Principal Partner at HOMICS International LLC. Holding a Ph.D. in Organizational Leadership from Regent University, an MBA in Executive Strategic Marketing from the University of Lagos, and advanced certifications in Agricultural Statistics from USDA Graduate School, Dr. Michael David is an expert in driving sustainable agribusiness growth.

                Dr. Michael David has held pivotal roles, including Senior Agricultural Specialist at the FAS/USDA Office of the U.S. Embassy, where he spearheaded U.S./Nigeria trade initiatives and developed critical economic reports. As the Country Representative for the U.S. Soybean Export Council, he promoted U.S. soybean exports and sponsored grassroot capacity building across Sub-Saharan Africa.

                At HOMICS International LLC, Dr. Michael David provides strategic consultancy in agribusiness, value chain analysis, Supply chain management, capacity building and addressing policy issues. His leadership and expertise ensure our commitment to optimizing operations, enhancing productivity, and fostering sustainable growth for our clients globally.              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};