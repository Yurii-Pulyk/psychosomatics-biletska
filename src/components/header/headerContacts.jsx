import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaViber } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import css from './headerContacts.module.css';

export default function HeaderContacts() {
  return (
    <div className={css.navBlok}>
      <ul className={css.navList}>
        <li>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="Viber">
            <FaViber />
          </a>
        </li>
        <li>
          <a href="Telegram">
            <FaTelegramPlane />
          </a>
        </li>
      </ul>
      <div className={css.contacts}>
        <p>
          Phone: <a href="tel:+1234567890">+1 234 567 890</a>v
        </p>
        <p>
          Email: <a href="mailto:example@mail.com">example@mail.com</a>
        </p>
      </div>
    </div>
  );
}
