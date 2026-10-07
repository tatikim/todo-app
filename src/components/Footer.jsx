export default function Footer({ title, children }) {
  return (
    <footer className="footer">
      <span className="todo-count">{title}</span>
     {children}
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}
