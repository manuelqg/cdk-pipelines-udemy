#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkPipelinesUdemyStack } from '../lib/cdk-pipelines-udemy-stack';
import { BillingStack } from '../lib/billing-stack';

const app = new cdk.App();
new CdkPipelinesUdemyStack(app, 'CdkPipelinesUdemyStack', {});
new BillingStack(app,'BillingStack', {
  budgetAmount: 250,
  emailAddress: 'manuelqg@amazon.com'
})