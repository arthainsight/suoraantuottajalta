export function SearchBar() {
  return (
    <form className="search" action="/hakemisto">
      <input
        aria-label="Hae kohteita"
        name="q"
        placeholder="Hae kuntaa, maakuntaa, tuotetta tai myyntitapaa"
      />
      <button type="submit">Hae</button>
    </form>
  );
}
