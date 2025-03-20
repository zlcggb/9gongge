import React from 'react';
import { Grid, Table } from 'lucide-react';

interface ViewToggleProps {
  view: 'grid' | 'table';
  onViewChange: (view: 'grid' | 'table') => void;
}

export const ViewToggle: React.FC<ViewToggleProps> = ({ view, onViewChange }) => {
  return (
    <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
      <button
        onClick={() => onViewChange('grid')}
        className={`p-2 rounded ${
          view === 'grid' ? 'bg-white shadow' : 'hover:bg-gray-200'
        }`}
      >
        <Grid size={20} />
      </button>
      <button
        onClick={() => onViewChange('table')}
        className={`p-2 rounded ${
          view === 'table' ? 'bg-white shadow' : 'hover:bg-gray-200'
        }`}
      >
        <Table size={20} />
      </button>
    </div>
  );
};