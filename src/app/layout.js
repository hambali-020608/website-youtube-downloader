

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <link rel="icon" href="/download.ico" sizes="any" />
          <title>Youtube Downloader</title>
          <meta name="no ads, easy to use, and friendly user interface" content="youtube downloader" />
        </head>
        <body>
          <div id="root">{children}</div>
        </body>
      </html>
    )
  }