import './App.css';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Show from './component/Show';
import { Vector3 } from 'three'
function Rig(){
  const {camera , mouse} = useThree()
  const vec = new Vector3()
  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.05)
    camera.lookAt(0, 0, 0)
  })
}
function App() {
  
  return (
    // <div style={{height: '100vh'}}>
   <Canvas camera={{ position: [0, 0, 6] }}>
     <directionalLight position={[0, 0, 1]} />
<Show />
<Rig/>
   </Canvas>
  //  </div>
  );
}

export default App;
