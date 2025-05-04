import * as THREE from 'three';

const HeroLights = () => {
  return (
    <>
    <spotLight 
    position={[-2.5, 2, -2]} 
    angle={1}
    intensity={20}
    penumbra={1.8}
    color="yellow"
/>
     <spotLight 
    position={[4, 5, 4]} 
    angle={0.4}
    intensity={50}
    penumbra={-3}
    color= "light gray"
    
    />
    <spotLight 
    position={[-3, 5, 5]} 
    angle={0.4}
    intensity={60}
    penumbra={1}
    color="#9D4EDD"
    
    />

    <primitive 
    object= {new THREE.RectAreaLight('#A259FF', 8, 3, 2)}
    position={[1, 3, 4]}
    intensity={0}
    rotation={[-Math.PI / 4, Math.PI / 4, 0]}
    />

    <pointLight
    position={[0, 2, -2]}
    intensity={.3}
    color="limegreen"
    
    />

     <pointLight
    position={[-1, 2, -2]}
    intensity={.5}
    color="#17893b"
    />

<pointLight
    position={[-.5, 2, -2]}
    intensity={.5}
    color="#17893b"
    />

<pointLight
    position={[.6, 2, -2]}
    intensity={.25}
    color="limegreen"
    />

<pointLight
    position={[.9, 2, -2]}
    intensity={.5}
    color="#17893b"
    />

    <pointLight
    position={[0, 1, 0]}
    intensity={10}
    color="#7209b7"
    />
  </>
  )
}

export default HeroLights