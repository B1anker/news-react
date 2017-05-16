import {Form, Input, Message, Button} from 'antd';

import {sign} from '@/js/modules/http';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
	return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class SigninForm extends React.Component {

	componentDidMount() {
		this.props.form.validateFields();
		console.log(this.props);
	}

	handleSubmit(e) {
		e = e || window.event;
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				let formData = this.props.form.getFieldsValue();
				sign({action: 'login', formData}, this.props.handleLogin.bind(this.props.parent), this.props.handleClose.bind(this.props.parent));
			}
		});
	}

	render() {
		const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
		const usernameError = isFieldTouched('username') && getFieldError('username');
		const passwordError = isFieldTouched('password') && getFieldError('password');
		return (
			<Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
				<FormItem label="账号" validateStatus={usernameError
					? 'error'
					: ''} help={usernameError || ''}>
					{getFieldDecorator('username', {
						rules: [
							{
								required: true,
								message: '请输入账号!'
							}
						]
					})(<Input placeholder="请输入你的账号"/>)}
				</FormItem>
				<FormItem label="密码" validateStatus={passwordError
					? 'error'
					: ''} help={passwordError || ''}>
					{getFieldDecorator('password', {
						rules: [
							{
								required: true,
								message: '请输入你的密码！'
							}
						]
					})(<Input type="password" placeholder="请输入你的密码"/>)}
				</FormItem>
				<FormItem>
					<Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
						登录
					</Button>
				</FormItem>
			</Form>
		)
	}
}
export default SigninForm = Form.create({})(SigninForm);
