function ListFooter({ title, list, className }) {
  return (
    <ul className={`space-y-2 ${className}`}>
      <li className="font-bold text-white">{title}</li>
      {list.map((el) => (
        <li className="text-gray-CBCBCB" key={el.id}>
          {el.value}
        </li>
      ))}
    </ul>
  );
}

export default ListFooter;
