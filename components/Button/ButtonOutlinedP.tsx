import React from "react";
import styles from "../../styles/componentStyles/button/button.module.scss";
import ButtonSpinner from "../ButtonSpinner/ButtonSpinner";

interface ButtonProps extends React.ComponentProps<"button"> {
  label: string;
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  backgroundColor?: string;
  loadingState?: boolean;
}

const ButtonOutlinedP = ({
  label,
  Icon,
  backgroundColor,
  loadingState,
  ...rest
}: ButtonProps) => {
  const BtnContent = () => {
    return (
      <>
        {Icon && (
          <span>
            {" "}
            <Icon />
          </span>
        )}
        <span>{label}</span>
      </>
    );
  };
  return (
    <button
      className={`${Icon ? "" : styles["no-icon"]} ${
        styles["buttonOutlinedPStyles"]
      }`}
      {...rest}
    >
      {loadingState ? <ButtonSpinner /> : <BtnContent />}
    </button>
  );
};

export default ButtonOutlinedP;
