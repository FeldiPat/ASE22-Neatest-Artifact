const test0 = async function (t) {
  await t.runForSteps(1);
}
const test1 = async function (t) {
  t.mouseMove(123, -4);
  await t.runForSteps(1);
  t.mouseMove(123, -4);
  await t.runForSteps(1);
  t.mouseMove(121, -16);
  await t.runForSteps(1);
  t.mouseMove(121, -16);
  await t.runForSteps(1);
  t.mouseMove(121, -16);
  await t.runForSteps(1);
  t.mouseMove(121, -16);
  await t.runForSteps(1);
  t.mouseMove(120, -16);
  await t.runForSteps(1);
  t.mouseMove(120, -15);
  await t.runForSteps(1);
  t.mouseMove(120, -15);
  await t.runForSteps(1);
  t.mouseMove(120, -15);
  await t.runForSteps(1);
  t.mouseMove(120, -15);
  await t.runForSteps(1);
  t.mouseMove(120, -15);
  await t.runForSteps(1);
  t.mouseMove(119, -15);
  await t.runForSteps(1);
  t.mouseMove(119, -15);
  await t.runForSteps(1);
  t.mouseMove(119, -15);
  await t.runForSteps(1);
  t.mouseMove(118, -14);
  await t.runForSteps(1);
  t.mouseMove(118, -14);
  await t.runForSteps(1);
  t.mouseMove(117, -14);
  await t.runForSteps(1);
  t.mouseMove(117, -14);
  await t.runForSteps(1);
  t.mouseMove(116, -13);
  await t.runForSteps(1);
  t.mouseMove(116, -13);
  await t.runForSteps(1);
  t.mouseMove(115, -12);
  await t.runForSteps(1);
  t.mouseMove(114, -12);
  await t.runForSteps(1);
  t.mouseMove(113, -12);
  await t.runForSteps(1);
  t.mouseMove(112, -11);
  await t.runForSteps(1);
  t.mouseMove(111, -10);
  await t.runForSteps(1);
  t.mouseMove(110, -10);
  await t.runForSteps(1);
  t.mouseMove(109, -9);
  await t.runForSteps(1);
  t.mouseMove(108, -8);
  await t.runForSteps(1);
  t.mouseMove(107, -8);
  await t.runForSteps(1);
  t.mouseMove(105, -7);
  await t.runForSteps(1);
  t.mouseMove(104, -6);
  await t.runForSteps(1);
  t.mouseMove(78, 5);
  await t.runForSteps(1);
}
const test2 = async function (t) {
  t.mouseMove(-185, 0);
  await t.runForSteps(1);
  t.mouseMove(134, 0);
  await t.runForSteps(1);
  t.mouseMove(9, 0);
  await t.runForSteps(1);
  t.mouseMove(18, 0);
  await t.runForSteps(1);
  t.mouseMove(28, 0);
  await t.runForSteps(1);
  t.mouseMove(37, 0);
  await t.runForSteps(1);
  t.mouseMove(45, 0);
  await t.runForSteps(1);
  t.mouseMove(55, 0);
  await t.runForSteps(1);
  t.mouseMove(63, 0);
  await t.runForSteps(1);
  t.mouseMove(73, 0);
  await t.runForSteps(1);
  t.mouseMove(81, 0);
  await t.runForSteps(1);
  t.mouseMove(88, 0);
  await t.runForSteps(1);
  t.mouseMove(97, 0);
  await t.runForSteps(1);
  t.mouseMove(104, 0);
  await t.runForSteps(1);
  t.mouseMove(112, 0);
  await t.runForSteps(1);
  t.mouseMove(119, 0);
  await t.runForSteps(1);
  t.mouseMove(125, 0);
  await t.runForSteps(1);
  t.mouseMove(132, 0);
  await t.runForSteps(1);
  t.mouseMove(138, 0);
  await t.runForSteps(1);
  t.mouseMove(143, 0);
  await t.runForSteps(1);
  t.mouseMove(149, 0);
  await t.runForSteps(1);
  t.mouseMove(154, 0);
  await t.runForSteps(1);
  t.mouseMove(159, 0);
  await t.runForSteps(1);
  t.mouseMove(164, 0);
  await t.runForSteps(1);
  t.mouseMove(168, 0);
  await t.runForSteps(1);
  t.mouseMove(172, 0);
  await t.runForSteps(1);
  t.mouseMove(176, 0);
  await t.runForSteps(1);
  t.mouseMove(180, 0);
  await t.runForSteps(1);
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":6,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":6,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":6,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  }
]
