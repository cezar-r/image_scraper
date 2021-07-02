import pkg from 'pexels';
const { createClient } = pkg;
import { createRequire } from 'module';

const apiToken = '563492ad6f91700001000001ec6b058435c3428d847f75196f63d8a7'
const client = createClient(apiToken);
const require = createRequire(import.meta.url);

let i = 0
let page_n = 1

while (i < 1000) {

	const query = 'crosswalk';

	let json_response = function(query) {
		return client.photos.search({ query, per_page: 80, page: page_n }).then(photos => {return photos})
	}

	let response_1 = json_response(query)
	console.log(response_1)

	response_1.then(function(result) {
		var fs = require('fs');
		console.log(result)
		fs.appendFile("imgs/img_jsons/crosswalks/test.txt", JSON.stringify(result) + ', ', function(err) {
		   
	});
	})
	page_n ++
	i += 80;
}
