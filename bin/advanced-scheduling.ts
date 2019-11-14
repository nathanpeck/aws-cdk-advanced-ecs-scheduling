#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { AdvancedSchedulingStack } from '../lib/advanced-scheduling-stack';

const app = new cdk.App();
new AdvancedSchedulingStack(app, 'AdvancedSchedulingStack');
