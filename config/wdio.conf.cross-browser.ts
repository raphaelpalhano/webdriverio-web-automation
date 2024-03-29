import type { Options } from '@wdio/types'
import { config as baseConfig } from './wdio.conf.ts'

export const config: Options.Testrunner = {
    ...baseConfig,
    capabilities: [
        {
            maxInstances: 5,
            browserName: 'chrome',
            acceptInsecureCerts: true
        },
        {
            maxInstances: 5,
            browserName: 'firefox',
            acceptInsecureCerts: true
        }
    ]
}
