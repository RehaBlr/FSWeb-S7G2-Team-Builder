import React, { useState } from "react";

function Form() {
  const initialData = {
    isim: "",
    zaman: "",
    uzmanlik: "",
  };
  const [formData, setFormData] = useState(initialData);
  const onChangeFn = (e) => {
    const editingField = e.target.name;
    const newValue = e.target.value;
    setFormData({ ...formData, [editingField]: newValue });
  };

  const submitFn = (e) => {
    console.log("submitFn çalıştı");
    e.preventDefault();
  };

  const resetFn = () => {
    setFormData(initialData);
  };
  return (
    <form onSubmit={submitFn}>
      <label htmlFor="isim">İsim: </label>
      <input
        type="text"
        name="isim"
        value={formData.isim}
        onChange={onChangeFn}
      />
      <br />
      <label htmlFor="zaman">Favtime: </label>
      <input
        type="text"
        name="zaman"
        value={formData.zaman}
        onChange={onChangeFn}
      />
      <br />
      <label htmlFor="uzmanlik">Uzmanlığı: </label>
      <input
        type="text"
        name="uzmanlik"
        value={formData.uzmanlik}
        onChange={onChangeFn}
      />

      <button type="submit">Gönder</button>
      <button type="reset" onClick={resetFn}>
        Sıfırla
      </button>
    </form>
  );
}

export default Form;
