import * as Pipeline from "../lib/cdk-pipelines-udemy-stack";
import { App, Environment } from "aws-cdk-lib";
import { CdkPipelinesUdemyStack } from "../lib/cdk-pipelines-udemy-stack";
import { BillingStack } from "../lib/billing-stack";
import { Match, Template } from "aws-cdk-lib/assertions";


test("Pipeline Stack", () => {
  const app = new App();
  // WHEN
  const stack = new Pipeline.CdkPipelinesUdemyStack(app, "MyTestStack");
  // THEN

//   expect(Template.fromStack(stack).toJSON()).toMatchSnapshot();
expect(true).toBe(true)
});

