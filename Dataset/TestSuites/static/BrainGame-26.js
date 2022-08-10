const test0 = async function (t) {
  await t.runForSteps(1);
}
const test1 = async function (t) {
  t.clickSprite('Play', 10);
  await t.runForSteps(1);
}
const test2 = async function (t) {
  t.clickSprite('Play', 10);
  await t.runForSteps(1);
  await t.runForSteps(21);
  t.typeText('0');
  await t.runForSteps(1);
}
const test3 = async function (t) {
  t.clickSprite('Play', 10);
  await t.runForSteps(1);
  await t.runForSteps(21);
  t.typeText('0');
  await t.runForSteps(1);
  t.mouseMove(-2, -45);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.mouseMove(-5, -43);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.mouseMoveToEvent(-1, 0);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.mouseMove(-12, -36);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
}
const test4 = async function (t) {
  t.clickSprite('Play', 10);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.mouseMoveToEvent(-1, 0);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
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
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":26,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":26,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  }
]
