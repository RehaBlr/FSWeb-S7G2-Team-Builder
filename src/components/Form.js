import React, { useEffect, useState } from "react";

function Form(props) {
  const initialData = {
    name: "",
    favTime: "Gece",
    focus: "",
  };
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    if (props.editingMember) {
      setFormData(props.editingMember);
    }
  }, [props.editingMember]);

  const onChangeFn = (e) => {
    const editingField = e.target.name;
    const newValue = e.target.value;
    let newFormData = { ...formData, [editingField]: newValue };
    setFormData(newFormData);
  };

  const submitFn = (e) => {
    console.log("submitFn çalıştı");
    e.preventDefault();
    props.addMember(formData);
    resetFn();
  };

  const resetFn = () => {
    setFormData(initialData);
  };
  return (
    <form onSubmit={submitFn}>
      <label htmlFor="name">İsim: </label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={onChangeFn}
      />

      <br />
      <label htmlFor="favTime">Favtime: </label>

      <select name="favTime" onChange={onChangeFn} defaultValue="Gece">
        <option value="-" disabled={true}>
          Bir zaman seçin
        </option>
        <option
          value="Gece"
          // selected={formData.favTime === "Gece" ? true : false}
        >
          Gece
        </option>
        <option
          value="Gündüz"
          // selected={formData.favTime === "Gündüz" ? true : false}
        >
          Gündüz
        </option>
      </select>
      <br />
      <label htmlFor="focus">Uzmanlığı: </label>
      <input
        type="text"
        name="focus"
        value={formData.focus}
        onChange={onChangeFn}
      />

      <button type="submit">
        {props.editingMember ? "Düzenle" : "Gönder"}
      </button>
      <button type="reset" onClick={resetFn}>
        Sıfırla
      </button>
    </form>
  );
}

export default Form;
