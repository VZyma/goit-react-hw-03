export default function SearchBox({ value, onFilter }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => onFilter(event.target.value)}
    />
  );
}