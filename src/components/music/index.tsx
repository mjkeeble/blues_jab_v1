import {Fade} from "react-awesome-reveal";

export const Music = () => {
  return (
    <section id="music" className="content-section">
      <Fade cascade direction="up" delay={500} triggerOnce>
        <h1 className="text-bj-blue dark:text-bj-blue-light text-2xl md:text-6xlh-min font-fredericka m-2 pl-4">
          Music
        </h1>
      </Fade>
      <p className="mt-3 mx-24 text-md md:text-3xl text-bj-blue-dark dark:text-bj-white">Wir machen Musik!</p>
    </section>
  );
};
