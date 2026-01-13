import React from "react";

interface SelectButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  selcted?: boolean;
}

function SelectButton(props: SelectButtonProps) {
  const { onClick, children, selcted } = props;

  return (
    <div
      role="button"
      className={`${
        selcted
          ? "bg-[#D97D24]"
          : "border border-white/20 bg-transparent hover:bg-[#D97D24]/10"
      } grid min-h-[42px] w-full place-content-center px-0.5 py-1`}
    >
      <span>{children}</span>
    </div>
  );
}

export default SelectButton;
