import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocuments extends Document {
 render() {
  return (
    <Html>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:ital,wght@0,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;1,700&display=swap" rel="stylesheet" />
      </Head>
    <body>
      <Main />
      <NextScript />
    </body>
    </Html>
  )
 }
}