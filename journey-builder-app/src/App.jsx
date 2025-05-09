import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
 
import '@xyflow/react/dist/style.css';
 
import CustomNode from './CustomNode';

const initialNodes = [
  {
    id: 'form-a',
    data: { label: 'Form A', type: 'source' },
    position: { x: 200, y: 300 },
    type: 'CustomNode'
  },
  {
    id: 'form-b',
    data: { label: 'Form B' },
    position: { x: 600, y: 200 },
    type: 'CustomNode'
  },
  {
    id: 'form-c',
    data: { label: 'Form C' },
    position: { x: 600, y: 400 },
    type: 'CustomNode'
  },
  {
    id: 'form-d',
    data: { label: 'Form D', type: 'target' },
    position: { x: 1000, y: 200 },
    type: 'CustomNode'
  },
  {
    id: 'form-e',
    data: { label: 'Form E', type: 'target'},
    position: { x: 1000, y: 400 },
    type: 'CustomNode'
  },
];
const initialEdges = [
  { id: 'ea-b', source: 'form-a', target: 'form-b' },
  { id: 'ea-c', source: 'form-a', target: 'form-c' },
  { id: 'eb-d', source: 'form-b', target: 'form-d' },
  { id: 'ec-e', source: 'form-c', target: 'form-e' },
];
 
const nodeTypes = {
  CustomNode: CustomNode,
};
export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
 
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        attributionPosition="top-right"
        style={{ backgroundColor: "#F7F9FB" }}
      >
        <Background />
      </ReactFlow>
    </div>
  );
}