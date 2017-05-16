import SignModal from '../sign-modal/index';
import {Icon} from 'antd';
import { Link } from 'react-router';

export default class MobileHeader extends React.Component {
	constructor() {
		super();
		this.state = {
			current: 'top',
			modalVisible: false,
			hasLogined: false,
			userNickName: '',
			userId: 0
		};
	}

	componentWillMount() {
		const userNickName = localStorage.getItem('userNickName');
		if(userNickName === '' || userNickName === undefined || userNickName === null){
			return ;
		}
			const userId = parseInt(localStorage.getItem('userNickName'));
			this.setState({userNickName, userId, hasLogined: true});
	}

	setModalVisible(isVisible) {
		this.setState({modalVisible: isVisible});
	}

	login() {
		this.setState({modalVisible: true});
	}

	handleLogin(params) {
		this.setState({hasLogined: params.isLogined,userNickName: params.userNickName, userId: params.userId});
	}

	render() {
		const userShow = this.state.hasLogined
			? <Link target="_blank">
					<Icon type="inbox"/>
				</Link>
			: <Icon type="setting" onClick={this.login.bind(this)}/>
		return (
			<header class="mobile-header">
				<img src="./src/images/logo.png" alt="logo"/>
				<span>ReactNews</span>
				{userShow}
				<SignModal
					modalVisible={this.state.modalVisible}
					handleLogin={this.handleLogin}
					setModalVisible={this.setModalVisible}
					parent={this}>
				</SignModal>
			</header>
		);
	}
}
