import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import SessionLabel from './labels/SessionLabel';
import EditLabel from './labels/EditLabel';
import StatusLabel, { Status } from './labels/StatusLabel';

const columns: GridColDef[] = [
  { field: 'userName', headerName: 'User Name', flex: 1.5, minWidth: 200 },
  {
    field: 'status',
    headerName: 'Status',
    flex: 0.5,
    minWidth: 80,
    renderCell: (params: GridRenderCellParams) => <StatusLabel status={params.value as Status} />,
  },
  {
    field: 'session',
    headerName: 'Session',
    flex: 1,
    minWidth: 80,
    renderCell: () => <SessionLabel />,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    // headerAlign: 'right',
    // align: 'right',
    flex: 1,
    minWidth: 100,
    renderCell: (params) => <EditLabel params={params} />,
  },
];

const rows: GridRowsProp = [
  {
    id: 1,
    userName: 'Homepage Overview',
    status: 'Online',
    // session: <Button variant="outlined">Outlined</Button>,
    // actions: 212423,
  },
];

export default function Grid() {
  const defaultProps = {
    variant: 'outlined',
    size: 'small',
  };

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
