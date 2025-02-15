import webpack from 'webpack';
import {BuildOptions} from './types/config';
import {buildPlugins} from './plugins'
import {buildLoaders} from './loaders'
import {buildResolvers} from './resolvers';
import {buildDevServer } from './devServer'


export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const {paths, mode, isDev} = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev ? buildDevServer(options) : undefined
  };
}