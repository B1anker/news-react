import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './app';
import reducers from './store/reducers';

const store = createStore(
   reducers, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

let rootElement = document.getElementById('root')

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	, document.querySelector('#app'));
