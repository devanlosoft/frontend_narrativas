import React from 'react';

export default function Buttons({ title, onClick }: any) {
  return (
    <div>
      {/* Título */}
      <button onClick={onClick}>{title}</button>
    </div>
  );
}
