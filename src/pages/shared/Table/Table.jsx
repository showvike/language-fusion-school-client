const Table = ({ item, index }) => {
  return (
    <tr key={item._id}>
      <td>{index + 1}</td>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={item.image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{item.name}</td>
      <td>${item.price}</td>
      <td>
        <button className="btn btn-error btn-sm">Delete</button>
      </td>
      <td>
        <button className="btn btn-warning btn-sm">PAY</button>
      </td>
    </tr>
  );
};

export default Table;
