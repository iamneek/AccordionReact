export default function AccItems({ faq, num, curOpen, onOpen }) {
  const open = curOpen === num;
  return (
    <div
      className={`${open ? "item open" : "item"}`}
      onClick={() => onOpen(num)}
    >
      <p className="number">0{faq.id}</p>
      <p className="title">{faq.title}</p>
      <p className="icon">{open ? "➖" : "➕"}</p>
      {open && <div className="content-box">{faq.text}</div>}
    </div>
  );
}
