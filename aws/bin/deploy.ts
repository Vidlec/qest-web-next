#!/usr/bin/env node
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import * as cdk from "@aws-cdk/core";
import { SsrStack } from "../lib/srr-stack";

const demoEnv = { region: "us-east-1" };
const app = new cdk.App();
new SsrStack(app, "QestWebAppStack", { env: demoEnv });
