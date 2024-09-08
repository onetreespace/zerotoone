import { Box, BoxProps } from '@chakra-ui/react';

const lineProps = {
  backgroundColor: 'black',
  content: '""',
  display: 'block',
  height: '5px',
  margin: '5px 0',
  width: '100%',
  transition: 'all 0.25s ease-in-out',
};

export const NavToggle: React.FC<BoxProps & { isOpen: boolean }> = ({
  isOpen,
  ...props
}) => {
  return (
    <Box
      sx={{
        cursor: 'pointer',
        padding: 0,
        margin: 0,
        width: '32px',
        zIndex: 9900,
        pos: 'fixed',
        top: 5,
        right: 4,
      }}
      {...props}
    >
      <Box
        sx={{
          ...lineProps,
          transform: isOpen ? 'translateY(10px) rotate(45deg)' : 'unset',
        }}
      />
      <Box sx={{ ...lineProps, transform: isOpen ? 'scale(0)' : 'unset' }} />
      <Box
        sx={{
          ...lineProps,
          transform: isOpen ? 'translateY(-10px) rotate(-45deg)' : 'unset',
        }}
      />
    </Box>
  );
};
