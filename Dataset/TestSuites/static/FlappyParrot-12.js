const test0 = async function (t) {
  await t.runForSteps(1);
}
const test1 = async function (t) {
  await t.runForSteps(32);
  await t.runForSteps(32);
}
const test2 = async function (t) {
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
}
const test3 = async function (t) {
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(24);
}
const test4 = async function (t) {
  t.keyPress('space', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(16);
  t.keyPress('space', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  await t.runForSteps(9);
  await t.runForSteps(3);
  await t.runForSteps(3);
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(6);
  await t.runForSteps(3);
  await t.runForSteps(3);
  await t.runForSteps(3);
  t.keyPress('space', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  await t.runForSteps(4);
  await t.runForSteps(3);
  await t.runForSteps(3);
  await t.runForSteps(3);
  t.keyPress('space', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  await t.runForSteps(4);
  await t.runForSteps(3);
  await t.runForSteps(3);
  await t.runForSteps(3);
  await t.runForSteps(3);
  t.keyPress('space', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  await t.runForSteps(3);
  await t.runForSteps(3);
  await t.runForSteps(3);
  await t.runForSteps(3);
  await t.runForSteps(3);
  t.keyPress('space', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  await t.runForSteps(3);
  await t.runForSteps(3);
  await t.runForSteps(3);
  await t.runForSteps(3);
  await t.runForSteps(3);
  t.keyPress('space', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  await t.runForSteps(3);
  await t.runForSteps(3);
  await t.runForSteps(3);
  await t.runForSteps(3);
  await t.runForSteps(3);
  t.keyPress('space', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  await t.runForSteps(3);
  await t.runForSteps(3);
  await t.runForSteps(3);
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":12,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":12,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":12,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":12,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":12,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  }
]
