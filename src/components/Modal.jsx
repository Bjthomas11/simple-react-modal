import React, { useRef, useEffect, useCallback } from "react";
import { MdClose } from "react-icons/md";
import { useSpring, animated } from "react-spring";

const Modal = ({ isOpen, setIsOpen }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translate(0%)` : `translateY(-100%)`
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setIsOpen(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    },
    [setIsOpen, isOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);

    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <>
      {isOpen ? (
        <div className="modal-container" ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <div className="modal" isOpen={isOpen}>
              <img
                src="https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9vayUyMG0xfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60"
                alt="modal-img"
              />
              <div className="content">
                <h1>Test Headline</h1>
                <p>Blurb test</p>
                <button>Macbook!</button>
                <MdClose
                  className="close"
                  aria-label="close modal"
                  onClick={() => setIsOpen((prev) => !prev)}
                />
              </div>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
