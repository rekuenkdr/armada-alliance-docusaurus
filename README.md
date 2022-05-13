# Website

This website is a port from Gitbook of the [Armada Alliance Docs](https://github.com/armada-alliance/master) to [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

The website is deployed at Github Pages https://docs.armada-alliance.com

## Installation

```console
nvm use 
npm install
```

## Local Development

```console
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Creating a Doc

All the docs are inside the [docs folder](https://github.com/rekuenkdr/armada-alliance-docusaurus/tree/master/docs) . 

To add a new one just create an md or mdx file there, please check the [markdown features and components](https://docusaurus.io/docs/markdown-features
) that Docusaurus supports.


## Sidebar Links

The sidebar **is not automatically generated**, in order to add new links or documents to it you have to modify the [sidebar.js file](https://github.com/rekuenkdr/armada-alliance-docusaurus/blob/master/sidebars.js) .

Check the [Docusaurus Docs](https://docusaurus.io/docs/sidebar) to learn about this component.


## Translations using Crowdin 

Crowdin is a translation SaaS, offering a [free plan for open-source projects](https://crowdin.com/page/open-source-project-setup-request).

We recommend the following translation workflow:

- **Upload sources** to Crowdin (untranslated files)

```console
npm run crowdin:upload
```

- Use Crowdin to **translate the content**
- **Download translations** from Crowdin (localized translation files)
```console
npm run crowdin:download
```

Crowdin provides a [CLI](https://support.crowdin.com/cli-tool/) that is installed as dependency to this project, this CLI allows to **upload sources** and **download translations**,
The [`crowdin-v2.yaml` configuration file](https://support.crowdin.com/configuration-file/) is convenient for Docusaurus, and permits to **download the localized translation files at the expected location** (in `i18n/[locale]/..`).

Read the **[official documentation](https://support.crowdin.com/)** to know more about advanced features and different translation workflows.

This repository uploads the source files and downloads the translations automatically on every deploy to GH-Pages.

For convenience you can use the following command to upload and download:

```console
npm run crowdin:sync
```


### Adding a new language

After adding a language in Crowdin UI, you can enable it to make it available on the website adding it to the [locales array](https://github.com/rekuenkdr/armada-alliance-docusaurus/blob/032b867e521f8db515215cb82a3ab4df4678b447/docusaurus.config.js#L14) .

Add the locale to [crowdin-v2.yaml](https://github.com/rekuenkdr/armada-alliance-docusaurus/blob/032b867e521f8db515215cb82a3ab4df4678b447/crowdin-v2.yaml#L4) exported_languages array too, although it doesn't seem to be taking it into consideration at this moment.

For a deep understanding of the translation workflow please refer to [the Docusarus Documentation](https://docusaurus.io/docs/i18n/crowdin)

Before you can use Crowdin is mandatory to set **the environmental variables**.


## Environmental Variables

Create a .env file containing this two variables:

```console
CROWDIN_PERSONAL_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CROWDIN_PROJECT_ID=XXXXXX
```

Replace **CROWDIN_PERSONAL_TOKEN** value with your own [personal token](https://crowdin.com/settings#api-key)

Do the same with **CROWDIN_PROJECT_ID**, you can find your project's id at ``` https://crowdin.com/project/<MY_PROJECT_NAME>/settings#api```


## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.


## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

Don't forget to create the environmental variables for Crowdin as Github secrets or the build will fail. 

For automated CI a [Github workflow](https://github.com/rekuenkdr/armada-alliance-docusaurus/blob/master/.github/workflows/translate_and_deploy.yml) called **translate_and_deploy.yml** is avaliable inside [.github/workflows](https://github.com/rekuenkdr/armada-alliance-docusaurus/tree/master/.github/workflows) folder.
