import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons } from '../../redux/dragonsSlice/dragonsSlice';
import DragonItem from './DragonItem';

const DragonsRender = () => {
  const dispatch = useDispatch();

  const dragonArray = useSelector((state) => state.dragonsStore.dragonsArray);

  useEffect(() => {
    if (dragonArray.length === 0) {
      dispatch(fetchDragons());
    }
  }, [dispatch, dragonArray]);
  return (
    <div className="mainBodyDiv">
      {dragonArray.map((dragon) => (
        <DragonItem
          key={dragon.id}
          id={dragon.id}
          name={dragon.name}
          type={dragon.type}
          description={dragon.description}
          flickrImages={dragon.flickrImage}
          reserved={dragon.reserved}
        />
      ))}
    </div>
  );
};

export default DragonsRender;
