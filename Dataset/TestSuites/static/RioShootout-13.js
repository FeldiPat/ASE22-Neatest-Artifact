const test0 = async function (t) {
  await t.runForSteps(1);
}
const test1 = async function (t) {
  t.keyPress('space', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  await t.runForSteps(22);
  await t.runForSteps(35);
}
const test2 = async function (t) {
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(40);
  await t.runForSteps(37);
  t.keyPress('space', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  await t.runForSteps(39);
}
const test3 = async function (t) {
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(13);
  await t.runForSteps(13);
  await t.runForSteps(13);
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(13);
  await t.runForSteps(12);
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(13);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(13);
  await t.runForSteps(13);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(12);
  await t.runForSteps(13);
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":13,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":13,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":13,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":13,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  }
]
