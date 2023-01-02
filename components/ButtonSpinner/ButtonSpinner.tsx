import styles from "../../styles/componentStyles/button/ButtonSpinner.module.scss";

const ButtonSpinner = ({
  spinnerColor,
  spinnerWidth,
}: {
  spinnerColor?: string;
  spinnerWidth?: string;
}) => {
  return (
    <div
      className={styles["spinner"]}
      style={{
        borderTopColor: `${spinnerColor ? spinnerColor : ""}`,
        width: `${spinnerWidth ? spinnerWidth : ""}`,
      }}
    ></div>
  );
};

export default ButtonSpinner;
