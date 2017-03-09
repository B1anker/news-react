import { Router, Route, hashHistory } from 'react-router';
import MediaQuery from 'react-responsive';
import PcIndex from './components/pc/index';
import MobileIndex from './components/mobile/index';

export default class Root extends React.Component {
	render() {
		return (
			<div>
				<MediaQuery query='(min-device-width: 1224px)'>
					<PcIndex/>
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px)'>
					<MobileIndex/>
				</MediaQuery>
			</div>
		);
	};
}
ReactDOM.render(<Root/>, document.querySelector('#app'));
