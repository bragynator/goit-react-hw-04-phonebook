import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export function Filter({ filter, onChange }) {
  return (
    <label className={styles.filter}>
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
