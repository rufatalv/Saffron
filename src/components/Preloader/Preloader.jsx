import Skeleton from 'react-loading-skeleton';

const Preloader = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Skeleton circle={true} height={40} width={40} style={{ marginRight: '10px' }} />
      <Skeleton width={100} height={20} />
    </div>
  );
};

export default Preloader;
