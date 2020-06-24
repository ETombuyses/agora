import axios from 'axios';

let TOKEN;
let REFRESH_TOKEN;

export function getToken(email, pswd) {
	(async () => {
		const result = await axios({
			method: 'post',
			url: 'http://127.0.0.1:8000/api/login_check',
			data: {
				username: email,
				password: pswd
			}
		})

		TOKEN = result.data.token;
		REFRESH_TOKEN = result.data.refresh_token;

		localStorage.setItem('token', TOKEN)
		localStorage.setItem('refreshToken', REFRESH_TOKEN)
	})()
}

export function getUsers() {
	let userToken = localStorage.getItem('token');
	(async () => {
		const getUsers = await axios({
			url: 'http://127.0.0.1:8000/api/users',
			headers: {
				Authorization: `Bearer ${userToken}`
			}
		})
		
		console.log(getUsers)
	})()
}

export function getNewToken() {
	(async () => {
		//Get refresh token in local storage
		let refreshToken = localStorage.getItem('refreshToken');
		console.log('REFRESK_TOKEN', refreshToken)

		//Get new tokens
		const getNewToken = await axios({
			method: 'post',
			url: 'http://127.0.0.1:8000/api/token/refresh',
			data: {
				refresh_token: `${refreshToken}`
			}
		})
		
		//Stock new tokens in localstorage
		TOKEN = getNewToken.data.token;
		REFRESH_TOKEN = getNewToken.data.refresh_token;
		
		localStorage.setItem('token', TOKEN)
		localStorage.setItem('refreshToken', REFRESH_TOKEN)
				 
		console.log(getNewToken)
	})()
}