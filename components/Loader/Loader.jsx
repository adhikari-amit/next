import Script from 'next/script'
import styles from './Loader.module.css'

const Loader = () => {
    
  <Script>
{`
  function handlePreloader() {
    if ($('.preloader').length) {
      $('.preloader').delay(200).fadeOut(500)
    }
  }

  $(window).on('load', function () {
    handlePreloader();
  })
  `
}

</Script>

  return (
    <>
       <div className={styles.preloader}></div>
    </>
  )
}

export default Loader