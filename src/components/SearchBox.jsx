import React from "react";
import { IoMdSearch } from "react-icons/io";


import styles from "./SearchBox.module.css";
function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search Title..." value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
      <button onClick={searchHandler}>
        <IoMdSearch />
      </button>
    </div>
  );
}

export default SearchBox;
