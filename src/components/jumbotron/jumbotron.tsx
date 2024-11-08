import { Zoom } from 'react-awesome-reveal';
import { Logo } from '../logo';

export const Jumbotron = () => {
  return (
    <header className="lg:py-auto min-h-2/3-screen relative grid grid-cols-1 items-center px-3 md:gap-y-20 lg:grid-cols-2">
      <Zoom triggerOnce duration={1000}>
        <Logo />
      </Zoom>
      <Zoom triggerOnce delay={1000} duration={1000}>
        <div className="flex flex-col justify-center">
          <h1 className="m-2 h-min text-center font-fredericka text-5xl text-bj-white sm:text-6xl">
            Boy Band
            <br />
            <span className="m-2 mb-0 h-min font-fredericka text-3xl text-bj-white sm:text-4xl">Of The</span>
            <br />
            <span className="m-2 mt-0 h-min font-fredericka text-8xl text-bj-white sm:text-9xl">Blues!</span>
          </h1>
        </div>
      </Zoom>
    </header>
  );
};
