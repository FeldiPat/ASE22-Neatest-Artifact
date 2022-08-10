const test0 = async function (t) {
  await t.runForSteps(1);
}
const test1 = async function (t) {
  t.keyPress('space', 7);
  await t.runForSteps(7);
  await t.runForSteps(1);
  await t.runForSteps(12);
  await t.runForSteps(34);
}
const test2 = async function (t) {
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(28);
  await t.runForSteps(27);
  await t.runForSteps(24);
  t.keyPress('space', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  await t.runForSteps(23);
  await t.runForSteps(23);
  await t.runForSteps(31);
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":20,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":20,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":20,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  }
]
