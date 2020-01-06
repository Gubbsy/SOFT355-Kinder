class MockSocket {

  constructor(){
    this.onCallNo = 0;
  }

  on(){
    this.onCallNo +=1;
  }

  getOnCallNo(){
    return this.onCallNo
  }

}

module.exports = MockSocket