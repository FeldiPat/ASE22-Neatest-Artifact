const test0 = async function (t) {
  await t.runForSteps(1);
}
const test1 = async function (t) {
  await t.runForSteps(20);
  await t.runForSteps(20);
  await t.runForSteps(20);
}
const test2 = async function (t) {
  t.clickSprite('Sprite2', 10);
  await t.runForSteps(1);
}
const test3 = async function (t) {
  await t.runForSteps(17);
  await t.runForSteps(17);
  await t.runForSteps(23);
  await t.runForSteps(21);
  await t.runForSteps(18);
  await t.runForSteps(18);
  await t.runForSteps(18);
  await t.runForSteps(18);
  await t.runForSteps(18);
  await t.runForSteps(19);
  await t.runForSteps(19);
  await t.runForSteps(19);
  await t.runForSteps(19);
  await t.runForSteps(19);
  await t.runForSteps(19);
  await t.runForSteps(19);
  await t.runForSteps(19);
  await t.runForSteps(19);
  await t.runForSteps(19);
  await t.runForSteps(19);
  await t.runForSteps(19);
  await t.runForSteps(19);
  await t.runForSteps(19);
  await t.runForSteps(19);
  await t.runForSteps(19);
  await t.runForSteps(19);
  await t.runForSteps(19);
  await t.runForSteps(19);
}
const test4 = async function (t) {
  t.clickSprite('Sprite2', 10);
  await t.runForSteps(1);
  await t.runForSteps(20);
  await t.runForSteps(28);
  await t.runForSteps(29);
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":18,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":18,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":18,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":18,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":18,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  }
]
