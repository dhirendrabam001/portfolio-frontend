import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";

const BLUE = "#4f6df5";
const BLUE_DEEP = "#3b5bfd";

// Whole group eases toward the cursor for a subtle parallax
const ParallaxGroup = ({ children }) => {
  const group = useRef();
  const pointer = useRef({ x: 0, y: 0 });

  // Track the cursor across the viewport (normalised to -1..1)
  useEffect(() => {
    const onMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((_, delta) => {
    if (!group.current) return;
    const { x, y } = pointer.current;
    group.current.rotation.y += (x * 0.35 - group.current.rotation.y) * delta * 2;
    group.current.rotation.x += (-y * 0.25 - group.current.rotation.x) * delta * 2;
  });
  return <group ref={group}>{children}</group>;
};

const Ring = ({ radius, tilt, speed, opacity }) => {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed;
  });
  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, 0.012, 16, 160]} />
      <meshBasicMaterial color={BLUE} transparent opacity={opacity} />
    </mesh>
  );
};

const Scene = ({ light }) => (
  <>
    <ambientLight intensity={light ? 1.1 : 0.7} />
    <directionalLight position={[3, 4, 5]} intensity={1.6} />
    <pointLight position={[-4, -2, 2]} intensity={1.2} color={BLUE} />

    <ParallaxGroup>
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.9}>
        <mesh>
          <icosahedronGeometry args={[1.05, 2]} />
          <MeshDistortMaterial
            color={light ? BLUE : BLUE_DEEP}
            roughness={0.25}
            metalness={0.55}
            distort={0.28}
            speed={1.6}
          />
        </mesh>
      </Float>

      <Ring radius={1.75} tilt={[1.2, 0.2, 0]} speed={0.25} opacity={0.55} />
      <Ring radius={2.15} tilt={[0.5, 1.0, 0.4]} speed={-0.18} opacity={0.35} />
      <Ring radius={2.55} tilt={[1.6, -0.6, 0]} speed={0.12} opacity={0.2} />

      <Sparkles count={50} scale={[6, 5, 4]} size={2.2} speed={0.35} color={BLUE} />
    </ParallaxGroup>
  </>
);

const HeroScene = () => {
  const wrapRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const [light, setLight] = useState(() =>
    document.body.classList.contains("light"),
  );

  // follow the site's light/dark theme class on <body>
  useEffect(() => {
    const observer = new MutationObserver(() =>
      setLight(document.body.classList.contains("light")),
    );
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Stop rendering when the hero scrolls out of view or the tab is hidden
  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="hero-scene" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        frameloop={visible ? "always" : "never"}
      >
        <Scene light={light} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
