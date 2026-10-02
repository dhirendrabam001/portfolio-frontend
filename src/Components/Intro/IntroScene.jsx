import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Billboard,
  Float,
  MeshReflectorMaterial,
  RoundedBox,
  Sparkles,
  Text,
} from "@react-three/drei";
import { Vector3 } from "three";

const FONT = "/fonts/JetBrainsMono-Regular.woff";
const BLUE = "#4f6df5";

// Timeline (seconds since the scene mounted)
const OPEN_START = 0.8;
const OPEN_END = 2.0;
const TYPE_START = 1.9;
const TYPE_SPEED = 100; // characters per second
const DIVE_START = 3.3;
const DIVE_END = 5.1; // long, smooth zoom into the screen

// Lid angle: closed (flat on the keyboard) -> open
const LID_CLOSED = Math.PI / 2;
const LID_OPEN = -0.3;

// Screen code styling
const FONT_SIZE = 0.14;
const CHAR_W = FONT_SIZE * 0.6; // JetBrains Mono advance width
const LINE_H = 0.25;
const ORIGIN_X = -1.8;
const ORIGIN_Y = 0.78;

const COLORS = {
  kw: "#c792ea",
  id: "#e6e9f5",
  key: "#82aaff",
  str: "#c3e88d",
  fn: "#ffcb6b",
  p: "#7f8bb3",
};

// [indent, [[colour, text], ...]]
const CODE = [
  [0, [["kw", "const "], ["id", "developer"], ["p", " = {"]]],
  [2, [["key", "name"], ["p", ": "], ["str", '"Dhirendra Bam"'], ["p", ","]]],
  [2, [["key", "role"], ["p", ": "], ["str", '"Full Stack Developer"'], ["p", ","]]],
  [
    2,
    [
      ["key", "stack"],
      ["p", ": "],
      ["str", '["Node.js", "React", "MongoDB"]'],
      ["p", ","],
    ],
  ],
  [0, [["p", "};"]]],
  [0, [["id", "developer"], ["fn", ".build"], ["p", "("], ["str", '"something great"'], ["p", ");"]]],
];

// Flatten into positioned tokens so typing can reveal them one by one
const buildTokens = () => {
  const tokens = [];
  let offset = 0;
  CODE.forEach(([indent, parts], line) => {
    let col = indent;
    parts.forEach(([colour, text]) => {
      tokens.push({ colour, text: text.trimEnd(), line, col, start: offset });
      col += text.length;
      offset += text.length;
    });
  });
  return { tokens, total: offset };
};
const { tokens, total } = buildTokens();

// Dev helper: ?introT=2.5 freezes the scene at that second (for tuning/screenshots)
const DEBUG_T = parseFloat(new URLSearchParams(window.location.search).get("introT"));
const now = (clock) => (Number.isFinite(DEBUG_T) ? DEBUG_T : clock.elapsedTime);

const clamp01 = (x) => Math.min(Math.max(x, 0), 1);
const easeOut = (x) => 1 - Math.pow(1 - clamp01(x), 3);
const easeInOut = (x) => {
  const v = clamp01(x);
  return v < 0.5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2;
};

// ── Keyboard: rows of backlit keys ──
const KEY_ROWS = 5;
const KEY_COLS = 13;
const Keyboard = () => (
  <group position={[0, 0.095, 0.15]}>
    {Array.from({ length: KEY_ROWS }).map((_, r) =>
      Array.from({ length: KEY_COLS }).map((__, c) => {
        // space bar replaces the middle of the last row
        if (r === KEY_ROWS - 1 && c > 3 && c < 9) return null;
        const wide = r === KEY_ROWS - 1 && c === 3;
        return (
          <mesh
            key={`${r}-${c}`}
            position={[(c - (KEY_COLS - 1) / 2) * 0.3, 0, (r - 2) * 0.28 - 0.3]}
          >
            <boxGeometry args={[wide ? 1.7 : 0.25, 0.04, 0.23]} />
            <meshStandardMaterial
              color="#171a28"
              emissive={BLUE}
              emissiveIntensity={0.06}
              roughness={0.6}
            />
          </mesh>
        );
      }),
    )}
  </group>
);

const Laptop = () => {
  const lid = useRef();
  const glow = useRef();
  const light = useRef();
  const caret = useRef();
  const rig = useRef();
  const [typed, setTyped] = useState(0);

  useFrame(({ clock, pointer }) => {
    const t = now(clock);

    // lid opens like a real hinge
    const open = easeInOut((t - OPEN_START) / (OPEN_END - OPEN_START));
    if (lid.current) lid.current.rotation.x = LID_CLOSED + (LID_OPEN - LID_CLOSED) * open;
    if (light.current) light.current.intensity = open * 14;

    // typing starts once the screen is awake
    const count = Math.min(
      total,
      Math.max(0, Math.floor((t - TYPE_START) * TYPE_SPEED)),
    );
    setTyped((prev) => (prev === count ? prev : count));
    if (caret.current) caret.current.visible = t < DIVE_START + 0.2 && (Math.floor(t * 2.4) % 2 === 0 || t < DIVE_START);

    // entrance float + subtle pointer sway
    if (rig.current) {
      const enter = easeOut(t / 1.0);
      rig.current.position.y = (1 - enter) * -1.2;
      rig.current.rotation.y = pointer.x * 0.1;
    }
  });

  const last = [...tokens].reverse().find((tk) => typed > tk.start) || tokens[0];
  const caretCol = last.col + Math.min(last.text.length, typed - last.start);

  return (
    <group ref={rig}>
      {/* base / chassis */}
      <RoundedBox args={[4.4, 0.18, 3.0]} radius={0.09} smoothness={4}>
        <meshStandardMaterial color="#9aa0b8" metalness={0.55} roughness={0.38} />
      </RoundedBox>
      {/* touchpad */}
      <mesh position={[0, 0.095, 1.05]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.5, 0.8]} />
        <meshStandardMaterial color="#7d839b" metalness={0.4} roughness={0.5} />
      </mesh>
      <Keyboard />

      {/* hinge + lid */}
      <group ref={lid} position={[0, 0.09, -1.5]} rotation={[LID_CLOSED, 0, 0]}>
        <group position={[0, 1.5, 0]}>
          {/* lid shell */}
          <RoundedBox args={[4.4, 3.0, 0.1]} radius={0.07} smoothness={4}>
            <meshStandardMaterial color="#9aa0b8" metalness={0.55} roughness={0.38} />
          </RoundedBox>
          {/* glowing logo on the outside of the lid */}
          <mesh position={[0, 0, -0.056]} rotation={[0, Math.PI, 0]}>
            <circleGeometry args={[0.18, 32]} />
            <meshBasicMaterial color={BLUE} />
          </mesh>

          {/* screen glass + bezel */}
          <mesh position={[0, 0, 0.052]}>
            <planeGeometry args={[4.2, 2.8]} />
            <meshBasicMaterial color="#05070f" />
          </mesh>
          <mesh ref={glow} position={[0, 0, 0.053]}>
            <planeGeometry args={[4.0, 2.6]} />
            <meshBasicMaterial color="#0a0f20" />
          </mesh>

          {/* editor chrome */}
          <mesh position={[0, 1.18, 0.056]}>
            <planeGeometry args={[4.0, 0.24]} />
            <meshBasicMaterial color="#0f1428" />
          </mesh>
          {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
            <mesh key={c} position={[-1.85 + i * 0.16, 1.18, 0.058]}>
              <circleGeometry args={[0.045, 20]} />
              <meshBasicMaterial color={c} />
            </mesh>
          ))}
          <Text
            font={FONT}
            fontSize={0.09}
            color="#7f8bb3"
            position={[0, 1.18, 0.058]}
            anchorX="center"
            anchorY="middle"
          >
            portfolio.js
          </Text>

          {/* typed code */}
          <group position={[ORIGIN_X, ORIGIN_Y, 0.06]}>
            {tokens.map((tk, i) => {
              const visible = Math.min(tk.text.length, Math.max(0, typed - tk.start));
              if (!visible) return null;
              return (
                <Text
                  key={i}
                  font={FONT}
                  fontSize={FONT_SIZE}
                  color={COLORS[tk.colour]}
                  position={[tk.col * CHAR_W, -tk.line * LINE_H, 0]}
                  anchorX="left"
                  anchorY="top"
                >
                  {tk.text.slice(0, visible)}
                </Text>
              );
            })}
            <mesh
              ref={caret}
              position={[
                caretCol * CHAR_W + CHAR_W * 0.5,
                -last.line * LINE_H - FONT_SIZE * 0.55,
                0,
              ]}
            >
              <planeGeometry args={[CHAR_W * 0.8, FONT_SIZE * 1.15]} />
              <meshBasicMaterial color={BLUE} />
            </mesh>
          </group>

          {/* screen light spilling onto keyboard */}
          <pointLight ref={light} position={[0, -0.6, 1.2]} intensity={0} color={BLUE} distance={7} />
        </group>
      </group>
    </group>
  );
};

// Tall, narrow screens (phones) get their own composition
const usePortrait = () => useThree((state) => state.size.width / state.size.height < 0.8);

// Holographic tech chips floating behind the laptop (always face the viewer)
const CHIPS = [
  ["Node.js", -5.2, 3.2, -4.5],
  ["React", -2.8, 4.7, -6],
  ["MongoDB", 0.8, 5.3, -7],
  ["Express", 3.8, 4.4, -6],
  ["Git", 5.6, 2.7, -4.5],
  ["REST API", -6.2, 1.1, -3],
  ["Postman", 6.4, 0.9, -3],
];
// Phone layout: two tidy columns stacked above the laptop
const CHIPS_PORTRAIT = [
  ["Node.js", -1.5, 3.6, -3],
  ["React", 1.5, 3.6, -3],
  ["MongoDB", -1.5, 4.8, -3],
  ["Express", 1.5, 4.8, -3],
  ["Git", -1.5, 6.0, -3],
  ["REST API", 1.5, 6.0, -3],
];
const TechChips = () => {
  const portrait = usePortrait();
  return (
  <>
    {(portrait ? CHIPS_PORTRAIT : CHIPS).map(([label, x, y, z], i) => (
      <Float key={label} speed={1.2 + i * 0.1} floatIntensity={1.2} rotationIntensity={0.2}>
        <Billboard position={[x, y, z]}>
          <RoundedBox args={[label.length * 0.19 + 0.8, 0.56, 0.06]} radius={0.12} smoothness={6}>
            <meshStandardMaterial
              color="#0d1230"
              emissive={BLUE}
              emissiveIntensity={0.35}
              transparent
              opacity={0.75}
            />
          </RoundedBox>
          <Text font={FONT} fontSize={0.24} color="#dfe5ff" position={[0, 0, 0.05]} anchorX="center" anchorY="middle">
            {label}
          </Text>
        </Billboard>
      </Float>
    ))}
  </>
  );
};

// Desk props that sell the "sitting at the desk" point of view
const Mug = () => (
  <group position={[-3.5, 0.2, 0.7]}>
    <mesh position={[0, 0.3, 0]}>
      <cylinderGeometry args={[0.34, 0.3, 0.6, 32]} />
      <meshStandardMaterial color="#e9ebf5" roughness={0.45} />
    </mesh>
    <mesh position={[0, 0.595, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[0.3, 32]} />
      <meshStandardMaterial color="#2b1a12" roughness={0.3} />
    </mesh>
    <mesh position={[0.4, 0.3, 0]}>
      <torusGeometry args={[0.18, 0.045, 12, 28]} />
      <meshStandardMaterial color="#e9ebf5" roughness={0.45} />
    </mesh>
    <Sparkles count={10} scale={[0.4, 0.9, 0.4]} position={[0, 1.0, 0]} size={3} speed={0.5} color="#ffffff" />
  </group>
);
const DeskProps = () => {
  const portrait = usePortrait();
  if (portrait) return null; // would be cropped off a narrow screen
  return (
    <>
      <Mug />
      <Mouse />
    </>
  );
};
const Mouse = () => (
  <RoundedBox args={[0.45, 0.14, 0.7]} radius={0.07} smoothness={4} position={[3.4, 0.1, 0.9]}>
    <meshStandardMaterial color="#2b2f40" metalness={0.6} roughness={0.4} emissive={BLUE} emissiveIntensity={0.08} />
  </RoundedBox>
);

// Camera: slow orbit-in, settle in front of the laptop, then a smooth push-in that
// ends square-on to the screen (no keystone) so the code fills the view.
const SCREEN_CENTER = new Vector3(0, 1.54, -1.886);
const SCREEN_NORMAL = new Vector3(0, -Math.sin(LID_OPEN), Math.cos(LID_OPEN));
const DIVE_END_POS = new Vector3();
const smootherstep = (x) => {
  const v = clamp01(x);
  return v * v * v * (v * (v * 6 - 15) + 10);
};

const look = new Vector3();
const CameraRig = () => {
  useFrame(({ camera, clock, pointer, size }) => {
    const t = now(clock);
    const aspect = size.width / size.height;

    // Portrait screens are narrow: pull the camera back so the laptop and the
    // code still fit the width (1 on desktop, ~2 on a phone).
    const fit = Math.max(1, 0.78 / aspect);
    // Portrait: aim lower so the laptop sits in the upper-middle of a tall screen
    const lift = clamp01((0.8 - aspect) / 0.3);
    // Final push-in distance: close enough to fill the screen, never so close
    // that the sides of the code get cropped on a narrow display.
    const endDist = Math.max(2.85, 4.1 / (0.828 * aspect));
    DIVE_END_POS.copy(SCREEN_CENTER).addScaledVector(SCREEN_NORMAL, endDist);

    const settle = easeOut(t / 2.2);
    const d = smootherstep((t - DIVE_START) / (DIVE_END - DIVE_START));
    const sway = 1 - d; // pointer sway fades out as we lock onto the screen

    // start high and to the side, settle front-on
    const x = (1 - settle) * 4.5 + pointer.x * 0.6 * sway;
    const y = 2.4 + (1 - settle) * 2.2 + pointer.y * 0.3 * sway;
    const z = (8.2 + (1 - settle) * 3.5) * fit;
    look.set(0, 0.9 + settle * 0.2 - lift * 0.8, 0);

    camera.position.set(x, y, z).lerp(DIVE_END_POS, d);
    look.lerp(SCREEN_CENTER, d);
    camera.lookAt(look);
  });
  return null;
};

const Ready = ({ onReady }) => {
  useEffect(() => {
    onReady?.();
  }, [onReady]);
  return null;
};

const IS_SMALL = window.innerWidth < 768;

const IntroScene = ({ onReady }) => (
  <Canvas
    dpr={[1, 1.5]}
    camera={{ position: [4.5, 4.6, 11.7], fov: 45 }}
    gl={{ antialias: true, alpha: true }}
  >
    <color attach="background" args={["#07080d"]} />
    <fog attach="fog" args={["#07080d", 14, 30]} />
    <ambientLight intensity={0.7} />
    <directionalLight position={[4, 8, 6]} intensity={2.2} />
    <pointLight position={[-6, 3, 4]} intensity={40} color={BLUE} />
    <pointLight position={[6, 4, -4]} intensity={60} color="#8b5cf6" />

    <Suspense fallback={null}>
      {/* reflective desk surface */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
        <planeGeometry args={[60, 60]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={IS_SMALL ? 256 : 512}
          mixBlur={1}
          mixStrength={35}
          roughness={1}
          depthScale={1.1}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#0a0c18"
          metalness={0.5}
          mirror={0}
        />
      </mesh>
      <TechChips />
      <DeskProps />
      <Laptop />
      <Ready onReady={onReady} />
    </Suspense>

    <Sparkles count={IS_SMALL ? 40 : 90} scale={[18, 8, 12]} size={2.5} speed={0.3} color={BLUE} position={[0, 2, 0]} />
    <CameraRig />
  </Canvas>
);

export default IntroScene;
