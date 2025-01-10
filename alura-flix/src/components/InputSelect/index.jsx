import styles from "./InputSelect.module.css";

const InputSelect = ({label, value, options, required, setCategory}) => {

	
	const handleChange = (e) => {
		setCategory(e.target.value);
	}

	return <div className={styles.optionList}>
				<label >{label}</label>
				<select value={value} required={required} onChange={handleChange}>
                {options.map((category) => {
						return <option key={category.id} value={category.name}>{category.name}</option>
					})}
				</select>
			</div>;
}

export default InputSelect;