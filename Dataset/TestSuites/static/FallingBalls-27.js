const test0 = async function (t) {
  await t.runForSteps(1);
}
const test1 = async function (t) {
  await t.runForSteps(25);
  await t.runForSteps(25);
  await t.runForSteps(16);
  await t.runForSteps(20);
  await t.runForSteps(23);
  await t.runForSteps(18);
  await t.runForSteps(26);
  await t.runForSteps(25);
  await t.runForSteps(30);
  await t.runForSteps(17);
  await t.runForSteps(18);
  await t.runForSteps(13);
  await t.runForSteps(20);
  await t.runForSteps(25);
  t.keyPress('left arrow', 5);
  await t.runForSteps(5);
  await t.runForSteps(1);
}
const test2 = async function (t) {
  t.keyPress('right arrow', 5);
  await t.runForSteps(5);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.keyPress('right arrow', 5);
  await t.runForSteps(5);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.keyPress('right arrow', 5);
  await t.runForSteps(5);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.keyPress('right arrow', 5);
  await t.runForSteps(5);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(33);
  await t.runForSteps(33);
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":27,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":27,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":27,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  }
]
