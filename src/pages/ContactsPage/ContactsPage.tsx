import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Contacts.module.scss';

interface Contact {
  photo: string;
  name: string;
  linkedIn: string;
  github: string;
}

export const ContactsPage: FC = () => {
  const contacts: Contact[] = [
    {
      photo: 'https://avatars.githubusercontent.com/u/110284208?v=4',
      name: 'Eugene Sherepa',
      linkedIn: 'https://www.linkedin.com/in/yevhenii-sherepa-964ba2283/',
      github: 'https://github.com/EugeneSherepa',
    },
  ];

  return (
    <>
      <div className={styles.text}>
        <h1>Looking for new Developer?</h1>
        <p>
          I am a creative and self motivated full-stack developer who have
          created this service. You can contact me using links below. I am
          opened to any offers!
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
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
