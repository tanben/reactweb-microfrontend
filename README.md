# Micro Frontend Application with LaunchDarkly React SDK

This is a sample micro frontend application that demonstrates how to manage React component states using either a single or multiple instances of the LaunchDarkly React Web client SDK.

## Architecture

![Architecture Diagram](./img/packages.jpg)

The application consists of the following packages:

- `components`: Shared React components used by the micro frontends
- `content`: A micro frontend that displays the main content of the application
- `shell`: The shell application that integrates the micro frontends

## Prerequisites

- NodeJS >=v16.x
- React >=v18.x
- Webpack >=v5.x
- LaunchDarkly Account

## Setup

### 1. Create LaunchDarkly Projects and Feature Flags

Create the following projects and feature flags in your LaunchDarkly account using the specified project and flag keys.

| Project             | Flag Key          | Flag Type | Description                                      |
|---------------------|-------------------|-----------|--------------------------------------------------|
| project-1, project-2| simple-toggle     | boolean   | Toggles flag status on page components           |
| project-1, project-2| enable-message    | boolean   | Toggles message displayed in the body component  |
| project-1           | enable-new-header | boolean   | Toggles new Header component                     |

![Project 1 Dashboard](img/ldFlagDashboard1.jpg)
![Project 2 Dashboard](img/ldFlagDashboard2.jpg)

> Note: A Terraform configuration is available in `./terraform` for provisioning the projects and flags.

### 2. Configure LaunchDarkly Client-Side IDs

Update the root `project.json` file and set your LaunchDarkly project client-side IDs:

```json
{
  "scripts": {
    "start:content": "CONTENT_CLIENT_ID=\"Client side ID\" npm --prefix packages/content start",
    "start:shell": "SHELL_CLIENT_ID=\"Client side ID\" npm --prefix packages/shell start"
  }
}
```

### 3. Install Dependencies

Run the following commands to install the dependencies for each package:

```bash
npm run install:components
npm run install:content 
npm run install:shell
```

### 4. Start the Application

To start the application, run the following npm scripts in separate terminals in the specified sequence:

```bash
npm run start:components
npm run start:content
npm run start:shell
```

The micro frontends and the shell application will be started, and you can access the application in your web browser
