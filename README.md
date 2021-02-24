# Introduction 

# How to deploy
We can reuse certificate and hosted zone from CMS of web (its arn is filled at aws/bin/deploy.ts)

1. deploy dev (s3, cloudfront)
yarn deploy:dev

2. deploy prod (s3, cloudfront)
yarn deploy:prod
