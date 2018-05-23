import React from 'react';
import { Layout, Fill } from 'spectacle';

const FullscreenImage = ({ src, portrait = false, width }) => (
  <Layout>
    <Fill>
      <img
        alt=''
        src={src}
        width={portrait ? null : width ? width : '100%'}
        height={portrait ? '100%' : null}
      />
    </Fill>
  </Layout>
);

export default FullscreenImage;
