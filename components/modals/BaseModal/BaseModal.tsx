import React from "react";
import styles from "./baseModal.module.scss";

import CloseIcon from "../../../assets/svg/closeIcon.svg";

type ModalProps = {
  children?: React.ReactNode;
  headerText: string;
  headerColor?: string;
  HeaderIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  CancelIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  showHeaderBorder?: boolean;
  headerPosition?: "center" | "left";
  showModal: boolean;
  backgroundColor?: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const BaseModal = ({
  children,
  showModal,
  setShowModal,
  headerText,
  headerColor,
  headerPosition,
  backgroundColor,
  HeaderIcon,
  CancelIcon,
  showHeaderBorder,
}: ModalProps) => {
  return (
    <>
      {showModal && (
        <div className={`${styles["modal"]}`}>
          <div
            style={{
              backgroundColor: `${backgroundColor ? backgroundColor : ""}`,
            }}
            className={styles["modal__contentWrap"]}
          >
            <div
              className={`${showHeaderBorder ? styles["show-border"] : ""} ${
                styles["modal__header"]
              }`}
            >
              <div className={`${styles["header-left"]}`}>
                {HeaderIcon && (
                  <span>
                    <HeaderIcon />
                  </span>
                )}
                <h4
                  style={{
                    color: `${headerColor ? headerColor : ""}`,
                    textAlign: `${headerPosition ? headerPosition : "left"}`,
                  }}
                >
                  {headerText}
                </h4>
              </div>

              {CancelIcon && (
                <span onClick={() => setShowModal(false)}>
                  <CloseIcon />
                </span>
              )}
            </div>
            <div className={styles["modal__body"]}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default BaseModal;
