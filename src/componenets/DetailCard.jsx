export default function DetailCard({ mail }) {
  return (
    <li
      className="list-item"
      style={{ backgroundColor: mail?.unread ? "#f2f6fc" : "" }}
    >
      <div className="list-heading">
        <p>
          <b>Subject : {mail?.subject}</b>
        </p>
      </div>

      <p className="para">{mail?.content}</p>
    </li>
  );
}
