function sign(formData, myFetchOptions) {
	return fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=username&password=password&r_username=${formData.r_username}&r_confirmPassword=${formData.r_confirmPassword}`, myFetchOptions);
}

export {
	sign
}
