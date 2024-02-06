import type { Options } from '@wdio/types';
import { config as baseConfig } from './wdio.conf.ts';
const headless: boolean = process.env.HEADLESS as unknown as boolean;

const browserOptions = {
  args: headless
    ? ['--disable-web-security', '--headless', '--disable-dev-shm-usage', '--no-sandbox', '--window-size=1920,1080', '--disabled-extensions']
    : ['--disable-web-security', '--disable-dev-shm-usage', '--no-sandbox', '--window-size=1920,1080', '--disabled-extensions']
};

export const config: Options.Testrunner = {
    ...baseConfig,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'MicrosoftEdge',
      'ms:edgeOptions': browserOptions
      
    }
  ],
  services: ['edgedriver']
};