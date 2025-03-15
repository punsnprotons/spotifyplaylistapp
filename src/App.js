//contains a header on top 
// contains a search bar 
// contains a search button 
// contains search results and each search result has a track name, artist name and a add to button playlist 
// contains a playlist 
// contains add to playlist button 

import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import styles from './styles/App.module.css';




function App() {

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Ja<span>mmm</span>ing
        </h1>
        <SearchBar />
       
      </div>
    </div>
  );
}

export default App;
