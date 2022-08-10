const test0 = async function (t) {
  await t.runForSteps(1);
}
const test1 = async function (t) {
  await t.runForSteps(27);
  await t.runForSteps(27);
}
const test2 = async function (t) {
  t.mouseMove(97, -55);
  await t.runForSteps(1);
  t.mouseMove(13, -45);
  await t.runForSteps(1);
  t.mouseMove(117, -99);
  await t.runForSteps(1);
  t.mouseMove(70, -72);
  await t.runForSteps(1);
  t.mouseMove(130, -109);
  await t.runForSteps(1);
  t.mouseMove(112, -100);
  await t.runForSteps(1);
  t.mouseMove(138, -116);
  await t.runForSteps(1);
  t.mouseMove(134, -115);
  await t.runForSteps(1);
  t.mouseMove(144, -121);
  await t.runForSteps(1);
  t.mouseMove(144, -122);
  await t.runForSteps(1);
  t.mouseMove(148, -125);
  await t.runForSteps(1);
  t.mouseMove(149, -127);
  await t.runForSteps(1);
  t.mouseMove(151, -128);
  await t.runForSteps(1);
  t.mouseMove(153, -130);
  await t.runForSteps(1);
  t.mouseMove(154, -131);
  await t.runForSteps(1);
  t.mouseMove(156, -132);
  await t.runForSteps(1);
  t.mouseMove(157, -133);
  await t.runForSteps(1);
  t.mouseMove(158, -134);
  await t.runForSteps(1);
  t.mouseMove(159, -135);
  await t.runForSteps(1);
  t.mouseMove(160, -136);
  await t.runForSteps(1);
  t.mouseMove(161, -136);
  await t.runForSteps(1);
  t.mouseMove(161, -137);
  await t.runForSteps(1);
  t.mouseMove(162, -138);
  await t.runForSteps(1);
  t.mouseMove(163, -138);
  await t.runForSteps(1);
  t.mouseMove(163, -139);
  await t.runForSteps(1);
  t.mouseMove(164, -139);
  await t.runForSteps(1);
  t.mouseMove(164, -140);
  await t.runForSteps(1);
  t.mouseMove(165, -140);
  await t.runForSteps(1);
  t.mouseMove(167, -142);
  await t.runForSteps(1);
  t.mouseMove(166, -141);
  await t.runForSteps(1);
  t.mouseMove(166, -141);
  await t.runForSteps(1);
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":19,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":19,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":19,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  }
]
