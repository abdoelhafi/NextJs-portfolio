import '../styles/globals.css'
import Head from 'next/head'
import { Fragment } from 'react'
function MyApp({ Component, pageProps }) {
  
  return (
    <Fragment>
    <Head>
      <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
      crossOrigin="anonymous" 
      />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.1/css/bulma.min.css" />
        {/* <link rel="stylesheet" type="text/css" href="assets/css/styles.css" /> */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous" />
        <link rel="icon" type="image/x-icon" href="/img/hacker.png" />
        <title>Abdessamad EL HAFI</title>
        <meta name="description" content="abdessamad el hafi portfolio" />
      </Head>
    <Component {...pageProps} />
    </Fragment>
  )
   
}

export default MyApp
