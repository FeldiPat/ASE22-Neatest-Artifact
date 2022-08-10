const test0 = async function (t) {
  await t.runForSteps(1);
}
const test1 = async function (t) {
  t.keyPress('space', 6);
  await t.runForSteps(6);
  await t.runForSteps(1);
}
const test2 = async function (t) {
  t.keyPress('space', 6);
  await t.runForSteps(6);
  await t.runForSteps(1);
  await t.runForSteps(9);
  await t.runForSteps(10);
}
const test3 = async function (t) {
  t.keyPress('space', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  await t.runForSteps(30);
  await t.runForSteps(28);
  await t.runForSteps(25);
  t.keyPress('space', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  await t.runForSteps(26);
}
const test4 = async function (t) {
  t.keyPress('space', 5);
  await t.runForSteps(5);
  await t.runForSteps(1);
  await t.runForSteps(25);
  await t.runForSteps(25);
  await t.runForSteps(24);
  await t.runForSteps(24);
  await t.runForSteps(23);
  t.keyPress('space', 5);
  await t.runForSteps(5);
  await t.runForSteps(1);
  await t.runForSteps(25);
  await t.runForSteps(25);
  await t.runForSteps(24);
  await t.runForSteps(23);
  await t.runForSteps(24);
  await t.runForSteps(25);
  await t.runForSteps(25);
  t.keyPress('space', 5);
  await t.runForSteps(5);
  await t.runForSteps(1);
  await t.runForSteps(24);
  await t.runForSteps(25);
}
const test5 = async function (t) {
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(17);
  await t.runForSteps(17);
  await t.runForSteps(6);
  await t.runForSteps(6);
  await t.runForSteps(6);
  await t.runForSteps(6);
  await t.runForSteps(7);
  await t.runForSteps(7);
  await t.runForSteps(19);
  await t.runForSteps(14);
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(26);
  await t.runForSteps(27);
  await t.runForSteps(14);
  await t.runForSteps(15);
  await t.runForSteps(21);
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(25);
  await t.runForSteps(25);
  await t.runForSteps(15);
  await t.runForSteps(13);
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":11,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":11,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":11,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":11,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":11,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  },
  {
      test: test5,
      name: 'Generated Test',
      description: '',
      categories: [],
      type: 'neuroevolution',
      configs: {"testSuiteType":"dynamic","timeout":10000,"eventSelection":"activation","seed":11,"durations":{"waitStepUpperBound":50,"pressDurationUpperBound":10,"soundDuration":10,"clickDuration":10}},
  }
]
