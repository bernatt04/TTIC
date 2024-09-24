// frontend/pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Definimos las variantes de animación para crear un efecto de rebote y zoom
  const variants = {
    hidden: { opacity: 0, scale: 0.8, x: -50 },
    enter: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.6, type: 'spring', stiffness: 100 } },
    exit: { opacity: 0, scale: 0.8, x: 50, transition: { duration: 0.6, type: 'spring', stiffness: 100 } },
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <AnimatePresence mode='wait'>
        <motion.div
          key={router.route}
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          style={{ position: 'relative' }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
