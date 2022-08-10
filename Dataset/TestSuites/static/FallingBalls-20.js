const test0 = async function (t) {
  await t.runForSteps(1);
}
const test1 = async function (t) {
  await t.runForSteps(31);
  await t.runForSteps(31);
  await t.runForSteps(33);
  t.keyPress('right arrow', 7);
  await t.runForSteps(7);
  await t.runForSteps(1);
  await t.runForSteps(32);
  await t.runForSteps(32);
  await t.runForSteps(29);
  t.keyPress('right arrow', 7);
  await t.runForSteps(7);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(31);
}
const test2 = async function (t) {
  t.keyPress('right arrow', 7);
  await t.runForSteps(7);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.keyPress('right arrow', 7);
  await t.runForSteps(7);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.keyPress('left arrow', 5);
  await t.runForSteps(5);
  await t.runForSteps(1);
}
const test3 = async function (t) {
  await t.runForSteps(38);
  await t.runForSteps(38);
  await t.runForSteps(35);
  await t.runForSteps(39);
  await t.runForSteps(35);
  await t.runForSteps(35);
  t.keyPress('right arrow', 5);
  await t.runForSteps(5);
  await t.runForSteps(1);
  await t.runForSteps(37);
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
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":20,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  }
]
