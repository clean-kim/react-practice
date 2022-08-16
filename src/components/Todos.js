// 파라미터 비구조화 할당
function TodoItem({todo, onToggle, onRemove}) {
    return (
        <div>
            <input
                type="checkbox"
                onClick={() => onToggle(todo.id)}
                checked={todo.done}
                readOnly={true}
            />
            <span style={{textDecoration: todo.done ? 'line-through' : 'none'}}>{todo.text}</span>
            <button onClick={() => onRemove(todo.id)}>삭제</button>
        </div>
    );
};

// 파라미터 비구조화 할당
function Todos({input, todos, onChangeInput, onInsert, onToggle, onRemove}) {
    function onSubmit(e) {
        e.preventDefault();
        onInsert(input);
        onChangeInput('');
    }

    function onChange(e) {
        onChangeInput(e.target.value);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange} />
                <button type="submit">등록</button>
            </form>
            {
                todos.map(todo => (
                    <TodoItem
                    todo={todo}
                    key={todo.id}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    />
                ))
            }
        </div>
    );
}

export default Todos;