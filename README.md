<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Cloud Functions Hello World with Cloud Code

This is a sample application that runs on Cloud Run as a Run Function. It can be deployed across multi-regions or a single region.
## Table of Contents

* [Directory contents](#directory-contents)
* [Getting started with VS Code](#getting-started-with-vs-code)

## Directory contents
* `launch.json` - the required Cloud Code configurations
* `index.js` - This is the entry point of the application. When the function is invoked code execution beins here.
* `package.json` - includes configures necessary dependencies, including the Functions framework and Firestore. It also configures local emulation settings to allow local debugging.

## Getting started with VS Code

### Before you begin

1. If you're new to Google Cloud, [create an account](https://console.cloud.google.com/freetrial/signup/tos) to evaluate how our products perform in real-world scenarios. New customers also get $300 in free credits to run, test, and deploy workloads.

1. If you're testing this out to learn about the feature, [create a new project](https://pantheon.corp.google.com/projectselector2/home/dashboard) so that you can delete the project and all associated resources when you're finished.

   You can also use this template as a starting point to create a new function in a new or existing project.

1. Make sure that billing is enabled for your Cloud project. Learn how to [check if billing is enabled on a project](https://cloud.google.com/billing/docs/how-to/verify-billing-enabled).

1. [Enable the following APIs](https://pantheon.corp.google.com/projectselector2/apis/enableflow?apiid=cloudfunctions,cloudbuild.googleapis.com,artifactregistry.googleapis.com,run.googleapis.com,logging.googleapis.com,pubsub.googleapis.com&redirect=https:%2F%2Fcloud.google.com%2Ffunctions%2Fdocs%2Fcreate-deploy-nodejs):

    * Cloud Functions
    * Cloud Build
    * Artifact Registry
    * Cloud Run
    * Logging
    * Pub/Sub
    
1. Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). Git is required for copying samples to your machine.

1. Install the [Cloud Code plugin](https://cloud.google.com/code/docs/vscode/install#installing) if you haven't already.

#### Create a function manually

To create a new function manually using the Google Console, follow these steps:

1. Click ![Cloud Code icon](https://cloud.google.com/static/code/docs/vscode/images/cloudcode-icon.png) **Cloud Code** and then expand the **Cloud Functions** section.

   **Refresh**.

#### Deploy a function using the gcloud CLI

To deploy a function using the gcloud CLI, follow these steps:

1. Right-click a function and select **Deploy function**.


#### Confirm deployment success
The function's deployment may take a few minutes.

If the deployment fails, refer to the **Output** tab for the error message. Clicking the link takes you to the build logs in Google Cloud console and provides more detail about the error.