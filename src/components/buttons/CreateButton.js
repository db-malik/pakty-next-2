export const createButton = (buttonStyle) => {
  return ({ onClick, children }) => {
    const buttonClass = `button ${buttonStyle}`

    return (
      <button className={buttonClass} onClick={onClick}>
        {children}
      </button>
    )
  }
}
