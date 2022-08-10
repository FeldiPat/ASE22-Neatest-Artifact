const test0 = async function (t) {
  await t.runForSteps(1);
}
const test1 = async function (t) {
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
}
const test2 = async function (t) {
  t.mouseDownForSteps(6);
  await t.runForSteps(1);
  t.keyPress('space', 8);
  await t.runForSteps(8);
  await t.runForSteps(1);
}
const test3 = async function (t) {
  t.mouseDownForSteps(6);
  await t.runForSteps(1);
  t.keyPress('space', 8);
  await t.runForSteps(8);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
  t.mouseDownForSteps(6);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
  t.mouseDownForSteps(6);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
  t.mouseDownForSteps(6);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
  t.mouseDownForSteps(6);
  await t.runForSteps(1);
  t.mouseMove(0, 0);
  await t.runForSteps(1);
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":25,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":25,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":25,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":25,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  }
]
