"use client"

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, Vector3 } from 'three';

const Particle = ({ texture, initialPosition, speed }) => {
    const ref = useRef();
    const { viewport } = useThree();

    const position = useRef(initialPosition.clone());

    useFrame(() => {
        if (!ref.current) return;

        position.current.x += speed.x + Math.sin(Date.now() * 0.001) * 0.001;
        position.current.y -= speed.y + Math.cos(Date.now() * 0.001) * 0.001;

        if (
            position.current.y < -viewport.height ||
            position.current.x > viewport.width
        ) {
            position.current.y = viewport.height + Math.random() * viewport.height;
            position.current.x = -viewport.width + Math.random() * viewport.width * 2;
        }

        ref.current.position.copy(position.current);
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={new Float32Array([0, 0, 0])}
                    count={1}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                map={texture}
                size={0.4}
                transparent
                alphaTest={0.5}
                opacity={0.8}
                depthWrite={false}
                sizeAttenuation
            />
        </points>
    );
};

const BackgroundParticles = () => {
    const { viewport } = useThree();
    const textures = useLoader(TextureLoader, [
        '/icons/001.svg',
        '/icons/002.svg',
        '/icons/003.svg',
        '/icons/004.svg',
        '/icons/005.svg',
        '/icons/006.svg',
        '/icons/007.svg',
        '/icons/008.svg',
    ]);


    const particleCount = 50;
    const particles = useMemo(() => {
        return new Array(particleCount).fill().map(() => ({
            texture: textures[Math.floor(Math.random() * textures.length)],
            initialPosition: new Vector3(
                (Math.random() - 0.5) * viewport.width * 2,
                Math.random() * viewport.height * 2,
                (Math.random() - 0.5) * 10
            ),
            speed: {
                x: 0.002 + Math.random() * 0.01,
                y: 0.01 + Math.random() * 0.02,
            },
        }));
    }, [textures, viewport]);

    return (
        <>
            {particles.map((p, i) => (
                <Particle key={i} texture={p.texture} initialPosition={p.initialPosition} speed={p.speed} />
            ))}
        </>
    );
};

const ParticleCanvas = () => {
    return (
        <Canvas
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            camera={{ position: [0, 0, 5], fov: 75 }}
        >
            {/* <color attach="background" args={['#ffffff']} /> */}
            <ambientLight intensity={0.5} />
            <BackgroundParticles />
        </Canvas>
    );
};

export default ParticleCanvas;