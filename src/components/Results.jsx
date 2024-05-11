import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { calculateInvestmentResults } from '../util/investment';

export default function Result({ input }) {
  console.log(input);

  // Calculate investment results
  const resultData = calculateInvestmentResults(input);

  // Define column definitions for your table
  const columnDefs = [
    { headerName: 'Year', field: 'year', filter: 'agNumberColumnFilter' },
    { headerName: 'Interest', field: 'interest', filter: 'agNumberColumnFilter' },
    { headerName: 'Value End Of Year', field: 'valueEndOfYear', filter: 'agNumberColumnFilter' },
    { headerName: 'Annual Investment', field: 'annualInvestment', filter: 'agNumberColumnFilter' },
  ];

  // Define grid options
  const gridOptions = {
    // Define grid options here if needed
    defaultColDef: {
      sortable: true,
      resizable: true,
      filter: true,
    },
    columnDefs: columnDefs,
    pagination: true,
    paginationPageSize: 5,
    rowClass: 'custom-row-style', // Add custom row class
  };

  return (
    <div className="ag-theme-alpine" style={{ height: '400px', width: '100%' }}>
      <AgGridReact
        rowData={resultData}
        gridOptions={gridOptions}
      />
    </div>
  );
}
