import styles from "./Input.module.css";

const Input= ({label, value, placeholder, type, required, setValue}) => {
	
	const handleChange = (e) => {
		setValue(e.target.value);
	}

	return <div className={styles.input}>
						<label >{label}</label>
						<input 
							placeholder={placeholder} 
							required={required}
							value={value}
							type={type}
							onChange={handleChange}
						/>
				 </div>;
}

export default Input;