import s from './SearchForm.module.css'

export default function SearchForm({ query, onSubmit, onChange }) {
  return (
    <form 
    className={s.search}
    onSubmit={onSubmit}>
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