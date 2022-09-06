import styled from "styled-components";
import PropTypes from "prop-types";

const ModalWrapper = styled.div((props) => ({
   textAlign: "center",
   position: "fixed",
   left: "0",
   top: "0",
   right: "0",
   bottom: "0",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   background: props.background || "rgba(86, 86, 86, 0.6)",
}));

const ModalContent = styled.div((props) => ({
   width: props.width || "100%",
   maxWidth: props.maxWidth || "500px",
   border: props.border,
   borderRadius: props.borderRadius,
   overflow: props.overflow,
   margin: props.margin || "10px",
}));

const ModalHeader = styled.div((props) => ({
   p: {
      margin: "0",
   },
   img: {
      cursor: "pointer",
      width: "18px",
      position: "absolute",
      margin: "10px",
      right: 0,
      top: 0,
   },
   position: "relative",
   padding: props.padding || "20px",
   background: props.background || "rgb(243, 243, 243)",
   font: props.font || "600 1.6em none",
   color: props.color,
}));

const ModalBody = styled.div((props) => ({
   padding: props.padding || "30px",
   background: props.background || "rgb(243, 243, 243)",
   borderTop: props.borderTop || "1px solid rgb(209, 209, 209)",
   borderBottom: props.borderBottom || "1px solid rgb(209, 209, 209)",
   font: props.font || "400 1.2em none",
   color: props.color,
}));

const ModalFooter = styled.div((props) => ({
   padding: props.padding || "20px",
   background: props.background || "rgb(243, 243, 243)",
   button: {
      cursor: "pointer",
      padding: props.buttonPadding,
      background: props.buttonBackground,
      border: props.buttonBorder,
      borderRadius: props.buttonBorderRadius,
      font: props.buttonFont,
      color: props.buttonColor,
      margin: props.buttonMargin || "0 10px",
   },
}));

function Modal({
   show,
   onClose,
   title,
   message,
   closeButton,
   closeIcon,
   addNewButton,
   newButtonText,
   onClickNewButton,
   wrapperBackground,
   margin,
   width,
   maxWidth,
   border,
   borderRadius,
   overflow,
   headerBackground,
   headerPadding,
   headerFont,
   headertextColor,
   bodyBackground,
   bodyPadding,
   bodyFont,
   bodytextColor,
   bodyBorderTop,
   bodyBorderBottom,
   footerPadding,
   footerBackground,
   buttonPadding,
   buttonBackground,
   buttonBorder,
   buttonBorderRadius,
   buttonFont,
   buttonTextColor,
   buttonMargin,
}) {
   if (!show) {
      return null;
   }

   return (
      <ModalWrapper onClick={() => onClose()} background={wrapperBackground}>
         <ModalContent
            onClick={(e) => e.stopPropagation()}
            border={border}
            borderRadius={borderRadius}
            width={width}
            maxWidth={maxWidth}
            margin={margin}
            overflow={overflow}
         >
            <ModalHeader
               background={headerBackground}
               font={headerFont}
               color={headertextColor}
               padding={headerPadding}
               className="modal-header"
            >
               {!closeButton ? (
                  <img onClick={() => onClose()} src={closeIcon} alt="Close Icon" />
               ) : null}
               <p>{title || "Modal title"}</p>
            </ModalHeader>
            <ModalBody
               padding={bodyPadding}
               background={bodyBackground}
               borderTop={bodyBorderTop}
               borderBottom={bodyBorderBottom}
               font={bodyFont}
               color={bodytextColor}
            >
               {message || "Your message here!"}
            </ModalBody>
            {!closeButton && !addNewButton ? null : (
               <ModalFooter
                  padding={footerPadding}
                  background={footerBackground}
                  buttonPadding={buttonPadding}
                  buttonBackground={buttonBackground}
                  buttonBorder={buttonBorder}
                  buttonBorderRadius={buttonBorderRadius}
                  buttonFont={buttonFont}
                  buttonColor={buttonTextColor}
                  buttonMargin={buttonMargin}
               >
                  {closeButton ? <button onClick={() => onClose()}>Close</button> : null}
                  {addNewButton ? (
                     <button onClick={() => onClickNewButton()}>{newButtonText}</button>
                  ) : null}
               </ModalFooter>
            )}
         </ModalContent>
      </ModalWrapper>
   );
}

Modal.propTypes = {
   show: PropTypes.bool,
   onClose: PropTypes.func,
   title: PropTypes.string,
   message: PropTypes.string,
   closeButton: PropTypes.bool,
   closeIcon: PropTypes.string,
   addNewButton: PropTypes.bool,
   newButtonText: PropTypes.string,
   onClickNewButton: PropTypes.func,
   wrapperBackground: PropTypes.string,
   margin: PropTypes.string,
   width: PropTypes.string,
   maxWidth: PropTypes.string,
   border: PropTypes.string,
   borderRadius: PropTypes.string,
   overflow: PropTypes.string,
   headerBackground: PropTypes.string,
   headerPadding: PropTypes.string,
   headerFont: PropTypes.string,
   headertextColor: PropTypes.string,
   bodyBackground: PropTypes.string,
   bodyPadding: PropTypes.string,
   bodyFont: PropTypes.string,
   bodytextColor: PropTypes.string,
   bodyBorderTop: PropTypes.string,
   bodyBorderBottom: PropTypes.string,
   footerPadding: PropTypes.string,
   footerBackground: PropTypes.string,
   buttonPadding: PropTypes.string,
   buttonBackground: PropTypes.string,
   buttonBorder: PropTypes.string,
   buttonBorderRadius: PropTypes.string,
   buttonFont: PropTypes.string,
   buttonTextColor: PropTypes.string,
   buttonMargin: PropTypes.string,
};

export default Modal;
