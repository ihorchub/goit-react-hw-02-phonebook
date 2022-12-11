import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contactList }) => {
  return (
    <div>
      <ul>
        {contactList.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <ContactItem name={name} number={number} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
