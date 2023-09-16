import React from "react";
import Navbar from "../components/Navbar";
import { AiFillPhone, AiFillMessage } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { PHARMACIES_DATA } from "../data/pharmacies";

const PharmacyProfile = () => {
  const { pharmacy } = useParams();

  const pharmacyData = PHARMACIES_DATA.filter(
    (pharmacyItem) => pharmacyItem.slug === pharmacy
  )[0];

  return (
    <div>
      <Navbar />
      <div className="container min-h-[calc(100vh-120px)] flex flex-col gap-8 lg:flex-row py-8">
        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-primary rounded-lg p-4 text-white overflow-hidden flex flex-col gap-4 justify-center w-full h-full items-center">
            <img
              src={pharmacyData.image}
              alt={pharmacyData.name}
              className="w-40 h-40 object-contain"
            />
            <p className="p">{pharmacyData.name}</p>
            <div className="flex gap-2 items-center border-white border-2 py-1 px-2 rounded-lg">
              <img src="/assets/star.svg" alt="" />
              <span>{pharmacyData.rating}</span>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <AiFillPhone className="text-4xl text-primary bg-white p-2 rounded-full" />
                <span>+20 111 111 1111</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <AiFillMessage className="text-4xl text-primary bg-white p-2 rounded-full" />
                <span>Chat with us</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="p">
              Pharmacy Reviews <span className="text-primary">(4)</span>
            </h2>
            <ul className="flex flex-col gap-2 overflow-y-scroll max-h-[50vh] pr-4">
              <li className="bg-primary p-4 rounded-lg text-white">
                <div className="flex justify-between items-center">
                  <h3 className="h3">Amr Mustafa</h3>
                  <div className="flex gap-2 items-center">
                    <img src="/assets/star.svg" alt="" />
                    <span>4.3</span>
                  </div>
                </div>
                <span className="text-sm lg:text-lg">
                  Using this online pharmacy is so easy. I can quickly find what
                  I need, order, and have it delivered right to my door.
                </span>
              </li>
              <li className="bg-primary p-4 rounded-lg text-white">
                <div className="flex justify-between items-center">
                  <h3 className="h3">Nada Mustafa</h3>
                  <div className="flex gap-2 items-center">
                    <img src="/assets/star.svg" alt="" />
                    <span>4.7</span>
                  </div>
                </div>
                <span className="text-sm lg:text-lg">
                  I have been a loyal customer of this pharmacy for years, and I
                  couldn't be happier with their service. The staff is always
                  friendly and knowledgeable
                </span>
              </li>
              <li className="bg-primary p-4 rounded-lg text-white">
                <div className="flex justify-between items-center">
                  <h3 className="h3">Amr Mustafa</h3>
                  <div className="flex gap-2 items-center">
                    <img src="/assets/star.svg" alt="" />
                    <span>5.0</span>
                  </div>
                </div>
                <span className="text-sm lg:text-lg">
                  This pharmacy is a lifesaver! I needed a hard-to-find
                  medication, and they went out of their way to source it for
                  me.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54695.31684266545!2d31.4240395!3d31.0413665!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79dd0021c7a9d%3A0x3c71c635f4d3deb9!2z2LXZitiv2YTZitipINin2YTYt9ix2LTZiNio2Yk!5e0!3m2!1sar!2seg!4v1694646454633!5m2!1sar!2seg"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PharmacyProfile;
