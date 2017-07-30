import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../../webpack.config.dev';

export default (app) => {
  if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(webpackConfig);
    app.use(webpackMiddleware(compiler, {
      hot: true,
      publicPath: webpackConfig.output.publicPath,
      noInfo: true,
    }));
    app.use(webpackHotMiddleware(compiler));
  }
};
