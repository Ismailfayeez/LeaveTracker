import React from 'react';

function Modal(props) {
    const {handleModal,show,data}=props
   
    return( show && data &&
       <div className='modal'>
        <div className='modal__content'>
            {data.title &&  <div className='modal__title'>
                <header>{data.title}</header>
                <div className="modal__close" onClick={handleModal}>+</div>
            </div>}
            {data.body &&<div className='modal__body'>
                {props.children}
            </div>}
            {data.footer &&
            <div className='modal__footer'>
                {data.footer}
            </div>}
        </div>
        
    </div>

    )
    
    
    
}

export default Modal;