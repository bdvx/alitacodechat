import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import StyledTooltip from '../Tooltip';
import AutoScrollToggle from './AutoScrollToggle';
import {
  ActionButton
} from './StyledComponents';

export default function ActionButtons({
  isStreaming,
  onStopAll,
}) {
  return (
    <>
      {isStreaming &&
        <StyledTooltip title={'Stop generating'} placement="top">
          <ActionButton
            sx={{ height: '28px', width: '28px' }}
            onClick={onStopAll}
          >
            <StopCircleOutlinedIcon sx={{ fontSize: '1.13rem' }} color="icon" />
          </ActionButton>
        </StyledTooltip>}
      <AutoScrollToggle />
    </>
  )
}