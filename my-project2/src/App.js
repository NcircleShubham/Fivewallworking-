import { Canvas, useThree, useFrame } from '@react-three/fiber'
import Box from './Box'
import { Stats } from '@react-three/drei'
import { Vector3 } from 'three'

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new Vector3()

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.05)
    camera.lookAt(0, 0, 0)
  })
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <directionalLight position={[0, 0, 1]} />
      {[...Array(7).keys()].map((i) => (
        <group key={i}>
          {/* <Box position={[-5, -4.5 +  1.5, -10]} text={'S'} /> */}
          <Box position={[-3, -3 +  1.5, 0]} text={'w1'} />
          <Box position={[-1, -4.5 + 1.5, 0]} text={'w2'} />
          <Box position={[1, -5 +  1.5, 0]} text={'w3'} />
          <Box position={[3, -2 +  1, 0]} text={'w4'} />
          <Box position={[5, -1 +  0.5, 0]} text={'w5'} />
        </group>
      ))}
      <Rig />
      <Stats />
    </Canvas>
  )
}
