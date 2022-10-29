import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';

export const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip
        {...props}
        classes={{ popper: className }}
        placement="bottom-start"
        TransitionComponent={Fade}
        enterDelay={800}
        leaveDelay={0}
    />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'white',
        color: 'black',
        width: '100%',
        border: '1px solid transparent',
    },
}));
