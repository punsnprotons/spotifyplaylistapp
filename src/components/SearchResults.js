import React,{useState} from 'react';
import styles from '../styles/SearchResults.module.css';

function SearchResults({results, onAddToPlaylist}){
    console.log('These are the search results')
    console.log(results)
    const [playlist, setPlaylist] = useState([])

    

   
    return (
        <div className={styles.resultsContainer}>
        <h2 className={styles.resultsTitle}>Results</h2>
            {results && results.length > 0 ? (
                results.map((result) => (
                    <div key={result.id} className={styles.resultItem}>
                        <div className={styles.songInfo}>
                            <img className={styles.songImage} src={result.image} alt={result.name} />
                            <div className={styles.songTitle}>{result.name}</div>
                            <div className={styles.songArtist}>{result.artist}</div>
                        </div>
                        <button 
                            className={styles.addButton} 
                            onClick={() => onAddToPlaylist(result)}
                        >
                            +
                        </button>
                    </div>
                ))
            ) : (
                <p>No results found</p>
            )}
        </div>
    )
}
export default SearchResults;