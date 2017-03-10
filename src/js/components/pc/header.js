import {
	Row,
	Col,
	Menu,
	Icon,
	Input,
	Button
} from 'antd';

import SignModal from '../sign-modal';

const MenuItemGroup = Menu.ItemGroup;

export default class PcHeader extends React.Component {
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

	handleClickMenu(e) {
		if (e.key === 'register') {
			this.setState({current: 'register', modalVisible: true});
			return;
		}
		this.setState({current: e.key});
	}

	render() {
		const userShow = this.state.hasLogined
			? <Menu.Item key="logout" className="register">
					<Button type="primary" htmlType="button">{this.state.username}</Button>
					&nbsp;&nbsp;
					<Link target="_blank">
						<Button type="dashed" htmlType="button">个人中心</Button>
					</Link>
					&nbsp;&nbsp;
					<Button type="dashed" htmlType="button">退出</Button>
				</Menu.Item>
			: <Menu.Item key="register" className="register">
				<Icon type="appstore"></Icon>注册/登录
			</Menu.Item>

		return (
			<header>
				<Row>
					<Col span={2}></Col>
					<Col span={4}>
						<a href="/" className="logo">
							<img src="./src/images/logo.png" alt="logo"/>
							<span>ReactNews</span>
						</a>
					</Col>
					<Col span={16}>
						<Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClickMenu.bind(this)}>
							<Menu.Item key="top">
								<Icon type="appstore"></Icon>头条
							</Menu.Item>
							<Menu.Item key="social">
								<Icon type="appstore"></Icon>社会
							</Menu.Item>
							<Menu.Item key="inland">
								<Icon type="appstore"></Icon>国内
							</Menu.Item>
							<Menu.Item key="internation">
								<Icon type="appstore"></Icon>国际
							</Menu.Item>
							<Menu.Item key="entertainment">
								<Icon type="appstore"></Icon>娱乐
							</Menu.Item>
							<Menu.Item key="sports">
								<Icon type="appstore"></Icon>体育
							</Menu.Item>
							<Menu.Item key="technology">
								<Icon type="appstore"></Icon>科技
							</Menu.Item>
							<Menu.Item key="fashion">
								<Icon type="appstore"></Icon>时尚
							</Menu.Item>
							{userShow}
						</Menu>
						<SignModal modalVisible={this.state.modalVisible} setModalVisible={this.setModalVisible} parent={this}></SignModal>
					</Col>
					<Col span={2}></Col>
				</Row>
			</header>
		);
	}
}
