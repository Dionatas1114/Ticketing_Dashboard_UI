import * as React from 'react';
import { FormControl, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';

import useQueues from '../../../../../hooks/useQueues';

import { i18n } from '../../../../../translate/i18n';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 290,
    },
  },
};

const inputLabel = i18n.t('queueSelect.inputLabel');

type QueueSelectProps = {
  selectedQueueIds: number[];
  handleSelectQueue: ({ target: { value } }: SelectChangeEvent<string[]>) => void;
};

const QueueSelect = ({ selectedQueueIds, handleSelectQueue }: QueueSelectProps) => {
  const { queues, loading } = useQueues();

  return (
    <div>
      <FormControl sx={{ width: 290 }}>
        <Select
          multiple
          displayEmpty
          value={selectedQueueIds.map(String)} // Converte IDs para strings
          onChange={handleSelectQueue}
          input={<OutlinedInput />}
          //TODO implement loading
          renderValue={() =>
            selectedQueueIds.length > 0
              ? selectedQueueIds
                  .map((id) => queues.find((q) => q.id === id)?.name || '')
                  .filter(Boolean) // Remove valores falsy (undefined/null)
                  .join(', ')
              : inputLabel
          }
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            {inputLabel}
          </MenuItem>

          {queues.map((queue) => (
            <MenuItem key={queue.id} value={queue.id.toString()}>
              {queue.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default QueueSelect;
