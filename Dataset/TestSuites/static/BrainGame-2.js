const test0 = async function (t) {
  await t.runForSteps(1);
}
const test1 = async function (t) {
  t.clickSprite('Play', 10);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.mouseMoveToEvent(-1, 0);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.mouseMove(-117, 71);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.mouseMoveToEvent(-1, 0);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.mouseMove(-111, 57);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.mouseMoveToEvent(-1, 0);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.mouseMove(-124, 88);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.mouseMoveToEvent(-1, 0);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.mouseMove(-127, 94);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.mouseMoveToEvent(-1, 0);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.mouseMove(-115, 66);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.mouseMoveToEvent(-1, 0);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.mouseMove(-111, 57);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.mouseMoveToEvent(-1, 0);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.mouseMove(-109, 52);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.mouseMoveToEvent(-1, 0);
  await t.runForSteps(1);
}
const test2 = async function (t) {
  t.mouseMoveToEvent(-1, 0);
  await t.runForSteps(1);
  t.clickSprite('Play', 10);
  await t.runForSteps(1);
  await t.runForSteps(18);
  t.typeText('0');
  await t.runForSteps(1);
  await t.runForSteps(18);
  t.typeText('0');
  await t.runForSteps(1);
  await t.runForSteps(18);
  await t.runForSteps(18);
}
const test3 = async function (t) {
  t.clickSprite('Play', 10);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.mouseMove(122, 31);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.mouseMove(123, 30);
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
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":2,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":2,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":2,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":2,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  }
]
