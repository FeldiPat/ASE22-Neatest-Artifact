const test0 = async function (t) {
  await t.runForSteps(1);
}
const test1 = async function (t) {
  await t.runForSteps(25);
  await t.runForSteps(25);
}
const test2 = async function (t) {
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(15);
  t.keyPress('space', 6);
  await t.runForSteps(6);
  await t.runForSteps(1);
  await t.runForSteps(15);
  t.keyPress('space', 6);
  await t.runForSteps(6);
  await t.runForSteps(1);
  await t.runForSteps(16);
  t.keyPress('space', 6);
  await t.runForSteps(6);
  await t.runForSteps(1);
  await t.runForSteps(16);
  t.keyPress('space', 6);
  await t.runForSteps(6);
  await t.runForSteps(1);
  await t.runForSteps(16);
  t.keyPress('space', 6);
  await t.runForSteps(6);
  await t.runForSteps(1);
  await t.runForSteps(16);
  t.keyPress('space', 6);
  await t.runForSteps(6);
  await t.runForSteps(1);
  await t.runForSteps(16);
  t.keyPress('space', 6);
  await t.runForSteps(6);
  await t.runForSteps(1);
  await t.runForSteps(16);
  t.keyPress('space', 6);
  await t.runForSteps(6);
  await t.runForSteps(1);
  await t.runForSteps(16);
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":26,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":26,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":26,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  }
]
