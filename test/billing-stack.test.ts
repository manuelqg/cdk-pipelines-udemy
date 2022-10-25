import * as cdk from 'aws-cdk-lib';
import { Template, Match} from 'aws-cdk-lib/assertions';
import {BillingStack} from '../lib/billing-stack';

test('Billing Stack', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'Stack');
    new BillingStack(app, 'BillingStack', {
        budgetAmount: 3,
        emailAddress: 'test@cdk.com'
    })
     // Prepare the stack for assertions.
     const template = Template.fromStack(stack);
     expect(template.toJSON()).toMatchSnapshot();
})
