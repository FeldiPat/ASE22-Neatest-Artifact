const test0 = async function (t) {
  await t.runForSteps(1);
}
const test1 = async function (t) {
  await t.runForSteps(24);
  await t.runForSteps(24);
}
const test2 = async function (t) {
  t.mouseMove(47, -109);
  await t.runForSteps(1);
  t.mouseMove(58, -66);
  await t.runForSteps(1);
  t.mouseMove(62, -107);
  await t.runForSteps(1);
  t.mouseMove(61, -108);
  await t.runForSteps(1);
  t.mouseMove(61, -109);
  await t.runForSteps(1);
  t.mouseMove(61, -109);
  await t.runForSteps(1);
  t.mouseMove(61, -109);
  await t.runForSteps(1);
  t.mouseMove(61, -109);
  await t.runForSteps(1);
  t.mouseMove(60, -109);
  await t.runForSteps(1);
  t.mouseMove(60, -109);
  await t.runForSteps(1);
  t.mouseMove(59, -109);
  await t.runForSteps(1);
  t.mouseMove(58, -109);
  await t.runForSteps(1);
  t.mouseMove(56, -109);
  await t.runForSteps(1);
  t.mouseMove(54, -109);
  await t.runForSteps(1);
  t.mouseMove(50, -109);
  await t.runForSteps(1);
  t.mouseMove(46, -109);
  await t.runForSteps(1);
  t.mouseMove(39, -110);
  await t.runForSteps(1);
  t.mouseMove(30, -110);
  await t.runForSteps(1);
  t.mouseMove(18, -110);
  await t.runForSteps(1);
  t.mouseMove(3, -110);
  await t.runForSteps(1);
  t.mouseMove(-14, -109);
  await t.runForSteps(1);
  t.mouseMove(-37, -107);
  await t.runForSteps(1);
  t.mouseMove(-61, -105);
  await t.runForSteps(1);
  t.mouseMove(-87, -100);
  await t.runForSteps(1);
  t.mouseMove(-109, -96);
  await t.runForSteps(1);
  t.mouseMove(-128, -94);
  await t.runForSteps(1);
  t.mouseMove(-145, -93);
  await t.runForSteps(1);
  t.mouseMove(-157, -94);
  await t.runForSteps(1);
  t.mouseMove(-166, -95);
  await t.runForSteps(1);
  t.mouseMove(-171, -96);
  await t.runForSteps(1);
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":13,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":13,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":13,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  }
]
