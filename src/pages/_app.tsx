import type { AppProps } from 'next/app'
import '@splidejs/react-splide/css';
import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
