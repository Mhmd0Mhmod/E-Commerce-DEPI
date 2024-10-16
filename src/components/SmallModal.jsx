import {
  cloneElement,
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

function OverLay({ children }) {
  return (
    <div className=" fixed top-0 sm:top-[104px] left-0 h-full w-full bg-black bg-opacity-60 sm:flex sm:justify-end ">
      {children}
    </div>
  );
}
const SmallModalContainer = forwardRef(function SmallModalContainer(
  props,
  ref
) {
  return (
    <div
      ref={ref}
      className="bg-white  p-4 rounded-b-lg mr-24 w-full h-full sm:h-fit sm:w-fit "
    >
      {props.children}
    </div>
  );
});
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
  const ref = useRef();
  useEffect(() => {
    function handleClose(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        // close();
      }
    }

    document.addEventListener("click", handleClose, true);
    return () => {
      document.removeEventListener("click", handleClose, true);
    };
  }, [close]);

  if (openName !== name) return null;
  return createPortal(
    <OverLay>
      <SmallModalContainer ref={ref}>
        <div className="flex justify-end mb-3">
          <IoMdClose className="text-2xl cursor-pointer" onClick={close} />
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
