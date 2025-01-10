import styles from "./TextArea.module.css";

const TextArea = ({label, value, required, setValue}) => {
	
	const handleChange = (e) => {
		setValue(e.target.value);
	}

	return <div className={styles.textarea}>
						<label >{label}</label>
						<textarea 
							required={required}
							value={value}
							onChange={handleChange}
						/>
				 </div>;
}

export default TextArea;