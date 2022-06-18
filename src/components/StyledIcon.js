const StyledIcon = ({ Icon, sx = {}, to, ...props }) => (
  <Icon {...props} sx={{ fontSize: 38, ...sx }} />
);

export default StyledIcon;
