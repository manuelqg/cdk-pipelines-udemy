import * as cdk from 'aws-cdk-lib';
import { Template, Match } from 'aws-cdk-lib/assertions';
import {Budget} from '../../lib/constructs/budget';

test('Budget Construct', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'Stack');
    new Budget(stack, 'Budget', {
        budgetAmount: 1,
        emailAddress: 'test@cdk.com'
    })
    Template.fromStack(stack).hasResourceProperties("AWS::Budgets::Budget", {
        Budget: {
          BudgetLimit: {
            Amount: 1,
          },
        },
        NotificationsWithSubscribers: [
          Match.objectLike({
            Subscribers: [
              {
                Address: "test@cdk.com",
                SubscriptionType: "EMAIL",
              },
            ],
          }),
        ],
      });
})
