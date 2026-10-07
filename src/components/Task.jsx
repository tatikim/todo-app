export default function Task({ description, created, status }) {
  return (
    <li className={status}>
      <div className="view">
        <input className="toggle" type="checkbox" />

        <label>
          <span className="description">{description}</span>
          <span className="created"> {created.toLocaleString()}</span>
        </label>

        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>

      {status === "editing" && (
        <input type="text" className="edit" value={description} />
      )}
    </li>
  );
}
