// import Logo from '../logos';
import Logo from '../logos';
import {
    gbPLContentMediaQuery,
    fallbackMediaQuery,
    plAltContentMediaQuery,
    messageLogoWidth
} from '../../../GB/mutations/mediaQueries';

export default {
    'layout:text': [
        [
            'default',
            ({ textSize }) => ({
                styles: [fallbackMediaQuery(textSize * 13), messageLogoWidth(false, textSize * 4, textSize * 1.25)],
                logo: Logo.PRIMARY.COLOR,
                headline: [
                    {
                        tag: 'medium',
                        // replace: [['', '']],
                        br: ['on']
                    },
                    { tag: 'small' }
                ],
                disclaimer: ['default']
            })
        ],
        [
            'logo.type:primary',
            ({ textSize }) => ({
                styles: [fallbackMediaQuery(textSize * 13), messageLogoWidth(false, textSize * 4, textSize * 1.25)]
            })
        ],
        [
            'logo.type:primary && logo.position:right',
            ({ textSize }) => ({
                styles: [
                    fallbackMediaQuery(textSize * 13),
                    gbPLContentMediaQuery(textSize * 38 + 10),
                    messageLogoWidth(textSize * 6, textSize * 4, textSize * 1.25)
                ]
            })
        ],
        [
            'logo.type:primary && logo.position:top',
            ({ textSize }) => ({
                styles: [
                    fallbackMediaQuery(textSize * 13),
                    messageLogoWidth(textSize * 6, textSize * 4, textSize * 1.25)
                ]
            })
        ],
        [
            'logo.type:alternative',
            ({ textSize }) => ({
                styles: [
                    plAltContentMediaQuery(textSize * 17, textSize * 33, textSize * 23),
                    fallbackMediaQuery(textSize * 20),
                    messageLogoWidth(textSize * 1.75, textSize * 4, textSize * 1.25)
                ],
                logo: Logo.PRIMARY.COLOR[0]
            })
        ],
        [
            'logo.type:none',
            ({ textSize }) => ({
                styles: [fallbackMediaQuery(textSize * 16)],
                logo: false
            })
        ],
        [
            'logo.type:inline',
            ({ textSize }) => ({
                styles: [fallbackMediaQuery(textSize * 17 + 2)],
                logo: false
            })
        ],
        ['text.color:white && logo.type:primary', { logo: Logo.PRIMARY.WHITE }],
        [
            'text.color:white && logo.type:inline',
            ({ textSize }) => ({
                styles: [fallbackMediaQuery(textSize * 17 + 2)],
                logo: false
            })
        ],
        ['text.color:white && logo.type:alternative', { logo: Logo.PRIMARY.WHITE[0] }]
    ],

    'layout:flex': [
        [
            'default',
            {
                logo: Logo.PRIMARY.WHITE,
                headline: [
                    {
                        tag: 'medium',
                        replace: [['purchases.', 'purchases']]
                    }
                ],
                disclaimer: 'xsmall'
            }
        ],
        [
            'ratio:20x1',
            {
                headline: [
                    'default',
                    {
                        tag: 'medium',
                        replace: [['purchases.', 'purchases']],
                        br: ['eligible ']
                    }
                ]
            }
        ],
        [
            'ratio:8x1',
            {
                headline: [
                    'default',
                    {
                        tag: 'medium',
                        replace: [['purchases.', 'purchases']],
                        br: ['eligible ']
                    }
                ]
            }
        ],

        [
            'color:gray',
            {
                logo: Logo.PRIMARY.COLOR
            }
        ],
        [
            'color:white',
            {
                logo: Logo.PRIMARY.COLOR
            }
        ],
        [
            'color:black',
            {
                logo: Logo.PRIMARY.WHITE
            }
        ]
    ]
};
