import json
import urllib
import requests

path = '../imgs/img_jsons/crosswalks/test.txt'

file_content = open(path, 'r', encoding="utf8")
file_content = file_content.readline()
json_content = json.loads(file_content)
i = 0
photo_count = 1

for page in json_content:
	page['page']
	photos = page['photos']
	print(photos)
	for photo in photos:
		src = photo['src']
		img_url = src['original']

		f = open('../imgs/imgs/crosswalks/{:05d}.jpg'.format(photo_count),'wb')

		f.write(requests.get(img_url).content)
		f.close()
		photo_count += 1

	if i == 10:
		break
	i += 1