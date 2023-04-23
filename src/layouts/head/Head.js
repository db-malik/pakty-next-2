import NextHead from 'next/head'

const Head = ({ title, description, author, keywords, image }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#000000" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="author" content={author} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:type" content="website" />
    <link rel="icon" type="image/png" href="/favicon.ico" />
    {/* other link tags */}

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Nunito+Sans:wght@300;600;800&display=swap"
      rel="stylesheet"
    />
  </NextHead>
)

// This version includes the following meta tags:

// charSet: specifies the character encoding of the document
// viewport: sets the width of the viewport to the width of the device and scales the content to fit the screen
// description: provides a brief description of the page
// author: specifies the author of the page
// keywords: specifies the keywords that describe the page
// og:title: sets the title for social media sharing
// og:description: sets the description for social media sharing
// og:image: sets the image for social media sharing
// og:type: sets the type of the page for social media sharing

export default Head
