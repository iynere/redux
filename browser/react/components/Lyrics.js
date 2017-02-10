import React, {Component} from 'react';

export default function(props) {
	
	const text = props.text;
	const setArtist = props.setArtist;
	const artistQuery = props.artistQuery;
	const setSong = props.setSong;
	const songQuery = props.songQuery;
	const handleSubmit = props.handleSubmit;
	
	const artistChange = event => {
		setArtist(event.target.value);
	};
	
	const songChange = event => {
		setSong(event.target.value);
	};
	
	return (
		<div id="lyrics">
			<form onSubmit={handleSubmit}>
				<div>
					<h3>Lyrics</h3>
					<input className="form-control" type="text" value={artistQuery} placeholder="Artist" onChange={artistChange} />
					<input className="form-control" type="text" value={songQuery} placeholder="Song" onChange={songChange} />
				</div>
				<pre>{text || 'Search above!'}</pre>
				<button className="btn btn-success" type="submit">Search for Lyrics</button>
			</form>
		</div>
	);
}
