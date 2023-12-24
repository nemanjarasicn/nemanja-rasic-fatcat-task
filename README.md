# FatCat homework task

Homework task for tehical interview

## Install

Follow the bellow steps to install the application:

1. download the repository

    ```bash
    git clone https://gitea.msapp.info/kroberg/enfis.git
    ```

2. install requirments

    ```bash
        cd homework-task
        npm install
    ```

3. Run app

    ```bash
        npm run dev
    ```

## Update

Simply run:

    ```bash
    git pull origin
    ```

## Local Development Environment

App running vite server

### Build the image

In order to build the image, run the following command:

`npm run build`

#### Test the application

In order to test the application open a browser and enter the following link

[Local](http://localhost:3000)

All configuration for the page can be found in '@homework-task\src\pageConfig.ts'. You can modify the object to display other components and layouts.

Here is example of PageConfig object which we use for PageGenerator:

```ts
const data = [
    {
        type: 'layoutSection',
        props: { background: 'bg-red', title: 'List of users' },
        components: [
            {
                type: 'componentList',
                props: {},
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { background: 'bg-yellow', title: 'Form generator' },
        components: [
            {
                type: 'componentForm',
                props: {},
            },
        ],
    },
];
```
