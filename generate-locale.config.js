const i18NextConfig = require('./next-i18next.config')

module.exports = {
    input: ['src/**/*.{ts,tsx}'],
    output: 'public/locales',
    options: {
        func: {
            list: ['t'],
            extensions: ['.ts', '.tsx'],
        },
        trans: false,
        lngs: i18NextConfig.i18n.locales,
        defaultLng: i18NextConfig.i18n.defaultLocale,
        ns: ['common', 'homepage'],
        defaultNs: 'common',
        defaultValue: (lng, ns, key) => `missing - ${lng}.${ns}.${key}`,
        resource: {
            loadPath: './public/locales/{{lng}}/{{ns}}.json',
            savePath: '{{lng}}/{{ns}}.json',
            jsonIndent: 2,
            lineEnding: '\n',
        },
        nsSeparator: ':',
        keySeparator: '.',
    },
}
