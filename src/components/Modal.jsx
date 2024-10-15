import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

function OverLay({ children }) {
  return (
    <div className=" fixed top-0 left-0 h-full w-full bg-black bg-opacity-60 sm:flex sm:justify-center sm:items-center">
      {children}
    </div>
  );
}
function ModalContainer({ children }) {
  return (
    <div className="bg-white rounded-lg px-12 py-8 w-full h-full sm:h-fit sm:w-3/6 ">
      {children}
    </div>
  );
}
const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const closeModal = () => setOpenName("");

  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ closeModal, open, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => {
      open(opens);
    },
  });
}

function Window({ children, name }) {
  const { openName, closeModal } = useContext(ModalContext);

  if (openName !== name) return null;
  return createPortal(
    <OverLay>
      <ModalContainer>
        <div className="flex justify-end mb-3">
          <IoMdClose className="text-3xl cursor-pointer" onClick={closeModal} />
        </div>
        {children}
      </ModalContainer>
    </OverLay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
