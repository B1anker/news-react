import {
	Tabs,
	Form,
	Input,
	Message,
	Button,
	Modal
} from 'antd';
import { connect } from 'react-redux'
import SigninForm from './signin-form';
import SignupForm from './signup-form';

const TabPane = Tabs.TabPane;

export default class SignModal extends React.Component {
	constructor() {
		super();
		this.state = {
			action: 'login'
		};
	}

	handleClose() {
		this.props.setModalVisible.call(this.props.parent, false);
	}

	changeWay(key) {
		this.setState({
			action: key === 1
				? 'login'
				: 'register'
		});
	}

	render() {
		return (
			<Modal title="用户中心" wrapClassName="vertical-center" visible={this.props.modalVisible} onCancel={this.handleClose.bind(this)} onOk={this.handleClose.bind(this)} okText="关闭">
				<Tabs type="card" onChange={this.changeWay.bind(this)}>
					<TabPane tab="登录" key="1">
						<SigninForm
							parent={this.props.parent}
							handleLogin={this.props.handleLogin}
							handleClose={this.handleClose}/>
					</TabPane>
				</Tabs>
			</Modal>
		)
	}
}
