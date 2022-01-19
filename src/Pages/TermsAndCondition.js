import React, { Fragment } from "react";
import logo from "../assets/terms&condition.jpg";
import { Footer, Navbar } from "../Components";
import LazyLoad from "react-lazyload";
import { MetaTags } from "react-meta-tags";

const TermsAndCondition = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Terms & conditions</title>
      </MetaTags>
      <Navbar/>
      <main>
        <div className="relative">
          <LazyLoad once>
            <img
              src={logo}
              alt="terms&confitionpic"
              className="w-full bg-auto lg:h-80 md:h-60 sm:h-40  object-cover object-bottom "
            />
          </LazyLoad>
          <p className="uppercase text-white text-4xl  font-extrabold absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  ">
            <span>Terms & conditions</span>
          </p>
        </div>
        <div className="p-16">
          <div>
            <p className="text-base">
              Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
              velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
              ligula. Nulla quis lorem ut libero malesuada feugiat. Proin eget
              tortor risus. Curabitur aliquet quam id dui posuere blandit.
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Cras ultricies ligula
              sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in,
              elementum id enim.
            </p>
          </div>
          <div className="py-8">
            <span className="text-pink-600 text-xl font-semibold tracking-widest block">
              Title
            </span>
            <p className="text-base py-4">
              Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
              velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
              ligula. Nulla quis lorem ut libero malesuada feugiat. Proin eget
              tortor risus. Curabitur aliquet quam id dui posuere blandit.
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Cras ultricies ligula
              sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in,
              elementum id enim.
            </p>
            <p className="text-base py-4">
              Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
              velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
              ligula. Nulla quis lorem ut libero malesuada feugiat. Proin eget
              tortor risus. Curabitur aliquet quam id dui posuere blandit.
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Cras ultricies ligula
              sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in,
              elementum id enim.
            </p>
            <p className="text-base pt-4">
              Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
              velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
              ligula. Nulla quis lorem ut libero malesuada feugiat. Proin eget
              tortor risus. Curabitur aliquet quam id dui posuere blandit.
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Cras ultricies ligula
              sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in,
              elementum id enim.
            </p>
          </div>
          <div className="py-8">
            <span className="text-pink-600 text-xl font-semibold tracking-widest block">
              Title
            </span>
            <p className="text-base py-4">
              Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
              velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
              ligula. Nulla quis lorem ut libero malesuada feugiat. Proin eget
              tortor risus. Curabitur aliquet quam id dui posuere blandit.
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Cras ultricies ligula
              sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in,
              elementum id enim.
            </p>
            <p className="text-base pt-4">
              Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
              velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
              ligula. Nulla quis lorem ut libero malesuada feugiat. Proin eget
              tortor risus. Curabitur aliquet quam id dui posuere blandit.
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Cras ultricies ligula
              sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in,
              elementum id enim.
            </p>
          </div>
          <div className="py-8">
            <span className="text-pink-600 text-xl font-semibold tracking-widest block">
              Title
            </span>
            <p className="text-base py-4">
              Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
              velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
              ligula. Nulla quis lorem ut libero malesuada feugiat. Proin eget
              tortor risus. Curabitur aliquet quam id dui posuere blandit.
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Cras ultricies ligula
              sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in,
              elementum id enim.
            </p>
            <p className="text-base py-4">
              Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
              velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
              ligula. Nulla quis lorem ut libero malesuada feugiat. Proin eget
              tortor risus. Curabitur aliquet quam id dui posuere blandit.
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Cras ultricies ligula
              sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in,
              elementum id enim.
            </p>
            <p className="text-base pt-4">
              Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
              velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
              ligula. Nulla quis lorem ut libero malesuada feugiat. Proin eget
              tortor risus. Curabitur aliquet quam id dui posuere blandit.
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Cras ultricies ligula
              sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in,
              elementum id enim.
            </p>
          </div>
        </div>
      </main>
      <Footer/>
    </Fragment>
  );
};

export default TermsAndCondition;
