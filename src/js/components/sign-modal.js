import {
	Tabs,
	Form,
	Input,
	Message,
	Button,
	CheckBox,
	Modal
} from 'antd';

import {sign} from '@/js/modules/http';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class SignModal extends React.Component{

	handleSubmit(e) {
		e = e || window.event;
		e.preventDefault();
		let formData = this.props.form.getFieldsValue();
		const myFetchOptions = {
			method: 'GET'
		};
		sign(formData, myFetchOptions).then((res) => {
			let data = res.json;
			this.setState({userNickName: data.userNickName, userId: data.userId});
			Message.success("请求成功！");
			this.handleClose();
		}).catch((err) => {
			Message.success("请求失败！");
		});
	}

	handleClose() {
		this.props.setModalVisible.call(this.props.parent, false);
	}

	render() {
		let {getFieldDecorator} = this.props.form;
		return (
			<Modal title="用户中心" wrapClassName="vertical-center" visible={this.props.modalVisible} onCancel={this.handleClose.bind(this)} onOk={this.handleClose.bind(this)} okText="关闭">
				<Tabs type="card">
					<TabPane tab="注册" key="2">
						<Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
							<FormItem label="账户">
								{getFieldDecorator('r_username', {
									rules: [
										{
											required: true,
											message: 'Please input your Username!'
										}
									]
								})(<Input placeholder="请输入你的账号"/>)}
							</FormItem>
							<FormItem label="密码">
								{getFieldDecorator('r_password', {
									rules: [
										{
											required: true,
											message: 'Please input your Password!'
										}
									]
								})(<Input type="password" placeholder="请输入你的密码"/>)}
							</FormItem>
							<FormItem label="确认密码">
								{getFieldDecorator('r_confirmPassword', {
									rules: [
										{
											required: true,
											message: 'Please confirm your Password!'
										}
									]
								})(<Input type="password" placeholder="请确认你的账号"/>)}
							</FormItem>
							<Button type="primary" htmlType="submit">注册</Button>
						</Form>
					</TabPane>
				</Tabs>
			</Modal>
		)
	}
}
export default SignModal = Form.create({})(SignModal);
