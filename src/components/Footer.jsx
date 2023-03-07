const Footer = () => {

    const copyrightDate = () => {
        return new Date().getFullYear()
      }

    return (
        <footer>
            <p>
            Copyright © Neighborhood Medical| | {copyrightDate()} | all rights reserved
            </p>
        </footer>
    )

}

export default Footer;