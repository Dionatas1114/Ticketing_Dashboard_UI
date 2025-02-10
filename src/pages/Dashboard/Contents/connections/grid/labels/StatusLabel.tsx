import { Chip } from '@mui/material';

const colors: { [index: string]: 'success' | 'error' } = {
  Online: 'success',
  Offline: 'error',
};

export type Status = 'Online' | 'Offline';

const StatusLabel = ({ status }: { status: Status }) => (
  <Chip label={status} color={colors[status]} size="small" />
);

export default StatusLabel;
