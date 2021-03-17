# Intro

This page describes information about Qest web.

# Web

-   two environments: development and production
-   current URLs:
    -   development: https://dev.web.qestapp.net
    -   production: https://web.qestapp.net
-   git: https://dev.azure.com/qest/Qest/_git/qest-web-react-2.0
-   PR pipeline (trigger when master branch change): https://dev.azure.com/qest/Qest/_build?definitionId=241
-   Release pipeline (trigger when master branch change for deploy dev, prod has to be approved): https://dev.azure.com/qest/Qest/_release?_a=releases&view=mine&definitionId=124
-   framework: Next.js
-   language: TypeScript
-   type: static web - build at CICD

## Web AWS architecture

-   project is built at CICD and deployed into AWS S3 bucket (with CloudFront - CDN)
-   during build is fetched GraphQL data from CMS and builded as statics HTMLs
-   CICD also during release create invalidation of CDN (html and images)
-   infrastructure is written at AWS CDK tool (infrastructure as code)
-   current AWS stack:
    -   s3 for storing static web HTMLs
    -   cloud front for s3 HTMLs (CDN)
    -   reused from CMS - route53 hosted zone web.qestapp.net
    -   reused from CMS - certificate for web.qestapp.net

## How to deploy Web

We can reuse certificate and hosted zone from CMS of web (its arn is filled at aws/bin/deploy.ts)

0. (if you want reuse certificate and hosted zone) fill variables - `fill variables: hostedZone, hostedZoneId and cdnCertificateArn into aws/bin/deploy.ts`
1. deploy dev (s3, cloudfront) -`yarn deploy:dev`
2. deploy prod (s3, cloudfront) -`yarn deploy:prod`

## Automatically release of web after CMS updates

-   idea: after updates at CMS (texts, images) build, deploy and invalidate CDN (=run Release CICD at TFS)
-   flow:
    -   when is: deleted, published, unpublished change for text and images is triggered API hook
    -   API hook call EP /webhook at backend of strapi, here is implemented controller: `packages/strapi-cms/api/webhook/controllers/webhook.js`
    -   there is generated authToken for simple secure EP
    -   controller create POST call into TFS (with credentials from envs)
    -   TFS runs release pipeline
    -   note: there is duplication of pipeline for deploy production (because I do not find solution how to trigger explicitly second stage via REST API): https://dev.azure.com/qest/Qest/_release?view=all&_a=releases&definitionId=126
