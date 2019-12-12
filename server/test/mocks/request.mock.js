class MockRequest { 
  constructor(_body, _header, _query){
    this.body = _body
    this.header = _header
    this.query = _query
  }
}

module.exports = MockRequest