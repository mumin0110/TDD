describe("Length", function() {
  var length;

  beforeEach(function() {
    length = new Length();
  });

  it("should_return_9m_when_input_9m_9cm", function() {
    var data = length.run(9 , 9 , 'm' , 'cm');
    expect(data).toEqual('9m');
  });
  it("should_return_7m_when_input_6m_7m", function() {
    var data = length.run(6 , 7 , 'm' , 'm');
    console.log(data)
    expect(data).toEqual('7m');
  });
  it("should_return_7m_when_input_6dm_7m", function() {
    var data = length.run(6 , 7 , 'dm' , 'm');
    expect(data).toEqual('7m');
  });
  it("should_return_2m_when_input_10dm_2m", function() {
    var data = length.run(10 , 2 , 'dm' , 'm');
    expect(data).toEqual('2m');
  });
  it("should_return_same_when_input_2m_2m", function() {
    var data = length.run(2 , 2 , 'm' , 'm');
    expect(data).toEqual('same');
  });
});