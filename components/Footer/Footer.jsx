const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a className="btn btn-primary btn-floating m-1 btn-footer"  style={{background:"#3C5A98", border: "none"}}
                        href="https://www.linkedin.com/in/amitadhikari-" role="button" target="_blank"><i
                            className="fa-brands fa-linkedin-in"></i></a>
                    <a className="btn btn-primary btn-floating m-1 btn-footer"  style={{background:"#55acee", border: "none"}}
                        href="https://twitter.com/_amamit_" role="button" target="_blank"> <i className="fa-brands fa-twitter" ></i></a>

                    <a className="btn btn-primary btn-floating m-1 btn-footer"  style={{background:"#DC4F42", border: "none"}}
                        href="https://www.instagram.com/_amamit_" role="button" target="_blank"><i
                            className="fa-brands fa-instagram"></i></a>
                    <a className="btn btn-primary btn-floating m-1 btn-footer"  style={{background:"#333333", border: "none"}}
                        href="https://github.com/adhikari-amit" role="button" target="_blank"><i className="fa-brands fa-github"></i></a>
                </section>
            </div>
            <div className="text-center p-3" style={{backgroundColor:" rgba(0, 0, 0, 0.2)"}}>
                <i className="fa-solid fa-phone"></i> 7431858630
                <br />
                <a className="text-white" href="mailto:adhikariamit2001@gmail.com"><i className="fa-solid fa-envelope"></i>
                    adhikariamit2001@gmail.com</a>
            </div>
        </footer>
    )
}

export default Footer