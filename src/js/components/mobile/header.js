import SignModal from '../sign-modal';
import {Icon} from 'antd';

export default class MobileHeader extends React.Component {
	constructor() {
		super();
		this.state = {
			current: 'top',
			modalVisible: false,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userId: 0
		};
	}

	setModalVisible(isVisible) {
		this.setState({modalVisible: isVisible});
	}

	login() {
		this.setState({modalVisible: true});
	}

	render() {
		const userShow = this.state.hasLogined
			? <Link>
					<Icon type="inbox"/>
				</Link>
			: <Icon type="setting" onClick={this.login.bind(this)}/>
		return (
			<header class="mobile-header">
				<img src="./src/images/logo.png" alt="logo"/>
				<span>ReactNews</span>
				{userShow}
				<SignModal modalVisible={this.state.modalVisible} setModalVisible={this.setModalVisible} parent={this}></SignModal>
			</header>
		);
	}
}
