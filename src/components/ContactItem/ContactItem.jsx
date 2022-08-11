import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

export function ContactItem({ id, name, number, onClick }) {
  return (
    <li className={styles.contactItem}>
      <p>
        {name} : {number}
      </p>
      <button type="button" onClick={() => onClick(id)}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
