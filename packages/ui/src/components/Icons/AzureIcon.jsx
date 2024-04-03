import { useTheme } from '@emotion/react';

export default function AzureIcon(props) {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32" height="32" viewBox="0 0 32 32"
      fill={theme.palette.icon.fill.primary}
      {...props}
    >
      <path d="M4 12.8987L6.24625 9.934L14.6523 6.51625V4.04725L22.0233 9.43825L6.96475 12.3602V20.587L4 19.7312V12.8987ZM28 8.449V23.101L22.246 27.9992L12.9453 24.9445V27.9992L6.96475 20.5855L22.0233 22.3825V9.4375L28 8.449Z" />
    </svg>
  );
}
