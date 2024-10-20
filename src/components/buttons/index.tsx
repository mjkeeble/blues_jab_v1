import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';

type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  const { t } = useTranslation();

  return (
    <Fade delay={500} triggerOnce>
      <button
        className="bg-bj-blue-dark dark:bg-bj-blue-light text-bj-white dark:text-bj-blue-dark hover:bg-bj-blue-mid h-10 rounded-full px-4"
        onClick={onClick}
      >
        {t(text)}
      </button>
    </Fade>
  );
};
