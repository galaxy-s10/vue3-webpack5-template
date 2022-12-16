import chalk from 'chalk';
import WebpackDevServer from 'webpack-dev-server';

const localIPv4 = WebpackDevServer.internalIPSync('v4');

interface ITerminalPrintPlugin {
  port: string;
  path: string;
}

class TerminalPrintPlugin {
  options: ITerminalPrintPlugin;

  constructor(options: ITerminalPrintPlugin) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.done.tapAsync(
      'TerminalPrintPlugin',
      (compilation, callback) => {
        console.log('  App running at:');
        console.log(
          `- Local:   ${chalk.cyan(`http://localhost${this.options.local}`)}`
        );
        console.log(
          `- Network: ${chalk.cyan(`${localIPv4!}${this.options.network}`)}`
        );
        console.log();
        callback();
      }
    );
  }
}

export default TerminalPrintPlugin;
