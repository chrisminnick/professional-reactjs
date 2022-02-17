import styles from './Filter.module.css';

function Filter(props) {
  return (
    <>
      <label className={styles.filterLabel} htmlFor="filterInput">
        Filter Product List:
      </label>
      <input
        className={styles.filterInput}
        name="filterInput"
        type="text"
        value={props.filterText}
        onChange={(e) => props.setFilter(e.target.value)}
      />
    </>
  );
}
export default Filter;
