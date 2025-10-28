import { useEffect, useState } from "react";

const initialDataForm = {
  id: 0,
  name: "",
  description: "",
  price: "",
};
export const ProductForm = ({ handlerAdd, productSelected }) => {
  const [form, setForm] = useState(initialDataForm);
  const { name, description, price } = form;

  useEffect(() => {
    setForm(productSelected);
  }, [productSelected]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!name | !description | !price) {
          alert("Debe completar los datos del dormulario");
          return;
        }
        handlerAdd(form);
        setForm(initialDataForm);
      }}
    >
      <div>
        <input
          placeholder="Name"
          style={{ marginBottom: "8px" }}
          name="name"
          value={name}
          onChange={(event) =>
            setForm({
              ...form,
              name: event.target.value,
            })
          }
        />
      </div>

      <div>
        <input
          placeholder="Description"
          style={{ marginBottom: "8px" }}
          name="description"
          value={description}
          onChange={(event) =>
            setForm({
              ...form,
              description: event.target.value,
            })
          }
        />
      </div>

      <div>
        <input
          placeholder="Price"
          style={{ marginBottom: "8px" }}
          name="price"
          value={price}
          onChange={(event) =>
            setForm({
              ...form,
              price: event.target.value,
            })
          }
        />
      </div>

      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};
