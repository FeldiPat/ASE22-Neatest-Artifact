const test0 = async function (t) {
  await t.runForSteps(1);
}
const test1 = async function (t) {
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(30);
}
const test2 = async function (t) {
  t.keyPress('space', 7);
  await t.runForSteps(7);
  await t.runForSteps(1);
  await t.runForSteps(28);
  await t.runForSteps(18);
  await t.runForSteps(25);
  await t.runForSteps(19);
  t.keyPress('space', 6);
  await t.runForSteps(6);
  await t.runForSteps(1);
  await t.runForSteps(26);
  await t.runForSteps(26);
  await t.runForSteps(18);
  await t.runForSteps(27);
  t.keyPress('space', 5);
  await t.runForSteps(5);
  await t.runForSteps(1);
  await t.runForSteps(26);
}
const test3 = async function (t) {
  await t.runForSteps(40);
  await t.runForSteps(40);
  t.keyPress('space', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(37);
  await t.runForSteps(37);
}
const test4 = async function (t) {
  t.keyPress('space', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  await t.runForSteps(26);
  await t.runForSteps(27);
  await t.runForSteps(33);
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(33);
  await t.runForSteps(33);
  await t.runForSteps(29);
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(32);
  await t.runForSteps(32);
  await t.runForSteps(31);
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(31);
  await t.runForSteps(30);
  await t.runForSteps(30);
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(33);
  await t.runForSteps(33);
  await t.runForSteps(31);
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(31);
  await t.runForSteps(31);
  await t.runForSteps(31);
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(31);
  await t.runForSteps(31);
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":17,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":17,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":17,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":17,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":17,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  }
]
