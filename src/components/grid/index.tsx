import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef, DataGridProps } from '@mui/x-data-grid';

export type GridProps = {
  rows: GridRowsProp;
  columns: GridColDef[];
};

const defaultProps = {
  variant: 'outlined',
  size: 'small',
};

export default function Grid({ rows, columns, ...props }: GridProps & DataGridProps) {
  return (
    <DataGrid
      checkboxSelection
      rows={rows}
      columns={columns}
      rowHeight={80}
      columnHeaderHeight={60}
      getRowClassName={(params) => (params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd')}
      initialState={{ pagination: { paginationModel: { pageSize: 20 } } }}
      pageSizeOptions={[10, 20, 50]}
      disableColumnResize
      density="compact"
      sx={{ border: 'none' }}
      {...props}
      slotProps={{
        filterPanel: {
          filterFormProps: {
            logicOperatorInputProps: defaultProps,
            columnInputProps: {
              ...defaultProps,
              sx: { mt: 'auto' },
            },
            operatorInputProps: {
              ...defaultProps,
              sx: { mt: 'auto' },
            },
            valueInputProps: {
              InputComponentProps: defaultProps,
            },
          },
        },
      }}
    />
  );
}
