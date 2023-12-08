import React, { memo } from "react";
import { Modal, Overlay } from "./style";

interface PopupProps {
  children: React.ReactElement;
}
const Popup: React.FC<PopupProps> = memo(({ children }) => {
  return (
    <Overlay>
      <Modal>
        {children}
      </Modal>
    </Overlay>
  );
});

export default Popup;
