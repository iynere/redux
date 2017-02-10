import {SET_LYRIC} from '../constants';

export const setLyric = text => {
	return {
		type:  SET_LYRIC,
		lyric: text
	};
};
