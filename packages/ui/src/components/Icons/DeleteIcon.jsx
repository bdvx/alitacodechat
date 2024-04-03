import { useTheme } from '@emotion/react';
import SvgIcon from "@mui/material/SvgIcon";

export default function DeleteIcon(props) {
  const theme = useTheme();
  return (
    <SvgIcon {...props}>
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.9583 3.15385H11.25V2.61538C11.25 2.18696 11.0788 1.77608 10.774 1.47314C10.4693 1.17019 10.056 1 9.625 1H6.375C5.94402 1 5.5307 1.17019 5.22595 1.47314C4.9212 1.77608 4.75 2.18696 4.75 2.61538V3.15385H2.04167C1.89801 3.15385 1.76023 3.21058 1.65865 3.31156C1.55707 3.41254 1.5 3.5495 1.5 3.69231C1.5 3.83512 1.55707 3.97208 1.65865 4.07306C1.76023 4.17404 1.89801 4.23077 2.04167 4.23077H2.58333V13.9231C2.58333 14.2087 2.69747 14.4826 2.90063 14.6846C3.1038 14.8865 3.37935 15 3.66667 15H12.3333C12.6207 15 12.8962 14.8865 13.0994 14.6846C13.3025 14.4826 13.4167 14.2087 13.4167 13.9231V4.23077H13.9583C14.102 4.23077 14.2398 4.17404 14.3414 4.07306C14.4429 3.97208 14.5 3.83512 14.5 3.69231C14.5 3.5495 14.4429 3.41254 14.3414 3.31156C14.2398 3.21058 14.102 3.15385 13.9583 3.15385ZM5.83333 2.61538C5.83333 2.47258 5.8904 2.33562 5.99198 2.23463C6.09357 2.13365 6.23134 2.07692 6.375 2.07692H9.625C9.76866 2.07692 9.90644 2.13365 10.008 2.23463C10.1096 2.33562 10.1667 2.47258 10.1667 2.61538V3.15385H5.83333V2.61538ZM12.3333 13.9231H3.66667V4.23077H12.3333V13.9231ZM6.91667 6.92308V11.2308C6.91667 11.3736 6.8596 11.5105 6.75802 11.6115C6.65643 11.7125 6.51866 11.7692 6.375 11.7692C6.23134 11.7692 6.09357 11.7125 5.99198 11.6115C5.8904 11.5105 5.83333 11.3736 5.83333 11.2308V6.92308C5.83333 6.78027 5.8904 6.64331 5.99198 6.54233C6.09357 6.44135 6.23134 6.38462 6.375 6.38462C6.51866 6.38462 6.65643 6.44135 6.75802 6.54233C6.8596 6.64331 6.91667 6.78027 6.91667 6.92308ZM10.1667 6.92308V11.2308C10.1667 11.3736 10.1096 11.5105 10.008 11.6115C9.90644 11.7125 9.76866 11.7692 9.625 11.7692C9.48134 11.7692 9.34357 11.7125 9.24198 11.6115C9.1404 11.5105 9.08333 11.3736 9.08333 11.2308V6.92308C9.08333 6.78027 9.1404 6.64331 9.24198 6.54233C9.34357 6.44135 9.48134 6.38462 9.625 6.38462C9.76866 6.38462 9.90644 6.44135 10.008 6.54233C10.1096 6.64331 10.1667 6.78027 10.1667 6.92308Z"
          fill={props.fill || theme.palette.icon.fill.default}
        />
      </svg>
    </SvgIcon>
  );
}
