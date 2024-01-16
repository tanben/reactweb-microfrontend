# LaunchDarkly Terraform configuration
This Terraform configuration provisions the projects and flag keys used in this sample application.



| Project              | flag key          | flag type | decription                                      |
| -------------------- | ----------------- | --------- | ----------------------------------------------- |
| project-1, project-2 | simple-toggle     | boolean   | toggles flag status on page components          |
| project-1, project-2 | enable-message    | boolean   | toggles message displayed in the body component |
| project-1            | enable-new-header | boolean   | toggles new Header component                    |

## Requirements
* Terraform >=v.013
* LaunchDarkly Terraform provider ~ 2.17.x
* [LaunchDarkly access token](https://docs.launchdarkly.com/home/account-security/api-access-tokens)
  

## Set up
1. Create a LaunchDarkly access token for details read [Creating API access tokens](https://docs.launchdarkly.com/home/account-security/api-access-tokens#creating-api-access-tokens).
2. Create a Terraform variable definition file (terraform.tfvars) and assign your access token to `access_token`.

```
access_token="api-xxxx-xxxxxx-xxxx"

```


## Running Terraform
1. Initialze your working directory.
   ```
   > terraform init
2. Create the execution plan
   ```
   > terraform plan
   ```
3. Execute the plan
   ```
   > terraform apply
   ```

