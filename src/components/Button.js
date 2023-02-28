export default function Button(props) {
  return (
    <div>
      <button onClick={props.onClick}>{props.name}</button>
    </div>
  );
}
