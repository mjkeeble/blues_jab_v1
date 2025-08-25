import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';

type ButtonProps = {
  text: string;
  onClick: () => void;
  colors: {
    bg: string;
    text: string;
    bgHover: string;
  }
};

export const Button: React.FC<ButtonProps> = ({ text, onClick, colors}) => {
  const { t } = useTranslation();

  return (
    <Fade delay={500} triggerOnce>
      <button
        className={`${colors.bg} ${colors.text} hover:${colors.bgHover}  text-xs md:h-8 rounded-full py-1 px-3 hover:scale-y-110`}
        onClick={onClick}
      >
        {t(text)}
      </button>
    </Fade>
  );
};
