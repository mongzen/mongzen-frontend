'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

interface AbstractAnimationProps {
  className?: string;
  width?: number;
  height?: number;
}

export const AbstractAnimation: React.FC<AbstractAnimationProps> = ({
  className = '',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5);

    // Light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);

    // Load GLTF Model
    const loader = new GLTFLoader();
    loader.load(
      '/model.gltf',
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        // Store original positions for wave animation
        const waves: { mesh: THREE.Mesh; original: Float32Array }[] = [];
        model.traverse((child) => {
          if (
            child instanceof THREE.Mesh &&
            child.geometry instanceof THREE.BufferGeometry
          ) {
            const geom = child.geometry;
            const posAttr = geom.attributes.position;
            // Clone original positions
            const original = new Float32Array(posAttr.array.length);
            original.set(posAttr.array as Float32Array);
            waves.push({ mesh: child, original });
          }
        });

        const clock = new THREE.Clock();
        const animateWave = () => {
          const time = clock.getElapsedTime();

          waves.forEach(({ mesh, original }) => {
            const posAttr = mesh.geometry.attributes
              .position as THREE.BufferAttribute;
            for (let i = 0; i < posAttr.count; i++) {
              const ix = i * 3;
              const iy = ix + 1;
              const iz = ix + 2;
              const x = original[ix];
              const z = original[iz];
              // Simple sine wave along Y axis
              posAttr.array[iy] = original[iy] + 0.2 * Math.sin(4 * (x + time));
            }
            posAttr.needsUpdate = true;
          });

          renderer.render(scene, camera);
          requestAnimationFrame(animateWave);
        };

        animateWave();
      },
      undefined,
      (error) => console.error('GLTF load error:', error)
    );

    // Handle resize
    const onResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      scene.clear();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default AbstractAnimation;
