import React, { useState } from 'react';
import { TaskProvider, useTasks } from './context/TaskContext';
import ListaDeTarefas from './components/ListaDeTarefas';
// import './App.css'; // Presumindo que o usuário não forneceu o CSS, usaremos estilos inline por enquanto.

// Componente para adicionar novas tarefas
const AdicionarTarefa = () => {
  const { addTask } = useTasks();
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName.trim());
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Nova tarefa..."
        style={{ padding: '10px', flexGrow: 1, border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Adicionar
      </button>
    </form>
  );
};

// Componente principal do Gerenciador de Tarefas
const GerenciadorDeTarefas = () => {
  return (
    <div className="App" style={{ maxWidth: '600px', margin: '50px auto', padding: '30px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Gerenciador de Tarefas</h1>
      <AdicionarTarefa />
      <ListaDeTarefas />
    </div>
  );
};

// Componente App que envolve tudo com o Provider
function App() {
  return (
    <TaskProvider>
      <GerenciadorDeTarefas />
    </TaskProvider>
  );
}

export default App;
