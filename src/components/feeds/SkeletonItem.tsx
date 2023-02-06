import React, { FC } from 'react';
import { Box, Skeleton } from '@mui/material';

const SkeletonItem: FC = () => (
  <>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Skeleton animation="wave" variant="circular" width={40} height={40} />
      <Skeleton
        animation="wave"
        height={40}
        width="60%"
        style={{ marginLeft: 6 }}
      />
    </Box>
    <Skeleton
      sx={{ transformOrigin: ' 0 20%', marginBottom: '-20px' }}
      animation="wave"
      height={200}
    />
  </>
);

export default SkeletonItem;
