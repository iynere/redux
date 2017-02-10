import React, {Component} from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
import {setLyric} from '../action-creators/lyrics';
import axios from 'axios';

export default class extends Component {
	constructor() {
		super();
		this.state = Object.assign({
			artistQuery: '',
			songQuery: ''
		}, store.getState());	
		
		this.handleArtistInput = this.handleArtistInput.bind(this);
		this.handleSongInput = this.handleSongInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	componentDidMount() {
		this.unsubscribe = store.subscribe(() => {
			this.setState(store.getState());
		});
	}
	
	componentWillUnmount() {
		this.unsubscribe();
	}
	
	handleArtistInput(artist) {
		this.setState({artistQuery: artist});
	}

	handleSongInput(song) {
		this.setState({songQuery: song});
	}
	
	handleSubmit(event) {
		event.preventDefault();
		
		const artistQuery = this.state.artistQuery;
		const songQuery = this.state.songQuery;
		
		if (artistQuery && songQuery) {
			axios.get(`/api/lyrics/${artistQuery}/${songQuery}`)
			.then(res => {
				console.log(res);
				const setLyricAction = setLyric(res.data.lyric);
				store.dispatch(setLyricAction);
			})
			.catch(console.error);
		}
	}	
	
	render() {
		return <Lyrics 
			text={this.state.text}
			setArtist={this.handleArtistInput}
			setSong={this.handleSongInput}
			artistQuery={this.state.artistQuery}
			songQuery={this.state.songQuery}
			handleSubmit={this.handleSubmit}
		/>;
	}
}
