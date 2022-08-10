const test0 = async function (t) {
  await t.runForSteps(1);
}
const test1 = async function (t) {
  await t.runForSteps(28);
  await t.runForSteps(28);
}
const test2 = async function (t) {
  t.mouseMove(211, -3);
  await t.runForSteps(1);
  t.mouseMove(202, 4);
  await t.runForSteps(1);
  t.mouseMove(172, 7);
  await t.runForSteps(1);
  t.mouseMove(160, 7);
  await t.runForSteps(1);
  t.mouseMove(153, 7);
  await t.runForSteps(1);
  t.mouseMove(136, 7);
  await t.runForSteps(1);
  t.mouseMove(113, 7);
  await t.runForSteps(1);
  t.mouseMove(87, 7);
  await t.runForSteps(1);
  t.mouseMove(69, 7);
  await t.runForSteps(1);
  t.mouseMove(51, 7);
  await t.runForSteps(1);
  t.mouseMove(22, 7);
  await t.runForSteps(1);
  t.mouseMove(-5, 7);
  await t.runForSteps(1);
  t.mouseMove(-21, 7);
  await t.runForSteps(1);
  t.mouseMove(-44, 7);
  await t.runForSteps(1);
  t.mouseMove(-71, 7);
  await t.runForSteps(1);
  t.mouseMove(-92, 6);
  await t.runForSteps(1);
  t.mouseMove(-105, 6);
  await t.runForSteps(1);
  t.mouseMove(-120, 6);
  await t.runForSteps(1);
  t.mouseMove(-142, 6);
  await t.runForSteps(1);
  t.mouseMove(-156, 6);
  await t.runForSteps(1);
  t.mouseMove(-164, 5);
  await t.runForSteps(1);
  t.mouseMove(-175, 5);
  await t.runForSteps(1);
  t.mouseMove(-184, 5);
  await t.runForSteps(1);
  t.mouseMove(-190, 4);
  await t.runForSteps(1);
  t.mouseMove(-196, 4);
  await t.runForSteps(1);
  t.mouseMove(-199, 4);
  await t.runForSteps(1);
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":23,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":23,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":23,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  }
]
