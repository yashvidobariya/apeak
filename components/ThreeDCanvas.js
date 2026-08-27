"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeDCanvas({ className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Root Group for Mouse & Scroll Physics
    const bottlePivot = new THREE.Group();
    scene.add(bottlePivot);

    // ─── 2. 3D BOTTLE MESHES ──────────────────────────────────────────────
    
    // (A) Glass Outer Cylinder Body
    const glassBodyGeo = new THREE.CylinderGeometry(0.85, 0.85, 2.8, 36, 1, true);
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.92,
      opacity: 0.95,
      transparent: true,
      roughness: 0.05,
      metalness: 0.02,
      ior: 1.48,
      reflectivity: 0.6,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      side: THREE.DoubleSide,
    });
    const glassBody = new THREE.Mesh(glassBodyGeo, glassMaterial);
    glassBody.position.y = -0.1;
    bottlePivot.add(glassBody);

    // Glass Rounded Bottom
    const glassBottomGeo = new THREE.SphereGeometry(0.85, 36, 18, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2);
    const glassBottom = new THREE.Mesh(glassBottomGeo, glassMaterial);
    glassBottom.position.y = -1.5;
    bottlePivot.add(glassBottom);

    // Glass Shoulder & Neck
    const glassShoulderGeo = new THREE.ConeGeometry(0.85, 0.6, 36, 1, true);
    glassShoulderGeo.rotateX(Math.PI);
    const glassShoulder = new THREE.Mesh(glassShoulderGeo, glassMaterial);
    glassShoulder.position.y = 1.6;
    bottlePivot.add(glassShoulder);

    const glassNeckGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.6, 36, 1, true);
    const glassNeck = new THREE.Mesh(glassNeckGeo, glassMaterial);
    glassNeck.position.y = 2.1;
    bottlePivot.add(glassNeck);

    const glassLipGeo = new THREE.TorusGeometry(0.42, 0.04, 16, 36);
    const glassLip = new THREE.Mesh(glassLipGeo, glassMaterial);
    glassLip.rotation.x = Math.PI / 2;
    glassLip.position.y = 2.4;
    bottlePivot.add(glassLip);

    // (B) Internal Amber/Citrus Juice Liquid
    const liquidGeo = new THREE.CylinderGeometry(0.78, 0.78, 2.5, 32);
    const liquidMat = new THREE.MeshPhysicalMaterial({
      color: 0xf59e0b, // Vibrant Citrus Amber
      emissive: 0xd97706,
      emissiveIntensity: 0.25,
      roughness: 0.1,
      metalness: 0.05,
      transmission: 0.65,
      transparent: true,
      opacity: 0.88,
      ior: 1.34,
    });
    const liquidMesh = new THREE.Mesh(liquidGeo, liquidMat);
    liquidMesh.position.y = -0.2;
    bottlePivot.add(liquidMesh);

    // Dynamic Swirling Top Surface of Liquid
    const liquidTopGeo = new THREE.CircleGeometry(0.78, 32);
    const liquidTopMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      roughness: 0.15,
      metalness: 0.1,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide,
    });
    const liquidTopMesh = new THREE.Mesh(liquidTopGeo, liquidTopMat);
    liquidTopMesh.rotation.x = -Math.PI / 2;
    liquidTopMesh.position.y = 1.05;
    bottlePivot.add(liquidTopMesh);

    // (C) Golden Metallic Luxury Cap & Silicone Strap Ring
    const capGroup = new THREE.Group();
    bottlePivot.add(capGroup);

    const capGeo = new THREE.CylinderGeometry(0.46, 0.46, 0.45, 32);
    const capMat = new THREE.MeshStandardMaterial({
      color: 0xc5a059, // Brushed Gold
      metalness: 0.88,
      roughness: 0.22,
    });
    const capMesh = new THREE.Mesh(capGeo, capMat);
    capMesh.position.y = 2.65;
    capGroup.add(capMesh);

    // Cap Ring Accent
    const capRingGeo = new THREE.TorusGeometry(0.48, 0.03, 16, 32);
    const capRingMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      metalness: 0.2,
      roughness: 0.8,
    });
    const capRing = new THREE.Mesh(capRingGeo, capRingMat);
    capRing.rotation.x = Math.PI / 2;
    capRing.position.y = 2.48;
    capGroup.add(capRing);

    // (D) Floating Effervescent Bubbles inside Juice
    const bubbleCount = 28;
    const bubbleGeo = new THREE.SphereGeometry(0.04, 12, 12);
    const bubbleMat = new THREE.MeshPhysicalMaterial({
      color: 0xfffbeb,
      transmission: 0.8,
      transparent: true,
      opacity: 0.7,
      roughness: 0.1,
    });
    
    const bubbles = [];
    for (let i = 0; i < bubbleCount; i++) {
      const bubble = new THREE.Mesh(bubbleGeo, bubbleMat);
      const radius = Math.random() * 0.65;
      const angle = Math.random() * Math.PI * 2;
      bubble.position.x = Math.cos(angle) * radius;
      bubble.position.z = Math.sin(angle) * radius;
      bubble.position.y = (Math.random() - 0.5) * 2.2;
      bubble.scale.setScalar(Math.random() * 1.2 + 0.5);
      bubble.userData = {
        speed: Math.random() * 0.015 + 0.008,
        swaySpeed: Math.random() * 2 + 1,
        initialY: -1.3,
        maxY: 1.0,
      };
      bottlePivot.add(bubble);
      bubbles.push(bubble);
    }

    // ─── 3. DYNAMIC WATER / JUICE SPLASH PARTICLES ──────────────────────────
    const splashCount = 110;
    const splashGroup = new THREE.Group();
    scene.add(splashGroup);

    const splashData = [];
    const dropletGeo = new THREE.SphereGeometry(0.065, 12, 12);
    const dropletMat = new THREE.MeshPhysicalMaterial({
      color: 0xffd166, // Sparkling golden juice & water splash
      emissive: 0xf59e0b,
      emissiveIntensity: 0.35,
      transmission: 0.75,
      roughness: 0.08,
      metalness: 0.1,
      transparent: true,
      opacity: 0.85,
    });

    for (let i = 0; i < splashCount; i++) {
      const drop = new THREE.Mesh(dropletGeo, dropletMat);
      splashGroup.add(drop);
      
      const p = {
        mesh: drop,
        active: false,
        x: 0,
        y: 0,
        z: 0,
        vx: 0,
        vy: 0,
        vz: 0,
        life: 0,
        maxLife: 0,
        scale: 1,
      };
      splashData.push(p);
    }

    // Function to spawn a dynamic water/juice droplet from mouth of bottle
    function spawnDroplet(origin, pourAngle, intensity) {
      const inactive = splashData.find((d) => !d.active);
      if (!inactive) return;

      inactive.active = true;
      inactive.life = 0;
      inactive.maxLife = Math.random() * 45 + 35; // Frames life
      
      // Spawn at mouth opening
      inactive.x = origin.x + (Math.random() - 0.5) * 0.1;
      inactive.y = origin.y + (Math.random() - 0.5) * 0.1;
      inactive.z = origin.z + (Math.random() - 0.5) * 0.1;
      
      // Splash trajectory vector arc (curving outward & falling)
      const arcForce = (Math.random() * 0.08 + 0.05) * intensity;
      inactive.vx = Math.sin(pourAngle) * arcForce + (Math.random() - 0.5) * 0.03;
      inactive.vy = Math.cos(pourAngle) * arcForce * 0.5 + Math.random() * 0.04 + 0.02;
      inactive.vz = (Math.random() - 0.5) * 0.04;
      
      inactive.scale = Math.random() * 0.9 + 0.4;
      inactive.mesh.visible = true;
    }

    // ─── 4. LIGHTING SYSTEM ───────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight(0xfff3d6, 3.5, 25);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0x38bdf8, 2.5, 20); // Soft cyan/blue specular reflection
    rimLight.position.set(-5, 2, -3);
    scene.add(rimLight);

    const bottomGlow = new THREE.PointLight(0xf59e0b, 2.0, 15);
    bottomGlow.position.set(0, -3, 2);
    scene.add(bottomGlow);

    // ─── 5. INTERACTION & SCROLL TRACKING ─────────────────────────────────
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let scrollProgress = 0;
    let targetScrollProgress = 0;

    function handleMouseMove(e) {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (e.clientX / innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / innerHeight - 0.5) * 2;
    }

    function handleScroll() {
      const scrollMax = 600;
      targetScrollProgress = Math.min(window.scrollY / scrollMax, 1.0);
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    function handleResize() {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    window.addEventListener("resize", handleResize);

    // ─── 6. ANIMATION LOOP ────────────────────────────────────────────────
    let animationFrameId;
    const clock = new THREE.Clock();

    const mouthWorldPos = new THREE.Vector3();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth Interpolation (lerp) for Mouse & Scroll
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.08;

      // Dynamic Bottle Tilt (Natural organic rotation + mouse orbit + scroll tilt)
      const baseRotationY = elapsedTime * 0.5;
      bottlePivot.rotation.y = baseRotationY + mouseX * 0.7;
      
      // Scroll creates an elegant pouring tilt angle!
      const tiltZ = Math.sin(scrollProgress * Math.PI * 0.5) * 0.65 + Math.sin(elapsedTime * 1.2) * 0.06;
      bottlePivot.rotation.z = -tiltZ + mouseY * 0.3;
      bottlePivot.rotation.x = mouseX * 0.2 + Math.cos(elapsedTime * 0.9) * 0.05;
      bottlePivot.position.y = Math.sin(elapsedTime * 1.5) * 0.12 - scrollProgress * 0.2;

      // Cap bobs slightly as if breathing/open
      capGroup.position.y = Math.sin(elapsedTime * 2.5) * 0.04 + scrollProgress * 0.15;
      capGroup.rotation.y = elapsedTime * 0.3;

      // Liquid wave surface ripple inside bottle
      liquidTopMesh.position.y = 1.05 + Math.sin(elapsedTime * 3) * 0.03;
      liquidTopMesh.rotation.z = Math.sin(elapsedTime * 2) * 0.05;

      // Bubble upward rising physics
      bubbles.forEach((b) => {
        b.position.y += b.userData.speed;
        b.position.x += Math.sin(elapsedTime * b.userData.swaySpeed + b.position.y) * 0.003;
        if (b.position.y > b.userData.maxY) {
          b.position.y = b.userData.initialY;
        }
      });

      // Get world position of bottle mouth opening for splashing
      glassLip.getWorldPosition(mouthWorldPos);

      // Splash trigger intensity (scroll tilt or continuous ambient splash cascade)
      const splashIntensity = 1.0 + scrollProgress * 2.5;
      const spawnRate = scrollProgress > 0.05 ? 3 : (Math.random() < 0.6 ? 1 : 0);

      for (let s = 0; s < spawnRate; s++) {
        spawnDroplet(mouthWorldPos, bottlePivot.rotation.z - Math.PI / 2, splashIntensity);
      }

      // Update active splash droplets physics
      splashData.forEach((d) => {
        if (!d.active) return;
        d.life++;
        
        // Physics integration
        d.x += d.vx;
        d.y += d.vy;
        d.z += d.vz;
        d.vy -= 0.0045; // Gravity pull downwards

        // Fade scale and opacity as it falls
        const lifeRatio = d.life / d.maxLife;
        const currentScale = d.scale * (1 - lifeRatio * 0.7);
        
        d.mesh.position.set(d.x, d.y, d.z);
        d.mesh.scale.setScalar(Math.max(currentScale, 0.01));

        if (d.life >= d.maxLife || d.y < -4) {
          d.active = false;
          d.mesh.visible = false;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // ─── 7. CLEANUP ───────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose geometries & materials
      glassBodyGeo.dispose();
      glassBottomGeo.dispose();
      glassShoulderGeo.dispose();
      glassNeckGeo.dispose();
      glassLipGeo.dispose();
      glassMaterial.dispose();
      liquidGeo.dispose();
      liquidMat.dispose();
      liquidTopGeo.dispose();
      liquidTopMat.dispose();
      capGeo.dispose();
      capMat.dispose();
      capRingGeo.dispose();
      capRingMat.dispose();
      bubbleGeo.dispose();
      bubbleMat.dispose();
      dropletGeo.dispose();
      dropletMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`three-d-canvas-container ${className}`}
      style={{
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
