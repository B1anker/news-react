import {
	Row,
	Col,
	Menu,
	Icon,
	Tabs,
	Form,
	Input,
	Message,
	Button,
	CheckBox,
	Modal
} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class PcHeader extends React.Component {
	constructor() {
		super();
		this.state = {
			current: 'top',
			modalVisible: false,
			action: 'login',
			hasLogined: false,
			username: '',
			userId: 0
		};
	}

	setModalVisible(isVisible) {
		this.setState({modalVisible: isVisible});
	}

	handleClickMenu(e) {
		if (e.key === 'register') {
			this.setState({current: 'register'});
			this.setState({modalVisible: true});
			return;
		}
		this.setState({current: e.key});
	}

	handleSubmit(e) {
		console.log(fetch);
	}

	render() {
		let {getFieldDecorator} = this.props.form;
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
						<Modal title="用户中心" wrapClassName="vertical-center" visible={this.state.modalVisible} onCancel={() => this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText="关闭">
							<Tabs type="card">
								<TabPane tab="注册" key="2">
									<Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
										<FormItem label="账户">
											<Input placeholder="请输入你的账号" {...getFieldDecorator('r_username')}/>
										</FormItem>
										<FormItem label="密码">
											<Input type="password" placeholder="请输入你的密码" {...getFieldDecorator('r_password')}/>
										</FormItem>
										<FormItem label="确认密码">
											<Input type="password" placeholder="请确认你的账号" {...getFieldDecorator('r_confirm_password')}/>
										</FormItem>
										<Button type="primary" htmlType="submit">注册</Button>
									</Form>
								</TabPane>
							</Tabs>
						</Modal>
					</Col>
					<Col span={2}></Col>
				</Row>
			</header>
		);
	}
}

export default PcHeader = Form.create()(PcHeader);
