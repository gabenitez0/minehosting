import App from "next/app";
import Head from "next/head";
import "../static/icons/font/flaticon.css";

import Nav from "../components/Nav";

export default class Layout extends App {

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;600&display=swap"
            rel="stylesheet"
          ></link>
          <meta property="og:image" content="/static/discord.png" />
        </Head>
        <Nav/>
        <Component {...pageProps} />
        
        <style jsx global>{`
          ::selection {
            background: rgb(51, 51, 51);
            color: rgb(255, 255, 255);
          }
          :root {
            --color-primary: #00acec;
            --color-secondary: #333;
            --color-tertiary: rgba(52, 61, 72, 0.8);
          }
          html,
          body {
            font-family: Ubuntu, sans-serif;
            margin: 0;
            overflow-x: hidden;
            scroll-behavior: smooth;
            -webkit-font-smoothing: antialiased;
            text-shadow: rgba(0, 0, 0, 0.004) 1px 1px 1px;
          }

          h1 {
            color: var(--color-secondary);
            font-size: 32px;
            font-weight: 400;
            line-height: 1.31;
            letter-spacing: -0.025em;
            margin-bottom: 25px;
            margin-top: 0;
          }
          h1.h2 {
            margin: 0px;
            font-size: 26px;
            line-height: 1.5;
          }
          h2 {
            box-sizing: border-box;
            margin-top: 0px;
            margin-bottom: 0px;
            font-size: 20px;
            color: var(--color-secondary);
            font-weight: 400;
            letter-spacing: -0.025em;
          }
          h3 {
            box-sizing: border-box;
            margin-top: 0px;
            margin-bottom: 10px;
            font-size: 18px;
            color: var(--color-primary);
            font-weight: 400;
            line-height: 1.5;
            letter-spacing: -0.02em;
          }
          p {
            box-sizing: border-box;
            margin-top: 0px;
            margin-bottom: 0px;
            font-size: 16px;
            color: var(--color-tertiary);
            line-height: 2.1;
          }
          ul, ol{
            padding-left: 20px;
            line-height: 25px;
            color: var(--color-tertiary);
          }
          .title-section {
            box-sizing: border-box;
            margin-bottom: 40px;
            text-align: center;
          }
          .title-section span {
            box-sizing: border-box;
            margin-top: 0px;
            margin-bottom: 10px;
            font-size: 14px;
            color: var(--color-primary);
            display: block;
            font-weight: 700;
            text-align: center;
            letter-spacing: 0.15em;
            text-transform: uppercase;
          }

          .button-primary {
            cursor: pointer;
            display: inline-flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            color: rgb(255, 255, 255);
            background-color: var(--color-primary);
            border-radius: 4px;
            font-family: inherit;
            font-weight: 700;
            text-decoration: none;
            padding: 10px;
            border: 0px;
            transition: all 0.3s ease 0s;
            box-sizing: border-box;
            min-width: 120px;
            font-size: 14px;
            letter-spacing: 1px;
          }
          .button-primary:hover {
            box-shadow: rgb(161 180 234 / 40%) 0px 9px 20px -5px;
          }

          .link {
            cursor: pointer;
            display: inline-flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            min-height: 48px;
            border-radius: 0px;
            font-family: inherit;
            font-weight: 700;
            text-decoration: none;
            text-transform: capitalize;
            transition: all 0.3s ease 0s;
            border: 0px;
            height: auto;
            background-color: transparent;
            box-sizing: border-box;
            padding: 5px 10px;
            min-width: 130px;
            font-size: 14px;
            color: white;
            letter-spacing: 1px;
            text-transform: uppercase;
          }

          .container {
            margin-left: auto;
            margin-right: auto;
            padding-left: 30px;
            padding-right: 30px;
          }
          @media screen and (min-width: 480px) {
            h1 {
              font-size: 34px;
              margin-bottom: 25px;
            }
            h1.h2 {
              font-size: 26px;
            }
            h2 {
              font-size: 24px;
            }
            h3 {
              font-size: 20px;
              margin-bottom: 10px;
            }
            .button-primary {
              min-width: 156px;
            }
            .title-section {
              margin-bottom: 56px;
            }
          }
          @media (min-width: 768px) {
            .container {
              max-width: 750px;
            }
            h1 {
              font-size: 36px;
            }
            h1.h2 {
              font-size: 30px;
            }
            h3 {
              margin-bottom: 10px;
            }
          }
          @media (min-width: 992px) {
            .container {
              max-width: 970px;
            }
            h1.h2 {
              font-size: 40px;
            }
            h3 {
              margin-bottom: 20px;
            }
          }
          @media (min-width: 1220px) {
            .container {
              max-width: 1170px;
            }
          }
        `}</style>
      </>
    );
  }
}
