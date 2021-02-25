// script for build project also into next serverless shape (prepare for AWS lambda deploy)
const path = require('path');
const { Builder } = require('@sls-next/lambda-at-edge');

const nextConfigDir = './';
const outputDir = path.join(nextConfigDir, '.serverless_nextjs');

const builder = new Builder(
    nextConfigDir,
    outputDir,
    {
        cmd: './node_modules/next/dist/bin/next',
        cwd: process.cwd(),
        env: {},
        args: ['build']
    }
);

builder.build().then(() => process.exit).catch(console.error);

