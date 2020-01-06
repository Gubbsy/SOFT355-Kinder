class MockRequest { 
  constructor(_body, _header, _query, _cookies){
    this.body = _body;
    this.header = _header;
    this.query = _query;
    this.cookies = _cookies;
  }
}

module.exports = MockRequest