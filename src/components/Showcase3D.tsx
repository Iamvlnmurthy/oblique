import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
    MeshTransmissionMaterial,
    Sphere,
    Float,
    PerspectiveCamera,
    useTexture,
    Environment,
    ContactShadows
} from '@react-three/drei'
import * as THREE from 'three'
import logo from '../assets/logo-dark.png'

const Scene = () => {
    const meshRef = useRef<THREE.Group>(null)
    const texture = useTexture(logo)
    const { mouse } = useThree()

    useFrame((state) => {
        if (meshRef.current) {
            // Smooth rotation based on time and a hint of mouse movement
            meshRef.current.rotation.x = THREE.MathUtils.lerp(
                meshRef.current.rotation.x,
                Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2 + mouse.y * 0.2,
                0.1
            )
            meshRef.current.rotation.y = THREE.MathUtils.lerp(
                meshRef.current.rotation.y,
                Math.cos(state.clock.getElapsedTime() * 0.2) * 0.3 + mouse.x * 0.3,
                0.1
            )
        }
    })

    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < 20; i++) {
            temp.push({
                position: [
                    (Math.random() - 0.5) * 16,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 6
                ],
                scale: Math.random() * 0.08 + 0.03,
                speed: Math.random() * 1 + 0.5
            })
        }
        return temp
    }, [])

    return (
        <>
            <Environment preset="city" />
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#F94F37" />
            <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#f47418" />

            <group ref={meshRef}>
                <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
                    {/* Main Crystal Slab */}
                    <mesh>
                        <boxGeometry args={[4.5, 3.2, 0.2]} />
                        <MeshTransmissionMaterial
                            backside
                            samples={12}
                            resolution={512}
                            transmission={1}
                            roughness={0.05}
                            thickness={0.25}
                            ior={1.4}
                            chromaticAberration={0.02}
                            anisotropy={0.1}
                            distortion={0.02}
                            distortionScale={0.02}
                            temporalDistortion={0.02}
                            color="#ffffff"
                        />

                        {/* Logo Face - Slightly recessed inside the glass */}
                        <mesh position={[0, 0, 0.11]}>
                            <planeGeometry args={[3.2, 1.8]} />
                            <meshStandardMaterial
                                map={texture}
                                transparent={true}
                                opacity={0.9}
                                emissive="#ffffff"
                                emissiveIntensity={0.5}
                            />
                        </mesh>

                        {/* Core Glow */}
                        <mesh position={[0, 0, 0]}>
                            <boxGeometry args={[4.3, 3, 0.05]} />
                            <meshStandardMaterial
                                color="#F94F37"
                                emissive="#F94F37"
                                emissiveIntensity={2}
                                transparent
                                opacity={0.15}
                            />
                        </mesh>
                    </mesh>
                </Float>
            </group>

            {/* Organic Floating Particles */}
            {particles.map((p, i) => (
                <Float key={i} speed={p.speed} rotationIntensity={2} floatIntensity={2}>
                    <Sphere args={[p.scale, 8, 8]} position={p.position as any}>
                        <meshStandardMaterial
                            color="#F94F37"
                            emissive="#F94F37"
                            emissiveIntensity={4}
                        />
                    </Sphere>
                </Float>
            ))}

            <ContactShadows
                position={[0, -3, 0]}
                opacity={0.4}
                scale={15}
                blur={2.5}
                far={4.5}
            />
        </>
    )
}

const Showcase3D = () => {
    return (
        <div className="w-full h-full cursor-grab active:cursor-grabbing">
            <Canvas shadows dpr={[1, 1.5]}>
                <PerspectiveCamera makeDefault position={[0, 0, window.innerWidth < 768 ? 8 : 6]} fov={45} />
                <Scene />
            </Canvas>
        </div>
    )
}

export default Showcase3D
