class MockIO {

  constructor(){
    this.emitCallNo = 0
  }

  emit(){
    this.emitCallNo += 1;
  }

  getEmitCallNo() {
    return this.emitCallNo;
  }
}

module.exports = MockIO