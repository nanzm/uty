import { mapToOptions, queryOption } from "../src/options";

describe('options', () => {

  const testObject = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
    { id: 4, name: "d" },
  ];

  const testOptions = [
    { value: 1, label: "a" },
    { value: 2, label: "b" },
    { value: 3, label: "c" },
    { value: 4, label: "d" },
  ];

  it('mapToOptions', () => {
    expect(mapToOptions(testObject)).toEqual(testOptions);
  });

  it('queryOption', () => {
    expect(queryOption(testOptions, { label: "a" })).toEqual({ value: 1, label: "a" });
    expect(queryOption(testOptions, { value: 1 })).toEqual({ value: 1, label: "a" });
  });
});
