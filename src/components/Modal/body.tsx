import { Fragment } from "react";
import OrcaIcon from "../../assets/icons/orca.png";
import ProfilePicture from "../../assets/images/profile.png";

import "./style.css";

const startYear = 2019;
const currentYear = new Date().getFullYear();

const orcaSize = "min-w-[80px]";
export const ModalBody = () => {
  return (
    <Fragment>
      <section
        className={
          "flex flex-col gap-10 text-xl items-center bg-emerald-100 overflow-auto overflow-x-hidden h-full border-l-black border-t-black border-2 p-2"
        }
      >
        <img
          src={ProfilePicture}
          width={150}
          alt="Breno Romeiro"
          className="flex items-center rounded-full mt-10"
        />
        <div className={" flex gap-2 items-center justify-center w-1/2"}>
          <img src={OrcaIcon} alt="" className={`${orcaSize} -scale-x-[1]`} />
          <h1 className="flex flex-col items-center text-4xl font-bold tracking-wider ">
            <span>Breno</span>
            <span>Romeiro</span>
          </h1>
          <img src={OrcaIcon} alt="" className={orcaSize} />
        </div>
        <div className="flex flex-col gap-4 px-4 w-full">
          <p className="first-letter:text-6xl first-letter:font-">
            Hi, I'm Breno! ๐
            <br />
            I'm a multilingual Front-end developer with{" "}
            <b>{currentYear - startYear} years</b> of proven experience in
            helping companies create and maintain amazing software.
            <br />
            <br />
            I'm passionate about learning and developing with a desire to apply
            skills on real world challenges.
          </p>
          <p className="py-2 font-bold">My current stack:</p>
          <ul className="list-inside">
            <li>๐งก HTML</li>
            <li>๐ CSS</li>
            <li>๐ Javascript | TypeScript</li>
            <li>โ๏ธ React</li>
            <li>๐จ Greensock/GSAP (animation)</li>
            <li>๐งช Cypress.io</li>
            <li>๐ Browser API's</li>
          </ul>
          <p className="py-2 font-bold">Skills:</p>
          <ul className="list-inside">
            <li>๐ฑMobile First</li>
            <li>๐User Experience</li>
            <li>๐โโ๏ธAgile</li>
          </ul>
          bsromeiro@gmail.com ๐ฝ๐ง๐๐ฃ๐ค
        </div>
      </section>
    </Fragment>
  );
};
