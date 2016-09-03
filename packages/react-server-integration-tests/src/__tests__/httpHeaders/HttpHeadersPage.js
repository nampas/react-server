class HttpHeadersPage {

	getHeaders() {
		return [
			["Content-Security-Policy", "example.com"],
		];
	}

	getContentType() {
		return "application/httpheaderspage";
	}
}

module.exports = HttpHeadersPage;
