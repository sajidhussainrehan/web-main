/* eslint-disable @next/next/no-img-element */
import React from "react";

interface USDFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: string;
  label: string;
}

function USDField(props: USDFieldProps) {
  const { icon, label, ...rest } = props;

  return (
    <div className="flex flex-col gap-2">
      <b className="text-xs font-medium">{label}</b>
      <label className="flex cursor-text rounded-md bg-white/20">
        <input type="text" className="flex-grow p-2.5" {...rest} />
        <span className="block p-2.5" role="button">
          <img src={icon} alt="" />
        </span>
      </label>
    </div>
  );
}

export default USDField;
