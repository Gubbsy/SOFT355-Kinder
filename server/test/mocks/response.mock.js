class MockResponse {
  constructor(){
    this.body;
    this.statusCode;
  }

  json(_body){
    this.body =_body;
  }

  status(_status){
    this.statusCode = _status;
    return this
  }
}

module.exports = MockResponse