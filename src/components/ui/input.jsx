function Input({ type, className, name, title, label }){
    return (
        <>
        {/*<div id="email-container">
            <label htmlFor="email">E-mail</label>
            <input type="email" title='Digite seu E-mail de acesso'/>                        
        </div>*/}

        <div id={name+"-container"}>
            <label htmlFor={name}>{label}</label>
            <input className={className} type={type ? type : "text"} name={name} title={title}/>                        
        </div>
        </>
    )
}
export default Input