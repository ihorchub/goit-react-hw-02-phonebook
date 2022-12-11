import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contactList, onDeleteContact }) => {
  return (
    <div>
      <ul>
        {contactList.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <ContactItem name={name} number={number} />
              <button type="button" onClick={() => onDeleteContact(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
