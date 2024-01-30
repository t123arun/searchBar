function SearchResults({results}){
    console.log(results);
    return (
      <ul className="search-list">
        {
            results.map((result, id) => {
            return (
                <li className="search-item" key={id}>
                {result.name}
                </li>
            );
            })
        }
      </ul>
    );
}
export default SearchResults