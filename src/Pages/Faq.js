import React, { Fragment } from "react";
import LazyLoad from "react-lazyload";
import { Footer, Navbar } from "../Components";
import logo from "../assets/terms&condition.jpg";
import MyAccordian from "../Components/MyAccordian";

const data = [
  {
    id: 1,
    que: "Do you guarantee your services?",
    ans: "YES! Our unconditional guarantee is that you receive the best service ever, or it’s free.",
  },
  {
    id: 2,
    que: "How do I schedule an appointment?",
    ans: "You can schedule your appointment by phone, in person or online. Reservations for your appointment are held with a credit card or gift certificate.",
  },
  {
    id: 3,
    que: "How do I choose the right treatments and products?",
    ans: "We offer complimentary consultations, and can make recommendations to fit your wants and needs. Whether you are looking for a skin care product line to use at home, or have specific needs for a salon or spa treatment, we are always available to answer your questions.",
  },
  {
    id: 4,
    que: "What methods of payment do you accept?",
    ans: "Cash, checks (local only), Visa, Mastercard, American Express, Discover, and I Am Salon Gift Cards. WE ARE NO LONGER A PARTICIPATING SALON FOR SPAFINDER OR SPA WISH AND WILL NO LONGER BE ACCEPTING GIFT CARDS FROM THEM. Sorry for any inconvenience",
  },
  {
    id: 5,
    que: "Do you guarantee your services?",
    ans: "YES! Our unconditional guarantee is that you receive the best service ever, or it’s free.",
  },
];
const Faq = () => {
  return (
    <Fragment>
      <Navbar />
      <main>
        <div className="relative">
          <LazyLoad once>
            <img
              src={logo}
              alt="terms&confitionpic"
              className="w-full bg-auto lg:h-80 md:h-60 sm:h-40  object-cover object-bottom "
            />
          </LazyLoad>
          <p className="uppercase text-white text-3xl  font-extrabold absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  ">
            <span>frequently Asked Questions</span>
          </p>
        </div>
        {/* ------------------accordian---------------------         */}
        <div className="w-full p-16 bg-white flex flex-col items-center justify-center">
          {data.map((item) => {
            return <MyAccordian {...item} key={item.id} />;
          })}
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Faq;
