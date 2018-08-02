describe("Calculator", function() {
  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  it("should_return_2_when_input_1_+_1", function() {
    var data = calculator.run(1 , 1 , '+');
    expect(data).toEqual(2);
  });
  it("should_return_3_when_input_4_-_1", function() {
    var data = calculator.run(4 , 1 , '-');
    expect(data).toEqual(3);
  });
  it("should_return_4_when_input_4_*_1", function() {
    var data = calculator.run(4 , 1 , '*');
    expect(data).toEqual(4);
  });
  it("should_return_4_when_input_20_/_5", function() {
    var data = calculator.run(20 , 5 , '/');
    expect(data).toEqual(4);
  });
});
