import React, { useState } from 'react';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>E-commerce one</h1>
      <nav style={styles.nav}>
        <a href="/" style={styles.link}>Home</a>
        <a href="/about" style={styles.link}>About</a>
        <a href="/contact" style={styles.link}>Contact</a>
        <a href="/signup" style={styles.link}>Sign Up</a>
      </nav>
      <form onSubmit={handleSearch} style={styles.searchForm}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        <button type="submit" style={styles.searchButton}>🔍</button>
      </form>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  title: {
    margin: 0
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  link: {
    color: '#fff',
    textDecoration: 'none'
  },
  searchForm: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '0.5rem'
  },
  searchInput: {
    padding: '0.4rem',
    borderRadius: '4px 0 0 4px',
    border: 'none',
    outline: 'none'
  },
  searchButton: {
    padding: '0.4rem 0.8rem',
    border: 'none',
    backgroundColor: '#555',
    color: '#fff',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
     fontSize: '1rem'
  }
};

export default Header;
