/* eslint-disable react/prop-types */
import { Trash2 } from 'lucide-react';

export const SmartChecklist = ({ checklist, onRemove }) => {
  if (checklist.length === 0) return null;

  return (
    <div className="mt-6 bg-white border rounded-2xl p-4 shadow space-y-2">
      <ul className="space-y-2">
        {checklist.map((item, index) => (
          <li key={index} className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-azul3" />
              {item}
            </label>
            <button onClick={() => onRemove(index)}>
              <Trash2 className="text-red-500 w-5 h-5" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
