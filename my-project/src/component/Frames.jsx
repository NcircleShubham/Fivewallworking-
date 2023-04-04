import React, { forwardRef } from "react";
import * as THREE from "three";

const Frames = forwardRef((props, ref) => {

// Create frames group
const framesGroup = new THREE.Group();
ref.current = framesGroup;

// Creating the frames
const frame1 = new THREE.Mesh(
new THREE.BoxGeometry(1, 5, 0.2),
new THREE.MeshBasicMaterial({ color: "#FFC107" })
);
frame1.position.set(-4, 0, -5);
framesGroup.add(frame1);

const frame2 = new THREE.Mesh(
new THREE.BoxGeometry(1, 5, 0.2),
new THREE.MeshBasicMaterial({ color: "#3F51B5" })
);
frame2.position.set(-5, 0, -4);
frame2.rotation.y = Math.PI / 2;
framesGroup.add(frame2);

const frame3 = new THREE.Mesh(
new THREE.BoxGeometry(1, 5, 0.2),
new THREE.MeshBasicMaterial({ color: "#009688", transparent: true, opacity: 0.5 })
);
frame3.position.set(4, 0, 5);
frame3.rotation.y = -Math.PI / 2;
framesGroup.add(frame3);

const frame4 = new THREE.Mesh(
new THREE.BoxGeometry(1, 5, 0.2),
new THREE.MeshBasicMaterial({ color: "#FF5722" })
);
frame4.position.set(5, 0, 4);
frame4.rotation.y = Math.PI / 2;
framesGroup.add(frame4);

const frame5 = new THREE.Mesh(
new THREE.BoxGeometry(1, 5, 0.2),
new THREE.MeshBasicMaterial({ color: "#4CAF50", transparent: true, opacity: 0.5 })
);
frame5.position.set(0, -2.5, -5);
frame5.rotation.x = Math.PI / 2;
framesGroup.add(frame5);

const frame6 = new THREE.Mesh(
new THREE.BoxGeometry(1, 5, 0.2),
new THREE.MeshBasicMaterial({ color: "#9C27B0", transparent: true, opacity: 0.5 })
);
frame6.position.set(0, 2.5, 5);
frame6.rotation.x = -Math.PI / 2;
framesGroup.add(frame6);

return null;
});

export default Frames;