const test0 = async function (t) {
  await t.runForSteps(1);
}
const test1 = async function (t) {
  await t.runForSteps(31);
}
const test2 = async function (t) {
  t.mouseMove(110, 48);
  await t.runForSteps(1);
  t.mouseMove(206, 89);
  await t.runForSteps(1);
  t.mouseMove(-10, -115);
  await t.runForSteps(1);
  t.mouseMove(-7, -116);
  await t.runForSteps(1);
  t.mouseMove(-40, -114);
  await t.runForSteps(1);
  t.mouseMove(-47, -114);
  await t.runForSteps(1);
  t.mouseMove(-58, -114);
  await t.runForSteps(1);
  t.mouseMove(-66, -114);
  await t.runForSteps(1);
  t.mouseMove(-73, -114);
  await t.runForSteps(1);
  t.mouseMove(-80, -113);
  await t.runForSteps(1);
  t.mouseMove(-87, -113);
  await t.runForSteps(1);
  t.mouseMove(-92, -112);
  await t.runForSteps(1);
  t.mouseMove(-97, -111);
  await t.runForSteps(1);
  t.mouseMove(-99, -109);
  await t.runForSteps(1);
  t.mouseMove(-100, -106);
  await t.runForSteps(1);
  t.mouseMove(-97, -101);
  await t.runForSteps(1);
  t.mouseMove(-89, -94);
  await t.runForSteps(1);
  t.mouseMove(-77, -84);
  await t.runForSteps(1);
  t.mouseMove(-56, -69);
  await t.runForSteps(1);
  t.mouseMove(-25, -47);
  await t.runForSteps(1);
  t.mouseMove(8, -24);
  await t.runForSteps(1);
  t.mouseMove(41, -1);
  await t.runForSteps(1);
  t.mouseMove(77, 24);
  await t.runForSteps(1);
  t.mouseMove(105, 45);
  await t.runForSteps(1);
  t.mouseMove(128, 64);
  await t.runForSteps(1);
  t.mouseMove(147, 81);
  await t.runForSteps(1);
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":12,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":12,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":12,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  }
]
