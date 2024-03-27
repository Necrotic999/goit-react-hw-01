import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table_transactions}>
      <thead className={css.head}>
        <tr>
          <th className={css.head_title}>Type</th>
          <th className={css.head_title}>Amount</th>
          <th className={css.head_title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td className={css.transactions}>{item.type}</td>
              <td className={css.transactions}>{item.amount}</td>
              <td className={css.transactions}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
