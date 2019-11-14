import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import AdvancedScheduling = require('../lib/advanced-scheduling-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new AdvancedScheduling.AdvancedSchedulingStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});