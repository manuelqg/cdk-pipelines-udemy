import * as Pipeline from "../lib/cdk-pipelines-udemy-stack";
import { App, Environment } from "aws-cdk-lib";
import { CdkPipelinesUdemyStack } from "../lib/cdk-pipelines-udemy-stack";
import { BillingStack } from "../lib/billing-stack";
import { Match, Template } from "aws-cdk-lib/assertions";

const testEnv: Environment = {
  region: "us-east-1",
  account: "123456789",
};

test("Pipeline Stack", () => {
  const app = new App();
  // WHEN
  const stack = new Pipeline.CdkPipelinesUdemyStack(app, "MyTestStack", {
    env: testEnv,
  });
  // THEN

  expect(Template.fromStack(stack).toJSON()).toMatchSnapshot();
});

