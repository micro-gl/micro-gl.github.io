import  '../src/theme/index.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} className='w-screen h-screen' />
  )
}

export default MyApp