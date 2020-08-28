const axios = require('axios');

export function get(route) {
	var r = 'https://frozen-stream-89377.herokuapp.com/' + route
		return axios.get(r).then((resp) => {
			console.log("recieved");
			return resp.data;
		});
}

export function post(route, params, data) {
	var r = 'https://frozen-stream-89377.herokuapp.com/' + route;
	var obj = {}
	for (var i=0; i<params.length; i++) {
		obj[params[i]] = data[i];
	}
	return axios.post(r, obj).then((resp) => {
		console.log("recieved");
		return resp.data;
	});

}

