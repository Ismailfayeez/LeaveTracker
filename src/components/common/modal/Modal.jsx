import React from 'react';
import "./modal.css"
function Modal(props) {
    const {title,children,footer}=props
    return (
        <div className='modal-container'>
            <div className='modal-popup'>
                <div className='modal-header'>
                    <span>{title}</span>
                    <span className='modal-closebutton'>x</span>
                </div>
                <div className='modal-body'>
                    {children}
                </div>
                <div className='modal-footer'>
                    <button>Submit</button>

                </div>

            </div>


            
        </div>
    );
}

export default Modal;