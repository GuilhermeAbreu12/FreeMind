function Button({id, className, type, onClick, children}){
    return(
        <>
            <button id={id} className={className} type={type ? type : 'button'} onClick={onClick}>
                {children}
            </button>
        </>
    )
}
export default Button;