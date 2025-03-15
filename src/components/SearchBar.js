import React, {useState} from 'react';
import SearchResults from './SearchResults'
import Playlist from './Playlist'
import styles from '../styles/SearchBar.module.css';

function SearchBar(){

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([])
    const [playlist, setPlaylist] = useState([])

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `https://spotify23.p.rapidapi.com/search/?q=${searchTerm}&type=tracks&offset=0&limit=10&numberOfTopResults=5`;
        const options = {
	        method: 'GET',
	        headers: {
		        'x-rapidapi-key': '63595a7b50mshdf72a9af10deb4ep157364jsne69bd04292a5',
		        'x-rapidapi-host': 'spotify23.p.rapidapi.com'
	        }
        };
    
    

        try {
	        const response =  await fetch(url, options);
	        const result = await response.text();
            const data = JSON.parse(result);
            const trackData = data.tracks.items
            for (let i = 0; i < trackData.length; i++) {
                if (trackData[i].data.name && trackData[i].data.artists.items[0].profile.name && trackData[i].data.uri) {
                    
                    let name = trackData[i].data.name
                    let artist = trackData[i].data.artists.items[0].profile.name
                    let uri = trackData[i].data.uri
                    let image = trackData[i].data.albumOfTrack.coverArt.sources[0].url
                    let data = { name:name, artist:artist, uri:uri, image:image}
                    console.log(data)
                    setSearchResults(prevResults => [...prevResults, data])
            }else{
                console.log('No name')
            }}
            
            
            
        }catch (error) {
	        console.error(error);
        }
    }
    const handleAddToPlaylist = (track)=>{
        console.log('track added to playlist', track)
        setPlaylist(prevPlaylist => [...prevPlaylist, track])
        setSearchResults(prevResults => prevResults.filter(result => result.name !== track.name))
    }
    const handleRemoveFromPlaylist = (track)=>{
        console.log('track removed from playlist', track)
        setPlaylist(prevPlaylist => prevPlaylist.filter(t => t !== track))
        setSearchResults(prevResults => [...prevResults, track])
    }

    return (
        <div className={styles.searchContainer}>
            <form className={styles.searchForm} onSubmit={handleSubmit}>
                <input 
                    className={styles.searchInput}
                    value={searchTerm} 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="Search for a song, album, or artist" 
                />
                <button className={styles.searchButton} type="submit">Search</button>
            </form>
            <div className={styles.resultsContainer}>
                <SearchResults results={searchResults} onAddToPlaylist={handleAddToPlaylist} />
                <Playlist playlist={playlist} onRemoveFromPlaylist={handleRemoveFromPlaylist}/>
            </div>
        </div>
    ) 
}
export default SearchBar;