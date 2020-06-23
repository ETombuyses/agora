import axios from 'axios';

let TOKEN;

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
		console.log(TOKEN)
		localStorage.setItem('Token', TOKEN)
	})()
}

export function getUsers() {
	(async () => {
		let userToken = localStorage.getItem('Token');
		const getUsers = await axios({
			url: 'http://127.0.0.1:8000/api/users',
			headers: {
				Authorization: `Bearer ${userToken}`
			}
		})
		
		console.log(getUsers)
	})()
}