class MockResponse {
  constructor(){
    this.body
    this.status
  }

  json(_body){
    this.body =_body
    return
  }

  status(_status){
    this.status = _status
  }
}

module.exports = MockResponse