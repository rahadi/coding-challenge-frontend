import React from "react";

const Table = ({ columns, rows }) => {
  return (
    <table className="table is-fullwidth">
      <thead>
        <tr>
          {columns.map((column, i) => {
            return <th key={i}>{column}</th>;
          })}
        </tr>
      </thead>
      <tbody>{rows.map((row, i) => row)}</tbody>
    </table>
  );
};

export default Table;
