import { Construct } from "constructs";
import { aws_budgets as budgets } from 'aws-cdk-lib';

interface BudgetProps {
    budgetAmount: number,
    emailAddress: string
}

export class Budget extends Construct {
    constructor(scope: Construct, id: string, props: BudgetProps) {
        super(scope, id)

        new budgets.CfnBudget(this, "Budget", {
            budget: {
                budgetLimit: {
                    amount: props.budgetAmount,
                    unit: 'USD'
                },
                budgetName: 'Monthly Budget created with CDK',
                budgetType: 'COST',
                timeUnit: 'MONTHLY',
            },
            notificationsWithSubscribers: [{
                notification: {
                  comparisonOperator: 'GREATER_THAN',
                  notificationType: 'ACTUAL',
                  threshold: 100,
                  thresholdType: 'PERCENTAGE',
                },
                subscribers: [{
                  address: props.emailAddress,
                  subscriptionType: 'EMAIL',
                }],
              }],
        })
    }
}