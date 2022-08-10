const test0 = async function (t) {
  await t.runForSteps(1);
}
const test1 = async function (t) {
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(29);
}
const test2 = async function (t) {
  t.keyPress('space', 8);
  await t.runForSteps(8);
  await t.runForSteps(1);
  await t.runForSteps(41);
  await t.runForSteps(24);
  await t.runForSteps(38);
  t.keyPress('space', 9);
  await t.runForSteps(9);
  await t.runForSteps(1);
  await t.runForSteps(38);
}
const test3 = async function (t) {
  await t.runForSteps(24);
  await t.runForSteps(24);
  await t.runForSteps(39);
  await t.runForSteps(39);
  await t.runForSteps(39);
  t.keyPress('space', 5);
  await t.runForSteps(5);
  await t.runForSteps(1);
  await t.runForSteps(26);
  await t.runForSteps(24);
  await t.runForSteps(30);
  t.keyPress('space', 5);
  await t.runForSteps(5);
  await t.runForSteps(1);
  await t.runForSteps(39);
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":10,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":10,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":10,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":10,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  }
]
