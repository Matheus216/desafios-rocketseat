// Carregado somente uma vez 
import Document, { Head, Html, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
    render() { 
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap" 
                        rel="stylesheet" />
                    

                    <link rel="shortcut icon" href="/image/favicon.png" type="image/png" />

                    <title>ig.news</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}