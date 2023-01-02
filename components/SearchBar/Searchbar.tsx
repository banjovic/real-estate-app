import React from "react";
import styles from "../../styles/componentStyles/searchbar/searchbar.module.scss";
import SearchIcon from "../../assets/svg/searchIcon.svg";

type Props = React.ComponentProps<"input"> & {
  placeholder: string;
  showSearchIcon?: boolean;
  showMicIcon?: boolean;
  height?: string;
  backgroundColor?: string;
  borderColor?: string;
};

const Searchbar = ({
  placeholder,
  showSearchIcon,
  showMicIcon,
  height,
  backgroundColor,
  borderColor,
  ...rest
}: Props) => {
  return (
    <div
      style={{
        height: `${height ? height : "auto"}`,
        backgroundColor: `${backgroundColor ? backgroundColor : null}`,
        border: `${borderColor ? `1px solid ${borderColor}` : null}`,
      }}
      className={styles["container"]}
    >
      <span>
        <SearchIcon />
      </span>
      <input placeholder={placeholder} {...rest} />
    </div>
  );
};

export default Searchbar;
