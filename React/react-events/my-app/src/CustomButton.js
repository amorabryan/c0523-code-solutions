export default function CustomButton({ text, color, onCustomClick }) {
  function handleClick() {
    onCustomClick(text);
  }
  return (
    <button onClick={handleClick} className={color}>
      {text}
    </button>
  );
}
