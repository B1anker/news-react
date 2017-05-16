import {combineReducers} from 'redux';
import {Has_Logined} from './actions'

function updateSign(state = {
	hasLogin: false
}, action) {
	switch (action.type) {
		case 'Has_Logined':
			return {hasLogin: true};
		default:
			return state;
	}
}

const reducers = combineReducers({updateSign});

export default reducers;
