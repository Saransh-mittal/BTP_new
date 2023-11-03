import { useState } from "react";

import { formatDate } from "../../utils/formatDate";
import Map from "../../components/Map/Map";
import Modal from "../../components/Modal/Modal";
import "./ModalMap.css";

const DoctorAbout = () => {
  const [showMap, setShowMap] = useState(false);

  const address = "Jawahar Chowk, Nagod, Madhya Pradesh";
  const location = { lat: 24.5701787, lng: 80.5799505 };

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={
          <button
            onClick={closeMapHandler}
            className="w-[120px] bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-3 py-2"
          >
            CLOSE
          </button>
        }
      >
        <div className="map-container">
          <Map center={location} zoom={16} />
        </div>
      </Modal>

      <div>
        <div>
          <h3 className="text-[25px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
            About of
            <span className="text-irisBlueColor font-bold text-[28px] leading-9">
              Akshat Goyal
            </span>
          </h3>
          <p className="text__para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eius
            assumenda corrupti at fugiat ipsum odio laudantium quisquam
            veritatis consectetur velit illo ullam animi necessitatibus vero
            voluptatum fuga consequuntur, aspernatur perspiciatis adipisci.
            Necessitatibus et non sapiente sit distinctio, repellat illo totam
            perspiciatis, inventore ex assumenda odit natus cumque saepe
            nostrum?
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-[25px] leading-[30px] text-headingColor font-semibold">
            Education
          </h3>

          <ul className="pt-4 md:p-5">
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
              <div>
                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                  {formatDate("09-07-2014")} - {formatDate("05-15-2016")}
                </span>
                <p className="text-[15px] leading-6 font-medium text-textColor">
                  PHD in Surgeon
                </p>
              </div>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                New Apollo Hospital, New Delhi.
              </p>
            </li>
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
              <div>
                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                  {formatDate("07-04-2010")} - {formatDate("08-07-2013")}
                </span>
                <p className="text-[15px] leading-6 font-medium text-textColor">
                  PHD in Surgeon
                </p>
              </div>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                New Apollo Hospital, New Delhi.
              </p>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="text-[25px] leading-[30px] text-headingColor font-semibold">
            Experience
          </h3>

          <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
            <li className="p-4 rounded bg-[#fff9ea]">
              <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formatDate("07-04-2010")} - {formatDate("08-13-2014")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Sr. Surgeon
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                New Apollo Hospital, New York.
              </p>
            </li>
            <li className="p-4 rounded bg-[#fff9ea]">
              <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formatDate("07-04-2010")} - {formatDate("08-13-2014")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Sr. Surgeon
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                New Apollo Hospital, New York.
              </p>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="text-[25px] leading-[30px] text-headingColor font-semibold">
            Clinic Address
          </h3>

          <ul className="pt-4 md:p-5">
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
              <div>
                <span className="text-irisBlueColor text-[23px] leading-6 font-semibold">
                  Jawahar Chowk
                </span>
                <p className="mt-2 text-[18px] leading-6 font-medium text-textColor">
                  Nagod, Madhya Pradesh
                </p>
              </div>
              <button
                onClick={openMapHandler}
                className="w-[170px] bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-3 py-2"
              >
                View On Map
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DoctorAbout;
