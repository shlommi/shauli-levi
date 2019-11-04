import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
		  <link rel="apple-touch-icon" sizes="57x57" href="/static/images/apple-icon-57x57.png"/>
			<link rel="apple-touch-icon" sizes="60x60" href="/static/images/apple-icon-60x60.png"/>
			<link rel="apple-touch-icon" sizes="72x72" href="/static/images/apple-icon-72x72.png"/>
			<link rel="apple-touch-icon" sizes="76x76" href="/static/images/apple-icon-76x76.png"/>
			<link rel="apple-touch-icon" sizes="114x114" href="/static/images/apple-icon-114x114.png"/>
			<link rel="apple-touch-icon" sizes="120x120" href="/static/images/apple-icon-120x120.png"/>
			<link rel="apple-touch-icon" sizes="144x144" href="/static/images/apple-icon-144x144.png"/>
			<link rel="apple-touch-icon" sizes="152x152" href="/static/images/apple-icon-152x152.png"/>
			<link rel="apple-touch-icon" sizes="180x180" href="/static/images/apple-icon-180x180.png"/>
			<link rel="icon" type="image/png" sizes="192x192"  href="/static/images/android-icon-192x192.png"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="96x96" href="/static/images/favicon-96x96.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon-16x16.png"/>
			<link rel="manifest" href="/static/images/manifest.json"/>
			<meta name="msapplication-TileColor" content="#ffffff"/>
			<meta name="msapplication-TileImage" content="/static/images/ms-icon-144x144.png"/>
			<meta name="theme-color" content="#ffffff"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}