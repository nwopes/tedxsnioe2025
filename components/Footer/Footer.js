import Link from 'next/link'
import './Footer.scss'
import { usePathname } from "next/navigation";
export default function Footer() {
  const pathName = usePathname();
  const scrollTo = async (id) => {
    if (pathName !== '/') {
        await router.push('/');
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    } else {
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    }

};
  return (
    <div className="Footer">
      <div className="Footer__header">
        <p className="Footer__header--text">WANNA ATTEND ?</p>
        <p className="Footer__header--desc">Register or contact us</p>
        <div className="Footer__header--buttons">
          <button className="Footer__header--buttons__register">Register</button>
          <Link href='/contact'>
            <button className="Footer__header--buttons__contact">Contact Us</button>
          </Link>
        </div>
      </div>
      <div className="Footer__below">
        <div className="Footer__below--sections">
          <Link href='/'><p className="Footer__below--sections__item">Home</p></Link>
          <img className="Footer__below--sections__divider" src="/Images/Footer/circle.png" />
          <p onClick={() => scrollTo("about")} className="Footer__below--sections__item">About Us</p>
          <img className="Footer__below--sections__divider" src="/Images/Footer/circle.png" />
          <Link href='/'><img className="Footer__below--sections__logo" src="/Images/Footer/logo.png" /></Link>
          <img className="Footer__below--sections__divider" src="/Images/Footer/circle.png" />
          <Link href='/pastConferences'><p className="Footer__below--sections__item">Past Conferences</p></Link>
          <img className="Footer__below--sections__divider" src="/Images/Footer/circle.png" />
          <p onClick={() => scrollTo("sponsors")} className="Footer__below--sections__item">Sponsors</p>
        </div>
        <div className="Footer__below--logo">
          <img src="/Images/tedx_black.png" />
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