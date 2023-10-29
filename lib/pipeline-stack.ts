import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';

export class PipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

const cicdpipeline =  new CodePipeline(this, 'AwsCICDPipelineID', {
      synth: new ShellStep('Synth', {
        // Use a connection created using the AWS console to authenticate to GitHub
        // Other sources are available.
        input: CodePipelineSource.gitHub('divyasankhe/democicd1212', 'main'),

        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth',
        ],
      }),
    });






  }
}
