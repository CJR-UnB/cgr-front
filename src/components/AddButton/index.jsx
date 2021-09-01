import React, { useState } from 'react';
import Menu from './Menu';
import { Button } from './styles';

export default function AddButton() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      {showMenu && <Menu />}
      <Button className='icon' onClick={() => setShowMenu((prev) => !prev)} />
    </div>
  );
}
