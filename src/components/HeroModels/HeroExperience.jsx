import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room';
import HeroLights from './HeroLights';
import Particles from './Particles';

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px' })
 
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      

      <OrbitControls 
      enablePan={false}
      enableZoom={!isTablet}
      maxDistance= {40}
      minDistance= {5}
      minPolarAngle={Math.PI / 5}
      maxPolarAngle={Math.PI / 2}
      />

<HeroLights />

<Particles count= {30} />
<group
        scale={isMobile ? 0.7 : 1}
        position={[0, -5.6, 0]} // Lowered the group on the Y-axis
        rotation={[0, Math.PI / -200, 0]} // Rotates the group by 45 degrees around the Y-axis for better alignment
      >
        <Room />
      </group>
      <Room />
    </Canvas>
  )
}

export default HeroExperience