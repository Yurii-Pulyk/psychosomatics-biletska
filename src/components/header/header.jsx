import css from './header.module.css';
import HeaderContacts from './headerContacts';

export default function Header() {
  return (
    <>
      <div className={css.header}>
        <h1>Valeriia Biletska</h1>
        <HeaderContacts />
      </div>
    </>
  );
}
