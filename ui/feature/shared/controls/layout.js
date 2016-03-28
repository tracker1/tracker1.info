export default function render(props) {
  return <div>
    {props.children || '!!!NO CHILD COMPONENT!!!'}
  </div>  
}