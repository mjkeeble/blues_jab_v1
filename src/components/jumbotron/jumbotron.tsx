import { Zoom } from 'react-awesome-reveal';
import { Logo } from '../logo';

export const Jumbotron = () => {
  return (
    <header
      id="oben"
      className="relative grid grid-cols-1 lg:grid-cols-2 bg-cover bg-no-repeat px-3 items-center h-screen"
    >
      <Zoom triggerOnce duration={1000}>
        <Logo />
      </Zoom>
      <Zoom triggerOnce delay={1000} duration={1000}>
        <div className="flex flex-col justify-center">
          <h1 className="text-bj-blue dark:text-bj-blue-light h-min font-fredericka text-5xl sm:text-6xl m-2 text-center">
            Boy Band
            <br />
            <span className="text-bj-blue dark:text-bj-blue-light h-min font-fredericka text-3xl sm:text-4xl m-2 mb-0">Of The</span>
            <br />
            <span className="text-bj-blue dark:text-bj-blue-light h-min font-fredericka text-8xl sm:text-9xl m-2 mt-0">Blues!</span>
          </h1>
        </div>
      </Zoom>
    </header>
  );
};
