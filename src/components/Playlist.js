import React,{useState} from 'react';
import styles from '../styles/Playlist.module.css';


function Playlist({playlist,onRemoveFromPlaylist}){
    const [name, setName] = useState("");
    const handleNameChange = (e) =>{
        setName(e.target.value)
    }
    return (
        <div className={styles.playlistContainer}>
        <input type="text" value={name} onChange={handleNameChange} placeholder="Enter playlist name" className={styles.playlistNameInput}/>
        {playlist && playlist.length > 0 ? (
            playlist.map((item) => (
                <div key={item.id} className={styles.playlistItem}>
                    <div className={styles.songInfo}>
                        <img src={item.image} alt={item.name} className={styles.songImage} />
                        <div className={styles.songTitle}>{item.name}</div>
                        <div className={styles.songArtist}>{item.artist}</div>
                    </div>
                    <button 
                        className={styles.removeButton} 
                        onClick={() => onRemoveFromPlaylist(item)}
                    >
                        -
                    </button>
                </div>
            ))
        ) : (
            <p className={styles.emptyPlaylist}>Your playlist is empty</p>
        )}
        {playlist && playlist.length > 0 && (
            <button className={styles.saveButton}>SAVE TO SPOTIFY</button>
        )}
    </div>
    )
}

export default Playlist;