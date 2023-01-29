import BilldHtmlWebpackPlugin from 'billd-html-webpack-plugin/package.json';
import BilldScss from 'billd-scss/package.json';
import { version as BilldUtilsVersion } from 'billd-utils';

console.table({
  'billd-utils version': BilldUtilsVersion,
  'billd-scss version': BilldScss.version,
  'billd-html-webpack-plugin version': BilldHtmlWebpackPlugin.version,
});
