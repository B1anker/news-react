import {Message} from 'antd';

function sign(params, handleLogin, handleClose) {
	return fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=${params.action}&username=${params.formData.username}&password=${params.formData.password}&r_username=${params.formData.r_username}&r_confirmPassword=${params.formData.r_confirmPassword}`, {method: 'GET'}).then(res => res.json()).then((data) => {
		if (params.action === 'login') {
			handleLogin({
				isLogined: true,
				userNickName: data.NickUserName,
				userId: data.UserId
			});
			localStorage.setItem('userNickName', data.NickUserName);
			localStorage.setItem('userId', data.UserId);
		}
		Message.success("请求成功！");
		handleClose();;
	}).catch((err) => {
		console.log(err);
		Message.success("请求失败！");
	});
}

	export {sign}
