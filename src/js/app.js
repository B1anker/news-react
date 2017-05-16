import { Router, Route, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import PcIndex from './components/pc/index';
import MobileIndex from './components/mobile/index';
import * as actions from './store/actions';

import '@/scss/tool.scss';


class App extends React.Component {
	update() {
		this.props.updateSign();
		console.log(this.props);
	}

	render() {
		const { updateSign } =  this.props;
		return (
			<div onClick={ this.update.bind(this) }>
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

App.propTypes = {
  hasLogin: React.PropTypes.bool.isRequired,
  updateSign: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    hasLogin: state.updateSign.hasLogin
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateSign: () => dispatch(actions.Has_Logined)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
