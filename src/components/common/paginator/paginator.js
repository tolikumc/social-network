import React from 'react';

export const Paginator = props => {
  const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map(el => (
        <span
          key={el}
          className={
            props.currentPage === el
              ? 'selected_pagination_item'
              : 'pagination_item'
          }
          onClick={() => props.onPageChange(el)}
        >
          {el}
        </span>
      ))}
    </div>
  );
};
