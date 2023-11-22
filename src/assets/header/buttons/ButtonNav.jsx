function ButtonNav({buttonTitle, disabled}) {
    return(
        <>
            <button disabled={disabled}>{buttonTitle}</button>
        </>
    )
}

export default ButtonNav;