import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';

import './CustomNode.css';

export default function CustomNode({ data }) {
    return (
      <>
        {data.type !== "source" && (
            <Handle type="target" position={Position.Left} />
        )}
        <div>
            <div class="form-card">
                <div class="form-icon">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/form.png" alt="form icon" />
                </div>
                <div class="form-text">
                    <small>Form</small>
                    <strong>{data.label}</strong>
                </div>
            </div>
        </div>
        {data.type !== "target" && (
            <Handle type="source" position={Position.Right} id="a"/>
        )}
      </>
    );
  }