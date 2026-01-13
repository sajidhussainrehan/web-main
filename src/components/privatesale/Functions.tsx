interface TabColorsProps {
  value: number;
}

interface TabColorsResponse {
  bgColor: string;
  textColor: string;
  borderColor: string;
}

export const tabColors = ({ value }: TabColorsProps): TabColorsResponse => {
  let bgColor: string;
  let textColor: string;
  let borderColor: string;

  switch (value) {
    case 0:
      bgColor = "rgba(255,0,0,0.10)";
      borderColor = "rgba(255,0,0,0.50)";
      textColor = "#F00";
      break;
    case 1:
      bgColor = "rgba(217,125,36,0.10)";
      borderColor = "rgba(217,125,36,0.50)";
      textColor = "#D97D24";
      break;
    case 2:
      bgColor = "rgba(238,190,68,0.10)";
      borderColor = "rgba(238,190,68,0.50)";
      textColor = "#EEBE44";
      break;
    case 3:
      bgColor = "rgba(0,164,120,0.10)";
      borderColor = "rgba(0,164,120,0.50)";
      textColor = "#00A478";
      break;
    case 4:
      bgColor = "rgba(124,117,255,0.10)";
      borderColor = "rgba(124,117,255,0.50)";
      textColor = "#7C75FF";
      break;
    default:
      bgColor = "#D5D1EA";
      textColor = "#D5D1EA";
      borderColor = "#D5D1EA";
  }

  return { bgColor, textColor, borderColor };
};
