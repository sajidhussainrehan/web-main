import React from "react";

interface HeadingAndParaProps {
  heading: string;
  para: string;
  headingClass: string;
  paraClass: string;
}
const HeadingAndPara: React.FC<HeadingAndParaProps> = ({
  heading,
  para,
  paraClass,
  headingClass,
}) => {
  return (
    <>
      <h2 className={`${headingClass}`}>{heading}</h2>
      <p className={`${paraClass}`}>{para}</p>
    </>
  );
};

export default HeadingAndPara;
