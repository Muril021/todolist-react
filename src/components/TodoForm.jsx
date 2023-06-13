import { useState } from "react";

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // p não criar uma tarefa com dados nulos/em branco
    if(!value || !category) return;
    
    addTodo(value, category);

    // p limpar os valores após o submit
    setValue("");
    setCategory("");
  }

  return (
    <div className="todo-form">
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handleSubmit}>
        {/* onChange: p realizar uma ação após alguma mudança
          e: evento; target: input; value: valor do input
          onChange={(e) => setValue(e.target.value): p 
          setar o valor passado no input para o value */}
        <input 
          type="text" 
          placeholder="Digite a tarefa" 
          value={value}
          onChange={(e) => setValue(e.target.value)} 
        />
        {/* onChange={(e) => setCategory(e.target.value)}: p 
        setar o valor passado na seleção de categoria para 
        category */}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione...</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
}

export default TodoForm;