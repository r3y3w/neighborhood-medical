import qrcode from "../assets/images/QR-Code-rev1.jpg";

const Footer = () => {

    const copyrightDate = () => {
        return new Date().getFullYear()
      }

    return (
        <footer>
            <p className="pFooter">
                To DONATE scan Zelle® QR code here: 
                
            </p>
                <img className="qrcode" src={qrcode} alt="QR Code" /> 

            < p className="pFooter">
            Copyright © Neighborhood Medical| | {copyrightDate()} | all rights reserved
            </p>
        </footer>
    )

}

export default Footer;