let BASE_URL = ''
if (process.env.NODE_ENV == 'development') {
	BASE_URL = '192.168.1.1:8090' // qe环境
} else {
	BASE_URL = 'https://www.baidu.com' // 生产环境
}
const config = {
	base_url: BASE_URL,
	appId: 'wxec816909adf78550',
	appKey: 'c071543266a57a38e636f4f91285d577'
}

export {
	config
}
