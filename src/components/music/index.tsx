import { Fade } from 'react-awesome-reveal';

export const Music = () => {
  return (
    <section id="music">
      <Fade cascade direction="up" delay={500} triggerOnce>
        <h1 className="md:text-6xlh-min m-2 pl-4 font-fredericka text-2xl text-bj-blue dark:text-bj-blue-light">
          Music
        </h1>
      </Fade>
      <p className="text-md mx-24 mt-3 text-bj-blue-dark dark:text-bj-white md:text-3xl">Wir machen Musik!</p>
    </section>
  );
};
