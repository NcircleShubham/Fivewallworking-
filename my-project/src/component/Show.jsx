import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import Walls from "./Walls";
import Frames from "./Frames";

const Show = () => {
  const [camera, setCamera] = useState();
  const [scene, setScene] = useState();
  const [renderer, setRenderer] = useState();

  const wallsRef = useRef();
  const framesRef = useRef();

  useEffect(() => {
    // Creating the Three.js scene
    const width = window.innerWidth;
    const height = window.innerHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 10;
    setCamera(camera);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    setRenderer(renderer);

    // Set the scene
    setScene(scene);

  }, []);

  useEffect(() => {
    // Add walls group to the scene
    scene?.add(wallsRef.current);

    // Add frames group to the scene
    scene?.add(framesRef.current);

    // Render the scene
    renderer?.render(scene, camera);

  }, [scene, camera, renderer]);

  return (
    <div>
      <Walls ref={wallsRef} />
      <Frames ref={framesRef} />
    </div>
  );
};

export default Show;
