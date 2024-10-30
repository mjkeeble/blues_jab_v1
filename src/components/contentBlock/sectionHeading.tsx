import React from 'react'

type TProps = {
  text: string,
  textColor: string,
}

export const SectionHeading:React.FC<TProps> = ({text, textColor}) => {
  return (
    <h1 className={`${textColor} mb-12 ml-4 h-min font-fredericka text-4xl md:text-6xl`}>{text}</h1>
  );
}

export default SectionHeading
