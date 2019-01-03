/**
 * Created by Joker on 19/1/3.
 */

const menu = [
    {
        key: 'test',
        link: 'test',
        name: '测试导航',
        icon: 'apple',
        child: [
            {
                key: 'test1',
                link: '/test/android',
                name: 'android下载数据',
            },
            {
                key: 'test2',
                link: '/test/ios',
                name: 'ios下载数据',
            },

            {
                key: 'too',
                link: 'too',
                name: '测试级联',
                icon: 'gitlab',
                child: [
                    {
                        key: 'too1',
                        link: '/test/too/git',
                        name: 'git下载数据',
                    },
                ]
            }
        ]
    }
]

export { menu }