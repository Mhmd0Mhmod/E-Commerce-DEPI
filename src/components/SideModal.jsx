import { cloneElement, createContext, useContext, useState } from 'react';
import Logo from './Logo';
import { IoMdClose } from 'react-icons/io';
import { createPortal } from 'react-dom';

function OverLay({ children, isOpen }) {
  return <div className={` ${!isOpen && 'hidden'} fixed  top-0 left-0 h-full w-full bg-black bg-opacity-60 md:hidden `}>{children}</div>;
}

function SideContainer({ children }) {
  return <div className="bg-white h-full w-3/4 py-4 px-6">{children}</div>;
}

const SideModalContext = createContext();

function SideModal({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const open = () => setIsModalOpen(true);
  const close = () => setIsModalOpen(false);
  return <SideModalContext.Provider value={{ isModalOpen, open, close }}>{children}</SideModalContext.Provider>;
}

function Open({ children }) {
  const { open } = useContext(SideModalContext);

  return cloneElement(children, { onClick: open });
}
function Window({ children }) {
  const { isModalOpen, close } = useContext(SideModalContext);

  return createPortal(
    <OverLay isOpen={isModalOpen}>
      <SideContainer>
        <div className="flex items-center justify-between">
          <Logo />
          <IoMdClose className="text-3xl cursor-pointer" onClick={close} />
        </div>
        {children}
      </SideContainer>
    </OverLay>,
    document.body
  );
}

SideModal.Open = Open;
SideModal.Window = Window;
export default SideModal;
