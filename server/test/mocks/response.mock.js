class MockResponse {
  constructor(){
    this.body;
    this.statusCode;
    this.cookie;
  }

  json(_body){
    this.body =_body;
  }

  status(_status){
    this.statusCode = _status;
    return this
  }

  cookie(){
    this.cookie = "set cookie"
  }
}

module.exports = MockResponse