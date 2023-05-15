import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const InfoModal = ({ openInfoModal, setOpenInfoModal }) => {
  return (
    <div
      onClick={() => setOpenInfoModal(false)}
      className={
        openInfoModal
          ? "fixed top-[0] left-0 h-screen w-full flex justify-center items-center bg-modal2 text-center z-30 text-lg ease-in-out duration-700 animate-animateOpacity"
          : "fixed top-[0] hidden opacity-100 left-0 ease-in-out duration-700"
      }
    >
      <div className="w-full h-full flex justify-center items-center">
        <div
          onClick={(e) => e.stopPropagation()}
          className={
            openInfoModal
              ? "bg-white shadow-2xl w-[75%] max-w-2xl h-[50%] rounded-3xl flex flex-col animate-animateOpacity2"
              : "bg-white shadow-2xl w-[75%] max-w-2xl h-[50%] rounded-3xl flex flex-col"
          }
        >
          <div className="w-full flex justify-end p-2">
            <AiOutlineClose
              onClick={() => setOpenInfoModal(false)}
              size={20}
              title="Close Modal"
              className="hover:text-green-900 hover:cursor-pointer m-2"
            />
          </div>
          <div className="w-[100%] h-full flex flex-col justify-center gap-4 md:gap-12 text-left mb-12 overflow-y-scroll">
            <div className="flex flex-col gap-2 px-8">
              <div className="font-semibold">Rolex pricing policies</div>
              <div className="text-xs md:text-sm">
                Suggested retail price inclusive of V.A.T.
                <br />
                The suggested price can be modified at any time without notice.
              </div>
              <div className="text-xs md:text-sm">
                The sale of Rolex watches above the suggested retail price, as
                well as any tie-in sale, is not permitted. However, the
                distribution of Rolex watches worldwide is entrusted to
                independent Official Jewelers and Rolex is not authorized to
                intervene in the relationship between them and the end customer.
              </div>
            </div>
            <div className="flex flex-col gap-2 px-8">
              <div className="font-semibold">Models availability</div>
              <div className="text-xs md:text-sm">
                All Rolex watches are assembled by hand with the utmost care to
                ensure exceptional quality. Such high standards naturally
                restrict our production capacity and, at times, the demand for
                our watches outpaces this capacity.
              </div>
              <div className="text-xs md:text-sm">
                Official Rolex Jewelers can provide information on the
                availability of Rolex watches.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
