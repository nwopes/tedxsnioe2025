import './Footer.scss'
export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__header">
        <p className="Footer__header--text">WANNA ATTEND ?</p>
        <p className="Footer__header--desc">Register or contact us</p>
        <div className="Footer__header--buttons">
          <button className="Footer__header--buttons__register">Register</button>
          <button className="Footer__header--buttons__contact">Contact Us</button>
        </div>
      </div>
      <div className="Footer__below">
        <div className="Footer__below--sections">
          <p className="Footer__below--sections__item">Home</p>
          <img className="Footer__below--sections__divider" src="/Images/Footer/circle.png" />
          <p className="Footer__below--sections__item">About Us</p>
          <img className="Footer__below--sections__divider" src="/Images/Footer/circle.png" />
          <img className="Footer__below--sections__logo" src="/Images/Footer/logo.png" />
          <img className="Footer__below--sections__divider" src="/Images/Footer/circle.png" />
          <p className="Footer__below--sections__item">Our Speakers</p>
          <img className="Footer__below--sections__divider" src="/Images/Footer/circle.png" />
          <p className="Footer__below--sections__item">Sponsors</p>
        </div>
        <div className="Footer__below--logo">
          <img src="/Images/Footer/tedx.png" />
        </div>
        <div className="Footer__below--social">
          <img src="/Images/Footer/linkedin.png" />
          <img src="/Images/Footer/insta.png" />
          <img src="/Images/Footer/fb.png" />
        </div>
      </div>
    </div>
  )
}