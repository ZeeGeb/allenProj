const axios = require('axios');

export function get(route) {
	var r = 'https://frozen-stream-89377.herokuapp.com/' + route
		return axios.get(r).then((resp) => {
			console.log("recieved");
			console.log(resp.data);
			return resp.data;
		});
}

export function post(route, params, data) {
	var r = 'https://frozen-stream-89377.herokuapp.com/' + route
		return axios.get(r, params, data).then((resp) => {
			console.log("recieved");
			console.log(resp.data);
			return resp.data;
		});

}

