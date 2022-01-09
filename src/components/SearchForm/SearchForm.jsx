export default function SearchForm({ query, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        type="text"
        value={query}
      />
      <button type="submit" >
        Search
      </button>
    </form>
  );
}