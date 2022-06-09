import React from 'react';
// import styled from 'styled-components';
import { useTable, useSortBy, usePagination, useGlobalFilter, useAsyncDebounce } from 'react-table';
import {Table, Pagination, Form, InputGroup} from 'react-bootstrap';
import { useState, useMemo } from 'react';

import makeData from './makeData'

// const Styles = styled.div`
//   padding: 1rem;

//   table {
//     border-spacing: 0;
//     border: 1px solid black;

//     tr {
//       :last-child {
//         td {
//           border-bottom: 0;
//         }
//       }
//     }

//     th,
//     td {
//       margin: 0;
//       padding: 0.5rem;
//       border-bottom: 1px solid black;
//       border-right: 1px solid black;

//       :last-child {
//         border-right: 0;
//       }
//     }
//   }
// `

const TWO_HUNDRED_MS = 200;

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, TWO_HUNDRED_MS);

  return (
    <InputGroup className="mb-1">
      <InputGroup.Text id="basic-addon1">
        <i className='fa fa-search' aria-hidden="true"></i>
      </InputGroup.Text>
      <Form.Control
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search`}
        type="search"
      />
    </InputGroup>
  )
}

function DTable({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,

  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  // const firstPageRows = rows.slice(0, 20)

  return (
    <div>
      <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
      <Table {...getTableProps()} bordered hover responsive striped>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    &nbsp;
                    {column.isSorted
                      ? column.isSortedDesc
                        ? <i className="fa fa-sort-desc" aria-hidden="true"></i>
                        : <i className="fa fa-sort-asc" aria-hidden="true"></i>
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </Table>
      <br />

      <p>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
      </p>

      <div className="pagination" style={{display: "flex"}} >
        <Pagination style={{marginBottom: '0px', flex: "1",width:'100%', marginRight: '10px',}}>
          <Pagination.First onClick={() => gotoPage(0)} disabled={!canPreviousPage}/>
          <Pagination.Prev onClick={() => previousPage()} disabled={!canPreviousPage}/>
          
          <Pagination.Next onClick={() => nextPage(0)} disabled={!canNextPage}/>
          <Pagination.Last onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}/>
        </Pagination>



        {/* <Form.Control
          type="number"
          onChange={e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            gotoPage(page)
          }}
          placeholder="Go to page"
          style={{marginRight: '10px'}}
        /> */}

        {/* <Form.Select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </Form.Select> */}
      </div>

    </div>
  )
}

function DataTable(props) {
  // const data = useMemo(() => makeData(200), []);

  return (
    <div>
      <DTable columns={props.columns} data={props.data} />
    </div>
  )
}

export default DataTable;
