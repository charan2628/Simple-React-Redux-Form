module.exports = api => {
    const isTest = api.env('test');
    if (isTest) return {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        node: 'current'
                    }
                }
            ],
            '@babel/preset-react'
        ]
    }
    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    'modules': false
                }
            ],
            [
                '@babel/preset-react',
                {
                    'modules': false
                }
            ]
        ]
    }
}