export const renderText=(name,label,text)=>(
    <div className='text-group '>
    <label >{label}</label>
    <p>{text}</p>
    </div>
  )

export const renderButton=(name,label,className)=>(
    <button className={`btn ${className}`} name={name}>{label}</button>
  )

export function handleModal(modalContent){
  let modal={...this.state.modal}
  if(modalContent){
      modal["content"]=modalContent
  }
  modal['show']=!modal['show']
  this.setState({modal})
}