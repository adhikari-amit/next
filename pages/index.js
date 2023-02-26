import Head from 'next/head'
import Script from 'next/script'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Social from '@/components/Social'
import About from '@/components/About'
import Projects from '@/components/Projects'

import Resume from '@/components/Resume'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'


// import styles from './index.module.css'

function index() {

  return (
    <>
      <Head>
        <title>Amit | Developer & Learner</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Hi, I'm amit. A full stack Developer.I am an Engineer by heart and a Full stack Developer by Passion." />
        <meta name="keywords" content="amit, amit adhikari, full stack developer, node js, react js, php, codeigniter, database, mysql, aws, dynamodb, lambda" />
        <meta name="twitter:card" content="Amit Adhikari | Full Stack Developer" />
        <meta name="twitter:creator" content="Amit Adhikari" />
        <meta property="og:image" content="https://www.amamit.in/assets/images/undraw/me.jpg" />
        <meta property="og:title" content="Amit Adhikari | Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer | Engineer by heart and Developer by Passion " />
        <meta property="og:url" content="https://amamit.in" />
        <meta name="author" content="Amit Adhikari" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="shortcut icon" href="https://amamit.in/assets/images/undraw/naruto.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;700&display=swap'" />
      </Head>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-T62DTL6YKP"></Script>
      <Script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag() {dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-T62DTL6YKP');
        `}
      </Script>
      <Script src="/js/jquery.min.js"></Script>
      <Script src="/js/plugins.js"></Script>

      <Social />
      <Navbar />
      <About />
      <Projects />
      <Resume />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

export default index