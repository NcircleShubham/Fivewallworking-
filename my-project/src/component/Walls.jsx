import React, { forwardRef } from "react";
import * as THREE from "three";

const Walls = forwardRef((props, ref) => {

// Create walls group
const wallsGroup = new THREE.Group();
ref.current = wallsGroup;

// Creating the walls
const wall1 = new THREE.Mesh(
new THREE.BoxGeometry(10, 5, 0.2),
new THREE.MeshBasicMaterial({ color: "#FFC107" })
);
wall1.position.set(0, 0, -5);
wall1.rotation.y = Math.PI / 2;
wallsGroup.add(wall1);

const wall2 = new THREE.Mesh(
new THREE.BoxGeometry(10, 5, 0.2),
new THREE.MeshBasicMaterial({ color: "#3F51B5" })
);
wall2.position.set(-5, 0, 0);
wallsGroup.add(wall2);

const wall3 = new THREE.Mesh(
new THREE.BoxGeometry(10, 5, 0.2),
new THREE.MeshBasicMaterial({ color: "#009688", transparent: true, opacity: 0.5 })
);
wall3.position.set(0, 0, 5);
wall3.rotation.y = -Math.PI / 2;
wallsGroup.add(wall3);

const wall4 = new THREE.Mesh(
new THREE.BoxGeometry(10, 5, 0.2),
new THREE.MeshBasicMaterial({ color: "#FF5722" })
);
wall4.position.set(5, 0, 0);
wall4.rotation.y = Math.PI;
wallsGroup.add(wall4);

const wall5 = new THREE.Mesh(
new THREE.BoxGeometry(10, 5, 0.2),
new THREE.MeshBasicMaterial({ color: "#4CAF50", transparent: true, opacity: 0.5 })
);
wall5.position.set(0, 5, 0);
wall5.rotation.x = -Math.PI / 2;
wallsGroup.add(wall5);

return null;
});

export default Walls;