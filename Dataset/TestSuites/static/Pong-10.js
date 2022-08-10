const test0 = async function (t) {
  await t.runForSteps(1);
}
const test1 = async function (t) {
  await t.runForSteps(20);
  await t.runForSteps(20);
}
const test2 = async function (t) {
  t.mouseMove(217, -90);
  await t.runForSteps(1);
  t.mouseMove(55, -169);
  await t.runForSteps(1);
  t.mouseMove(-163, -158);
  await t.runForSteps(1);
  t.mouseMove(-196, -63);
  await t.runForSteps(1);
  t.mouseMove(-216, -63);
  await t.runForSteps(1);
  t.mouseMove(-216, -63);
  await t.runForSteps(1);
  t.mouseMove(-217, -63);
  await t.runForSteps(1);
  t.mouseMove(-217, -63);
  await t.runForSteps(1);
  t.mouseMove(-217, -63);
  await t.runForSteps(1);
  t.mouseMove(-217, -63);
  await t.runForSteps(1);
  t.mouseMove(-217, -63);
  await t.runForSteps(1);
  t.mouseMove(-216, -63);
  await t.runForSteps(1);
  t.mouseMove(-216, -63);
  await t.runForSteps(1);
  t.mouseMove(-216, -63);
  await t.runForSteps(1);
  t.mouseMove(-216, -63);
  await t.runForSteps(1);
  t.mouseMove(-216, -63);
  await t.runForSteps(1);
  t.mouseMove(-216, -63);
  await t.runForSteps(1);
  t.mouseMove(-216, -63);
  await t.runForSteps(1);
  t.mouseMove(-216, -63);
  await t.runForSteps(1);
  t.mouseMove(-216, -63);
  await t.runForSteps(1);
  t.mouseMove(-216, -63);
  await t.runForSteps(1);
  t.mouseMove(-216, -63);
  await t.runForSteps(1);
  t.mouseMove(-216, -63);
  await t.runForSteps(1);
  t.mouseMove(-216, -63);
  await t.runForSteps(1);
  t.mouseMove(-216, -63);
  await t.runForSteps(1);
  t.mouseMove(-215, -63);
  await t.runForSteps(1);
  t.mouseMove(-215, -63);
  await t.runForSteps(1);
  t.mouseMove(-214, -63);
  await t.runForSteps(1);
  t.mouseMove(-214, -63);
  await t.runForSteps(1);
  t.mouseMove(-212, -64);
  await t.runForSteps(1);
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":10,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":10,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":10,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  }
]
