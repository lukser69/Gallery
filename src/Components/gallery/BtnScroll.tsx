export function BtnScroll(props: any) {
  return(
    <button 
    className="btnScroll"
    onClick={props.onClick}
    >
      {props.data}
    </button>
  )
}