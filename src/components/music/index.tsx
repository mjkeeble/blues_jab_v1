import { Fade } from 'react-awesome-reveal';

export const Music = () => {
  return (
    <section id="music">
      <Fade cascade direction="up" delay={500} triggerOnce>
        <h1 className="m-2 h-min pl-4 font-fredericka text-xl text-bj-blue dark:text-bj-blue-light md:text-5xl">
          Music
        </h1>
      </Fade>
      <p className="text-sm mx-24 mt-3 text-bj-blue-dark dark:text-bj-white md:text-2xl">Wir machen Musik!</p>
    </section>
  );
};
