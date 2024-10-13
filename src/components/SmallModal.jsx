import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

function OverLay({ children }) {
  return (
    <div className=" fixed top-[104px] left-0 h-full w-full bg-black bg-opacity-60 flex justify-end ">
      {children}
    </div>
  );
}
function SmallModalContainer({ children }) {
  return <div className="bg-white h-fit   p-6 ">{children}</div>;
}
const SmallModalContext = createContext();

function SmallModal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");

  const open = setOpenName;
  return (
    <SmallModalContext.Provider value={{ close, open, openName }}>
      {children}
    </SmallModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { open } = useContext(SmallModalContext);
  return cloneElement(children, {
    onClick: () => {
      open(opens);
    },
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(SmallModalContext);

  if (openName !== name) return null;
  return createPortal(
    <OverLay>
      <SmallModalContainer>
        <div className="flex justify-end mb-3">
          <IoMdClose className="text-3xl cursor-pointer" onClick={close} />
        </div>
        {children}
      </SmallModalContainer>
    </OverLay>,
    document.body
  );
}

SmallModal.Open = Open;
SmallModal.Window = Window;
export default SmallModal;
