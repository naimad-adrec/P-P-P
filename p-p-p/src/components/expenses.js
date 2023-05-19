import React, { memo, useMemo }  from 'react'
import food_data from "./expenses_data/food_data";
import './expenses.css'
import { useTable } from 'react-table';

const expenses = memo((props) => {
    const data =  useMemo(() => food_data, []);
    const columns = useMemo(() => [
        {
            Header: "Date", 
            accessor: "date",
        },
        {
            Header: "Description", 
            accessor: "description",
        },
        {
            Header: "Amount", 
            accessor: "amount",
        },
        {
            Header: "Balance", 
            accessor: 'balance',
        }
    ], []);

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,
       } = useTable({ columns, data })

  return (
    
    <div className='BG'>
        <h1 className='Title'>Expenses</h1>
        <div> 
          <h1></h1>
        </div>
        <table {...getTableProps()} style={{ width: '100%', paddingLeft: '10%', paddingRight:'10%'}} >
            <thead>
            {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} style = {{background: '#3aafa9', fontWeight: 'bold', fontSize: 'large', borderRadius: '4px'}}>
                {column.render('Header')}
                </th>
            ))}
            </tr>
    ))}
    </thead>



    <tbody {...getTableBodyProps()}>
      {rows.map(row => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return (
                <td {...cell.getCellProps()}
                style={{padding: '20px', background: '#d9f2f1', borderRadius: '7px'}}> {cell.render('Cell')}</td>
              )
            })}
          </tr>
        )
      })}
        </tbody>
    </table>
    </div>
  )
})

expenses.propTypes = {}

export default expenses