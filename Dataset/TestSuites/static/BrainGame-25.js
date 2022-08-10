const test0 = async function (t) {
  await t.runForSteps(1);
}
const test1 = async function (t) {
  t.clickSprite('Play', 10);
  await t.runForSteps(1);
  await t.runForSteps(24);
  await t.runForSteps(20);
}
const test2 = async function (t) {
  t.clickSprite('Play', 10);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
}
const test3 = async function (t) {
  t.clickSprite('Play', 10);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  await t.runForSteps(32);
}
const test4 = async function (t) {
  t.clickSprite('Play', 10);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  await t.runForSteps(28);
  await t.runForSteps(28);
}
const test5 = async function (t) {
  t.clickSprite('Play', 10);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.mouseMove(-27, -156);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.mouseMove(-31, -159);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.mouseMove(-33, -161);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.mouseMove(-33, -161);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.mouseMove(-31, -159);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.mouseMove(-30, -158);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.mouseMove(-24, -153);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.mouseMove(-30, -158);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.mouseMove(-32, -160);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.mouseMove(-25, -154);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.mouseMove(-25, -154);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.mouseMove(-34, -162);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.mouseMove(-33, -160);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.mouseMove(-33, -160);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.mouseMove(-32, -160);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.mouseMove(-58, -172);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.mouseMove(-62, -173);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.mouseMove(-59, -173);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.mouseMove(-56, -172);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.mouseMove(-57, -172);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.mouseMove(-59, -173);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.mouseMove(-57, -172);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.mouseMove(-54, -171);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.mouseMove(-58, -172);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.mouseMove(-60, -173);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.mouseMove(-58, -172);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.mouseMove(-56, -172);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.mouseMove(-58, -172);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.mouseMove(-57, -172);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.mouseMove(-55, -171);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.mouseMove(-55, -171);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.mouseMove(-61, -173);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.mouseMove(-62, -173);
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
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":25,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test5,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":25,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  }
]
