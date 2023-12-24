// here you can set page configuration for page generator
// this is just for testing

export const PageConfig = [
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
