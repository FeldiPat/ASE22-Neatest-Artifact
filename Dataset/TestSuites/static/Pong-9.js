const test0 = async function (t) {
  await t.runForSteps(1);
}
const test1 = async function (t) {
  await t.runForSteps(21);
  await t.runForSteps(21);
}
const test2 = async function (t) {
  t.mouseMove(166, -178);
  await t.runForSteps(1);
  t.mouseMove(197, -146);
  await t.runForSteps(1);
  t.mouseMove(197, -175);
  await t.runForSteps(1);
  t.mouseMove(195, -175);
  await t.runForSteps(1);
  t.mouseMove(193, -175);
  await t.runForSteps(1);
  t.mouseMove(189, -175);
  await t.runForSteps(1);
  t.mouseMove(182, -175);
  await t.runForSteps(1);
  t.mouseMove(165, -175);
  await t.runForSteps(1);
  t.mouseMove(136, -175);
  await t.runForSteps(1);
  t.mouseMove(87, -175);
  await t.runForSteps(1);
  t.mouseMove(25, -174);
  await t.runForSteps(1);
  t.mouseMove(-33, -174);
  await t.runForSteps(1);
  t.mouseMove(-86, -176);
  await t.runForSteps(1);
  t.mouseMove(-126, -177);
  await t.runForSteps(1);
  t.mouseMove(-159, -177);
  await t.runForSteps(1);
  t.mouseMove(-183, -177);
  await t.runForSteps(1);
  t.mouseMove(-200, -177);
  await t.runForSteps(1);
  t.mouseMove(-210, -176);
  await t.runForSteps(1);
  t.mouseMove(-216, -176);
  await t.runForSteps(1);
  t.mouseMove(-219, -176);
  await t.runForSteps(1);
  t.mouseMove(-220, -175);
  await t.runForSteps(1);
  t.mouseMove(-221, -175);
  await t.runForSteps(1);
  t.mouseMove(-222, -175);
  await t.runForSteps(1);
  t.mouseMove(-222, -175);
  await t.runForSteps(1);
  t.mouseMove(-222, -175);
  await t.runForSteps(1);
  t.mouseMove(-222, -175);
  await t.runForSteps(1);
  t.mouseMove(-222, -175);
  await t.runForSteps(1);
  t.mouseMove(-222, -175);
  await t.runForSteps(1);
  t.mouseMove(-222, -175);
  await t.runForSteps(1);
  t.mouseMove(-222, -175);
  await t.runForSteps(1);
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":9,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":9,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":9,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  }
]
