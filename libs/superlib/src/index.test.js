import groupByName from ".";

describe("test", () => {
  it('should group', () => {
    const actual = groupByName([
      {name: "a", val: 1},
      {name: "a", val: 2}
    ]);
    
    expect(actual).toEqual({
        "a": [
            {name: "a", val: 1},
            {name: "a", val: 2}
        ]
    });
  });
});