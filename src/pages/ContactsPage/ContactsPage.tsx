import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Contacts.module.scss';

interface Contact {
  photo: string;
  name: string;
  linkedIn: string;
  github: string;
  dou: string;
}

export const ContactsPage: FC = () => {
  const contacts: Contact[] = [
    {
      photo: 'https://avatars.githubusercontent.com/u/101824489?v=4',
      name: 'Denys Didenko',
      linkedIn: 'http://www.linkedin.com/in/denys-didenko',
      github: 'https://github.com/DidenkoDenis306',
      dou: 'https://dou.ua/users/eugene-sherepa',
    },
    {
      photo: 'https://avatars.githubusercontent.com/u/110284208?v=4',
      name: 'Eugene Sherepa',
      linkedIn: 'https://www.linkedin.com/in/eugene-sherepa-964ba2283/',
      github: 'https://github.com/EugeneSherepa',
      dou: 'https://dou.ua/users/eugene-sherepa/',
    },
    {
      photo: 'https://avatars.githubusercontent.com/u/58422219?v=4',
      name: 'Victor Panikar',
      linkedIn: 'https://www.linkedin.com/in/viktor-panikar/',
      github: 'https://github.com/PanyaPrimal',
      dou: 'https://dou.ua/users/eugene-sherepa',
    },
    {
      photo: 'https://avatars.githubusercontent.com/u/56607847?v=4',
      name: 'Stepan Haida',
      linkedIn: 'https://www.linkedin.com/in/stepan-haida-341117284/',
      github: 'https://github.com/serentinos',
      dou: 'https://dou.ua/users/eugene-sherepa',
    },
    {
      photo: 'https://avatars.githubusercontent.com/u/66055069?v=4',
      name: 'Ivan Khoroshylov',
      linkedIn: 'https://www.linkedin.com/in/ivan-khoroshylov-4287481b0/',
      github: 'https://github.com/ivankhrsh',
      dou: 'https://dou.ua/users/ivan-khoroshylov/',
    },
    {
      photo: 'eugene.jpg',
      name: 'Pavlo Levchenko',
      linkedIn: 'https://www.linkedin.com/in/eugene-sherepa',
      github: 'https://github.com/hekaq',
      dou: 'https://dou.ua/users/eugene-sherepa',
    },
  ];

  return (
    <>
      <div className={styles.text}>
        <h1>Looking for new Developers?</h1>
        <h2>We are your best choice!</h2>
        <p>
          Our team consists of creative and self motivated full-stack developers
          who have created this service. You can contact any of us using links
          below. We are opened to any offers!
        </p>
      </div>
      <div className={styles.contactsContainer}>
        {contacts.map((contact) => (
          <div key={contact.github} className={styles.contactBox}>
            <img src={contact.photo} alt={`${contact.name} Photo`} />
            <h2>{contact.name}</h2>
            <div className={styles.links}>
              <Link to={contact.linkedIn}>LinkedIn</Link>
              <Link to={contact.github}>GitHub</Link>
              <Link to={contact.dou}>Dou</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
