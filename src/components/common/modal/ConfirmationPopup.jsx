import React, { useState } from 'react';
import Modal from './Modal';

function ConfirmationPopup(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <button variant="primary" onClick={handleShow}>
          Launch demo modal
        </button>
  
       
            <Modal title="fff">
            Woohoo, you're reading this text in a modal!
            </Modal>
     
      </>
    );
}

export default ConfirmationPopup;