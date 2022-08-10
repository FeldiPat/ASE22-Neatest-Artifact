const test0 = async function (t) {
  await t.runForSteps(1);
}
const test1 = async function (t) {
  await t.runForSteps(18);
  await t.runForSteps(18);
}
const test2 = async function (t) {
  t.keyPress('space', 5);
  await t.runForSteps(5);
  await t.runForSteps(1);
}
const test3 = async function (t) {
  t.keyPress('space', 5);
  await t.runForSteps(5);
  await t.runForSteps(1);
  await t.runForSteps(25);
}
const test4 = async function (t) {
  t.keyPress('space', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  await t.runForSteps(3);
  await t.runForSteps(7);
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
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":14,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":14,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":14,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":14,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":14,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  }
]
