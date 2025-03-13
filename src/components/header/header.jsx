import css from './header.module.css';
import HeaderContacts from './headerContacts';

export default function Header() {
  return (
    <>
      <div className={css.header}>
        <h1>Valeria Biletsyka</h1>
        <HeaderContacts />
      </div>
    </>
  );
}
