import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={css.item}>
      <span className={css.itemName}>{name}:</span>
      <span className={css.itemNumber}>{number}</span>
      <button
        type="button"
        onClick={() => onDeleteContact(id)}
        className={css.delete_btn}
      >
        x
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
