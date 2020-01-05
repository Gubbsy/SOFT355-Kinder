const app = require('../../index');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);
chai.should();

const url = "http://localhost:9000/cat"

describe('Cats', () => {
  describe("/cat/getCats", () => {
    it("should get all cats in db", (done) => {
      chai.request(url)
        .get('/getCats')
        .query({pageNo: 1, size: 10})
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body).to.not.be.null;
          expect(res.body.length).equal(10);

          for(i = 0; i < 10; i++){
            expect(res.body[i]).to.have.property("voteCookies");
            expect(res.body[i]).to.have.property("_id");
            expect(res.body[i]).to.have.property("catId");
            expect(res.body[i]).to.have.property("imageUrl");
            expect(res.body[i]).to.have.property("width");
            expect(res.body[i]).to.have.property("height");
            expect(res.body[i]).to.have.property("score");
          }
         
          done();
        });
    });

    it("should return error with no query paramaters", (done) => {
      chai.request(url)
        .get('/getCats')
        .query({})
        .end((err, res) => {
          res.should.have.status(400);
          expect(res.body).to.have.property("error", "Page number or size must be set to an integer greater than 0");
          done();
        });
    });

    it("should return error with invalid query paramaters", (done) => {
      chai.request(url)
        .get('/getCats')
        .query({invalf: 3, meow: 33})
        .end((err, res) => {
          res.should.have.status(400);
          expect(res.body).to.have.property("error", "Page number or size must be set to an integer greater than 0");
          done();
        });
    });

    it("should return error with NaN pageNo query value", (done) => {
      chai.request(url)
        .get('/getCats')
        .query({pageNo: "Meow", size: 10})
        .end((err, res) => {
          res.should.have.status(400);
          expect(res.body).to.have.property("error", "Page number or size must be set to an integer greater than 0");
          done();
        });
    });

    it("should return error with NaN size query value", (done) => {
      chai.request(url)
        .get('/getCats')
        .query({pageNo: 2, size: "Meow"})
        .end((err, res) => {
          res.should.have.status(400);
          expect(res.body).to.have.property("error", "Page number or size must be set to an integer greater than 0");
          done();
        });
    });
  })

  describe("/cat/findCat", () => {
    it("should get with specifie cat ID", (done) => {
      chai.request(url)
        .get('/findCat')
        .send({catId: "MTg4NTgyNw"})
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body).to.not.be.null;
          expect(res.body).to.have.property("voteCookies");
          expect(res.body).to.have.property("_id");
          expect(res.body).to.have.property("catId", "MTg4NTgyNw");
          expect(res.body).to.have.property("imageUrl");
          expect(res.body).to.have.property("width");
          expect(res.body).to.have.property("height");
          expect(res.body).to.have.property("score");
          done();
        });
    });

    it("should return error if no body provided", (done) => {
      chai.request(url)
        .get('/findCat')
        .send({})
        .end((err, res) => {
          res.should.have.status(400);
          expect(res.body).to.have.property("error", "No catId provided");
          done();
        });
    });
  });

  describe("/cat/getUnvotedCats", () => {
    it("should return all cats and set cookie when one isn't present", (done) => {
      chai.request(url)
        .get('/getUnvotedCats')
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body).to.not.be.null;
          res.should.have.cookie("kinderCookie");
          done();
        });
    });

    it("should return cats that do not have specified vote cookie", (done) => {
      chai.request(url)
        .get('/getUnvotedCats')
        .set('Cookie', 'kinderCookie=33590354657120261576593359104')
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body).to.not.be.null;
          let numberCats = res.body.length;

          for (i = 0; i < numberCats; i++) {
            expect(res.body[i].voteCookies).to.not.contain("33590354657120261576593359104");
          }
          done();
        });
    });
  });

  describe("/cat/voteCat", () => {
    it("should vote on a cat", (done) => {
      chai.request(url)
        .post('/voteCat')
        .set('Cookie', 'kinderCookie=33590354657120261576593359104')
        .send({catId: "2m2", score: 5})
        .end((err, res) => {
          res.should.have.status(204);
          done();
        });
    });

    it("return error with no body provided", (done) => {
      chai.request(url)
        .post('/voteCat')
        .set('Cookie', 'kinderCookie=33590354657120261576593359104')
        .send({})
        .end((err, res) => {
          res.should.have.status(400);
          expect(res.body).to.have.property("error", "No catId or score provided - score must be a number");
          done();
        });
    });

    it("return error when score is NaN provided", (done) => {
      chai.request(url)
        .post('/voteCat')
        .set('Cookie', 'kinderCookie=33590354657120261576593359104')
        .send({catId: "2m2", score: "Meow"})
        .end((err, res) => {
          res.should.have.status(400);
          expect(res.body).to.have.property("error", "No catId or score provided - score must be a number");
          done();
        });
    });
  });
});