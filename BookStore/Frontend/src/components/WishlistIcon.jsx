import React, { useContext } from 'react';
import { WishlistContext } from '../wishlist/WishlistContext';
import { FaHeart } from 'react-icons/fa6';

const WishlistIcon = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <FaHeart className='w-6 h-6 hover:text-blue-300' />
      {wishlist.length > 0 && (
        <span
          style={{
            position: 'absolute',
            top: '-5px',
            right: '-10px',
            backgroundColor: 'red',
            borderRadius: '50%',
            padding: '5px',
            color: 'white',
            fontSize: '12px',
            width: '20px',
            height: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {wishlist.length}
        </span>
      )}
    </div>
  );
};

export default WishlistIcon;
