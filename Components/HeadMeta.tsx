import React from 'react'
import Head from 'next/head'

type Props = {}

const HeadMeta = (props: Props) => {

  return (
    <>
        <Head>
            <title>Weather.me</title>
            <meta name="description" content="Recommendations based on the weather!" />
            <link rel="icon" href="icon.ico" type="image/svg+xml" sizes="any"/>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
        </Head>
    </>
  )
}

export default HeadMeta