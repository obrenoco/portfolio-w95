import { Fragment } from "react";
import OrcaIcon from "../../assets/icons/orca.png";

// const startYear = 2019;
// const currentYear = new Date().getFullYear();

export const ModalBody = () => {
  return (
    <Fragment>
      <section
        className={
          "bg-gray overflow-auto h-96 border-l-black border-t-black border-2 p-2"
        }
      >
        <div className={"h-96 gap-12 flex items-center justify-center"}>
          <img src={OrcaIcon} alt="" className="-scale-x-[1]" />
          <h1 className="flex flex-col items-center text-8xl font-bold tracking-wider ">
            <span>Breno</span>
            <span>Romeiro</span>
          </h1>
          <img src={OrcaIcon} alt="" />
        </div>
        {/* <p>
          I'm a multilingual Front-end developer with {currentYear - startYear}{" "}
          years of proven experience in helping companies create and maintain
          amazing software. Passionate about learning and developing with a
          desire to apply skills on real world challenges.
        </p>
        <p className="py-2 font-bold">My current stack:</p>
        <ul className="list-inside">
          <li>🧡 HTML</li>
          <li>💙 CSS</li>
          <li>💛 Javascript | TypeScript</li>
          <li>⚛️ React</li>
          <li>🎨 Greensock/GSAP (animation)</li>
          <li>🧪 Cypress.io</li>
          <li>🌎 Browser API's</li>
        </ul>
        <p className="py-2 font-bold">Skills:</p>
        <ul className="list-inside">
          <li>📱Mobile First</li>
          <li>🙋User Experience</li>
          <li>🏃‍♀️Agile</li>
        </ul>
        bsromeiro@gmail.com 𝘽𝙧𝙚𝙣𝙤 */}
      </section>
    </Fragment>
  );
};
