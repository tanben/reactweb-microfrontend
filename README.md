# README
This is a sample LaunchDarkly implementation for a micro frontend application(MFE) demonstrating the following use-cases:
* Single Project -  Using a single LaunchDarkly React client SDK instance

* Multi-Project - Using multiple LaunchDarkly React client SDK instance

## Overview
![](./img/overview.jpg)

## Packages
![](./img/packages.jpg)

## LaunchDarkly Project Scope
![](./img/ld-projects.jpg)

## Tech Stack
* [Lerna](https://www.npmjs.com/package/lerna)
* [Reach v18.x](https://react.dev/blog/2022/03/29/react-v18)
* [Webpack 5 Module Federation](https://module-federation.github.io/)
* [LaunchDarkly Feature Management Platform](https://launchdarkly.com/)

## Requirements
* NodeJS  >=v16.x
* Lerna >=v7.x
* React v18.x
* Webpack v5.x
* LaunchDarkly Account


## Setup
### Feature Flags
Create the following feature flags using the specified flag keys.

| Project | flag key | flag type | decription|
|---|---|---|---|
|Proj-1, Proj-2|simple-toggle| boolean|toggles flag status on page components|
|Proj-1, Proj-2|enable-message| boolean|toggles message displayed in the body component|
|Proj-1|enable-new-header| boolean|toggles new Header component|

LD Proj-1
![Proj1](img/ldFlagDashboard1.jpg)
LD Proj-2
![Proj2](img/ldFlagDashboard2.jpg)


>
1. Install [lerna](https://www.npmjs.com/package/lerna) for access to the lerna CLI.
2. Install dependencies.

```
> lerna bootstrap --hoist
or 
> npx lerna bootstrap --hoist
```

3. Create the file `start.sh` with the Client SIDE ID  from your LaunchDarkly projects.
   
 ```
# LD PROJ-2 for the Body component
export CONTENT_CLIENT_ID= <Replace with LD_CLIENT_ID>


# LD PROJ-1 for the Shell, Header and Footer components
export SHELL_CLIENT_ID= <Replace with LD_CLIENT_ID>

# or npx lerna run start --parallel
lerna run start --parallel

```

4. Make the file `start.sh` executable and run script.
   
```
> chmod +x start.sh
> ./start.sh
```

