# ADDENDUM — GROUP / FOLDER STRUCTURE (ProjectGroup)
> This file supplements PORTFOLIO_SPEC.md — read both together.
> Language: English — all code, data, and content must be in English.

---

## A1. TYPE: `ProjectGroup`

```ts
export type ProjectGroup = {
  id: string;
  title: string;
  shortDesc: string;
  coverImage: string;
  domains: ProjectDomain[];
  tags: string[];
  projects: Project[];
  featured?: boolean;
};
```

Groups are displayed in this order: (1) Design & CAD, (2) Manufacturing,
(3) Research & Industry, (4) Software, ML & Web.

---

## A2. Full `src/data/projects.ts`

```ts
import type { Project, ProjectGroup } from '../types/project';

export const standaloneProjects: Project[] = [];

export const projectGroups: ProjectGroup[] = [

  // ═══════════════════════════════════════════════════════
  // GROUP 1 — DESIGN & CAD PROJECTS
  // ═══════════════════════════════════════════════════════
  {
    id: 'design-cad',
    title: 'Design & CAD Projects',
    shortDesc: 'Advanced mechanical design: cam mechanisms, biomedical implants, aeronautical braking — modeled in CATIA V5, validated analytically and via FEA/CFD.',
    coverImage: '/projects/design-cad/heart-pump/cover.jpg',
    domains: ['mécanique'],
    tags: ['CATIA V5', 'STARCCM+', 'ABAQUS', 'CFD', 'CAE', 'Biomechanics'],
    featured: true,
    projects: [
      {
        id: 'heart-pump',
        title: 'Design of a Heart Pump',
        subtitle: 'Centrifugal pump for cardiac applications',
        year: 2025, duration: 'Sept. 2024 – Feb. 2025',
        context: 'Course project — Arts et Métiers, Paris',
        domains: ['mécanique'],
        tags: ['CATIA V5', 'STARCCM+', 'CFD', 'Biomechanics', 'GSD'],
        shortDesc: 'Centrifugal cardiac pump design and CFD simulation. Efficiency improved from 49% to 59% through iterative design cycles combining 3D-printed prototypes and STARCCM+ simulations.',
        fullDesc: `
## Objective
Design a centrifugal pump for cardiac assist, then simulate blood flow to obtain
characteristic curves and assess physiological suitability.

## Design Process
Impeller, housing, and internal flow passages modeled in **CATIA V5 (GSD)** with
focus on manufacturability. Critical constraint: **preventing platelet aggregation**
— excessive velocity or turbulence triggers thrombosis. Internal geometries
optimized to ensure laminar flow in critical regions.

## CFD Simulation — STARCCM+
| Parameter | Influence |
|-----------|-----------|
| Mesh size | Accuracy vs. computation time |
| Inlet flow velocity | Laminar / turbulent regime |
| Fluid properties | Blood substituted by water at certain flowrates |

## Results
- **Efficiency: 49% → 59%** through iterative design-test cycles.
- Peak efficiency of **58.5% at 8 L/min** — oversized vs. physiological 5 L/min target.
- Proposed fix: reducing rotor speed shifts the peak toward 5 L/min,
  yielding **~10% energy gain** — critical for battery autonomy.
        `,
        coverImage: '/projects/design-cad/heart-pump/cover.jpg',
        images: [
          { src: '/projects/design-cad/heart-pump/img-01.jpg', alt: 'CATIA V5 — impeller and housing', caption: 'FIG. 01 — CATIA V5: centrifugal impeller and housing (GSD)' },
          { src: '/projects/design-cad/heart-pump/img-02.jpg', alt: 'STARCCM+ mesh', caption: 'FIG. 02 — Volumetric mesh for blood flow simulation (STARCCM+)' },
          { src: '/projects/design-cad/heart-pump/img-03.jpg', alt: 'CFD velocity field', caption: 'FIG. 03 — Velocity field and streamlines — CFD results' },
        ],
        links: [], status: 'completed',
      },
      {
        id: 'aircraft-brake',
        title: 'Aircraft Brake Design',
        subtitle: 'Structural sizing and CAD of a mobile-caliper disc brake',
        year: 2025, duration: 'Sept. 2024 – Feb. 2025',
        context: 'Course project — Arts et Métiers, Paris',
        domains: ['mécanique'],
        tags: ['CATIA V5', 'ABAQUS', 'FEA', 'Structural Sizing', 'Aeronautics'],
        shortDesc: 'Full sizing and CAD of an aircraft disc brake. FEA validation (ABAQUS) against aerospace safety factors: 800 kg aircraft, −4 m/s², 204 Nm braking torque.',
        fullDesc: `
## Sizing Methodology
| Parameter | Value |
|-----------|-------|
| Aircraft mass | 800 kg |
| Max deceleration | −4 m/s² |
| Braking time | 14 s |
| Braking torque | 204 Nm |

Components sized in sequence: brake disc (diameter, thickness, number of discs),
caliper (angle amplitude, piston diameter), then bearings, shaft, and fasteners.

## Structural Validation — ABAQUS FEA
Operational loads, stress distributions, and fatigue cycles simulated.
All results verified against aerospace safety factors. Material selection
justified against fatigue durability requirements.

## Deliverables
5-sheet technical drawing set (A3, scale 1:2), full CATIA V5 assembly,
bill of materials — 11 referenced components.
        `,
        coverImage: '/projects/design-cad/aircraft-brake/cover.jpg',
        images: [
          { src: '/projects/design-cad/aircraft-brake/img-01.jpg', alt: 'Assembly drawing', caption: 'FIG. 01 — Assembly: cross-section and isometric view (scale 1:2)' },
          { src: '/projects/design-cad/aircraft-brake/img-02.jpg', alt: 'Brake disc detail', caption: 'FIG. 02 — Detail: brake disc and caliper' },
          { src: '/projects/design-cad/aircraft-brake/img-03.jpg', alt: 'Rolling assembly', caption: 'FIG. 03 — Detail: shaft, bearings and rolling assembly' },
        ],
        links: [], status: 'completed',
      },
      {
        id: 'shoulder-prosthesis',
        title: 'Design & Optimization of a Shoulder Prosthesis',
        subtitle: 'FEA simulation and fatigue testing of a glenoid implant',
        year: 2025, duration: 'Jan. 2025 – Jun. 2025',
        context: 'Team project (5 members, team lead) — Arts et Métiers, Paris',
        domains: ['mécanique'],
        tags: ['CATIA V5', 'ABAQUS', 'FEA', 'Fatigue Testing', 'Biomechanics', 'Team Lead'],
        shortDesc: 'Led 5-member team through full prosthesis design cycle: FEA (ABAQUS), physical fatigue testing, and redesign with structural pegs to counter glenoid implant loosening.',
        fullDesc: `
## Team Lead
Coordinated CATIA V5 modeling, FEA, and prototype testing across 5 engineers.
Organized design reviews; delivered CAD models, FEA reports, and validated
prototypes on schedule.

## Phase 1 — FEA (ABAQUS)
Stress/strain fields under physiological loading identified candidate materials
and critical zones. Compression limit analysis established safety margins.

## Phase 2 — Fatigue Testing
Cyclic loading on fatigue machine. Finding: loosening initiates at specific
attachment zones that match FEA-predicted stress concentrations.

## Phase 3 — Redesign
**Structural pegs** introduced at weak zones — increasing bone–implant contact
area and redistributing stresses away from loosening initiation sites.
        `,
        coverImage: '/projects/design-cad/shoulder-prosthesis/cover.jpg',
        images: [
          { src: '/projects/design-cad/shoulder-prosthesis/img-01.jpg', alt: 'CATIA V5 prosthesis drawing', caption: 'FIG. 01 — CATIA V5: prosthesis technical drawing (scale 7:1)' },
          { src: '/projects/design-cad/shoulder-prosthesis/img-02.jpg', alt: 'ABAQUS stress field', caption: 'FIG. 02 — FEA: stress field and deformation (ABAQUS)' },
          { src: '/projects/design-cad/shoulder-prosthesis/img-03.jpg', alt: 'Fatigue test', caption: 'FIG. 03 — Fatigue testing: glenoid loosening under cyclic loading' },
        ],
        links: [], status: 'completed',
      },
      {
        id: 'capping-machine',
        title: 'Automatic Bottle Capping Machine',
        subtitle: 'Cam-follower mechanism — 1,800 bottles/hour',
        year: 2025, duration: 'Jan. 2025 – Jun. 2025',
        context: 'Course project — Arts et Métiers, Paris',
        domains: ['mécanique'],
        tags: ['CATIA V5', 'Mechanism Design', 'Cam-Follower', 'Industrial Automation'],
        shortDesc: 'Cam-follower mechanism for 1,800 bottles/hour capping. Full analytical validation (non-detachment, Hertz contact, geometric interference) then CATIA V5 modeling and 3-sheet drawing set.',
        fullDesc: `
## Motion Law — 3-4-5 Polynomial
Cam at 30 rpm. 3-4-5 law selected for zero velocity and acceleration at stroke
endpoints — no impact, continuous jerk profile.

## Mechanical Validation
| Criterion | Status |
|-----------|--------|
| Non-detachment | ✓ Spring force > inertia force at all positions |
| Hertz contact pressure | ✓ Within allowable limit for material pair |
| Geometric interference | ✓ Cam profile never intersects follower |

Full mechanism modeled in CATIA V5 (GSD). 3-sheet manufacturing drawing set delivered.
        `,
        coverImage: '/projects/design-cad/capping-machine/cover.jpg',
        images: [
          { src: '/projects/design-cad/capping-machine/img-01.jpg', alt: 'Assembly drawing', caption: 'FIG. 01 — Assembly: cam-follower capping mechanism' },
          { src: '/projects/design-cad/capping-machine/img-02.jpg', alt: 'Cam profile detail', caption: 'FIG. 02 — Detail: cam profile geometry and roller follower' },
          { src: '/projects/design-cad/capping-machine/img-03.jpg', alt: 'Compression rod drawing', caption: 'FIG. 03 — Detail: compression rod, housing and shaft' },
        ],
        links: [], status: 'completed',
      },
    ],
  },


  // ═══════════════════════════════════════════════════════
  // GROUP 2 — MANUFACTURING PROJECTS
  // ═══════════════════════════════════════════════════════
  {
    id: 'manufacturing',
    title: 'Manufacturing Projects',
    shortDesc: 'End-to-end manufacturing: sand casting, conventional machining, 5-axis drilling, and dimensional validation against ISO 2768 tolerances.',
    coverImage: '/projects/manufacturing/mixer-bearing/cover.jpg',
    domains: ['mécanique'],
    tags: ['Sand Casting', 'Machining', 'Turning', 'Milling', '5-Axis', 'GD&T'],
    featured: true,
    projects: [
      {
        id: 'mixer-bearing',
        title: 'Mixer Bearing — Full Manufacturing Cycle',
        subtitle: 'Sand casting to 5-axis drilling and dimensional validation',
        year: 2024, duration: 'Sept. 2023 – Feb. 2024',
        context: 'Course project — Arts et Métiers, Paris',
        domains: ['mécanique'],
        tags: ['Sand Casting', 'Aluminum', 'Turning', 'Milling', '5-Axis Drilling', 'GD&T', 'Metrology'],
        shortDesc: 'Complete manufacturing cycle of an aluminum mixer bearing: sand casting, turning and milling, 5-axis drilling, and full dimensional validation against ISO 2768.',
        fullDesc: `
## Production Chain
1. **Process planning** from engineering drawing (ISO 2768).
2. **Sand casting** — mold, aluminum pour, extraction.
3. **Conventional machining** — turning (lathe) and milling.
4. **5-axis drilling** — compound-angle holes unreachable with 3-axis.
5. **Dimensional validation** — metrology vs. ISO 2768 tolerances. Part conformant.
        `,
        coverImage: '/projects/manufacturing/mixer-bearing/cover.jpg',
        images: [
          { src: '/projects/manufacturing/mixer-bearing/img-01.jpg', alt: 'Engineering drawing', caption: 'FIG. 01 — Engineering drawing (A3, 1:1, ISO 2768)' },
          { src: '/projects/manufacturing/mixer-bearing/img-02.jpg', alt: 'Raw casting', caption: 'FIG. 02 — Raw aluminum casting after sand mold extraction' },
          { src: '/projects/manufacturing/mixer-bearing/img-03.jpg', alt: 'Turning operation', caption: 'FIG. 03 — Conventional turning: finishing external diameter' },
        ],
        links: [], status: 'completed',
      },
    ],
  },


  // ═══════════════════════════════════════════════════════
  // GROUP 3 — RESEARCH & INDUSTRY PROJECTS
  // ═══════════════════════════════════════════════════════
  {
    id: 'research',
    title: 'Research & Industry Projects',
    shortDesc: 'R&D engineering across academic and industrial settings: plasma hydrogen reactor, offshore liquid hydrogen transport, and multi-scale data center thermal analysis.',
    coverImage: '/projects/research/hydrogen-reactor/cover.jpg',
    domains: ['recherche'],
    tags: ['COMSOL', 'Python', 'CFD', 'Hydrogen', 'R&D', 'Thermal Systems'],
    featured: true,
    projects: [
      {
        id: 'hydrogen-reactor',
        title: 'CO₂-Free Hydrogen Reactor',
        subtitle: 'Microwave plasma reactor for methane cracking — UC Berkeley',
        year: 2025, duration: 'Sept. 2025 – Present',
        context: 'R&D Engineer — UC Berkeley',
        domains: ['recherche'],
        tags: ['COMSOL Multiphysics', 'CFD', 'Electromagnetics', 'Heat Transfer', 'Experimental Validation'],
        shortDesc: 'Design and multiphysics modeling of a microwave plasma reactor for CO₂-free hydrogen production. Coupled EM, thermal, and flow simulation in COMSOL, validated experimentally.',
        fullDesc: `
## Context
R&D at **UC Berkeley** — microwave-induced plasma cracking of methane producing
hydrogen and solid carbon with zero CO₂ emissions.

## Reactor Mechanical Design
Cavity geometry, waveguide interfaces, and gas injection hardware engineered
via parametric CAD. Geometry iteratively refined for stable plasma conditions.

## COMSOL Multiphysics — 3D Coupled Model
| Domain | Role |
|--------|------|
| Electromagnetic propagation | Microwave field and energy deposition |
| Conjugate heat transfer | Temperature field and cooling channel sizing |
| Compressible flow | Gas injection dynamics and residence time |

## Experimental Validation
Reactor instrumented with thermocouples and flow meters. Measurements
correlated with COMSOL outputs; cavity geometry iterated to improve
thermal efficiency and plasma stability.
        `,
        coverImage: '/projects/research/hydrogen-reactor/cover.jpg',
        images: [
          { src: '/projects/research/hydrogen-reactor/img-01.jpg', alt: 'Reactor assembly', caption: 'FIG. 01 — Reactor: cavity geometry and waveguide interface' },
          { src: '/projects/research/hydrogen-reactor/img-02.jpg', alt: 'COMSOL result or setup', caption: 'FIG. 02 — COMSOL: temperature field / experimental instrumentation' },
        ],
        links: [], status: 'in-progress',
      },
      {
        id: 'hydrogen-transport',
        title: 'Offshore Liquid Hydrogen Transport',
        subtitle: 'System architecture and techno-economic modeling — Hynamics, Paris',
        year: 2025, duration: 'Jan. 2025 – Jun. 2025',
        context: 'R&D Engineer Intern — Hynamics, Paris',
        domains: ['recherche'],
        tags: ['Hydrogen', 'Thermodynamics', 'System Architecture', 'Techno-Economic Modeling'],
        shortDesc: 'Sizing and multi-criteria evaluation of liquid hydrogen offshore–onshore transport architectures. Thermodynamic modeling of cryogenic storage and piping. Proprietary results — overview only.',
        fullDesc: `
## Context
Six-month R&D internship at **Hynamics** (Paris) on liquid hydrogen
offshore-to-onshore transport chain architectures.

*Detailed technical results are proprietary to Hynamics. Overview only.*

## System Sizing
- LH₂ storage tanks — volume, insulation, boil-off rates.
- Piping networks — pressure drop and flow rate optimization.
- Thermodynamic modeling of cryogenic systems (LH₂ at −253°C).

## Techno-Economic Analysis
| Criterion | Description |
|-----------|-------------|
| CAPEX / OPEX | Capital and operational cost estimation |
| Boil-off rate | Hydrogen loss during transport |
| Energy consumption | Total budget across the transport chain |

Output: ranked architecture concepts and client-ready recommendations.
        `,
        coverImage: '/projects/research/hydrogen-transport/cover.jpg',
        images: [
          { src: '/projects/research/hydrogen-transport/img-01.jpg', alt: 'Hynamics visual', caption: 'FIG. 01 — Offshore hydrogen transport system (illustrative)' },
        ],
        links: [], status: 'completed',
      },
      {
        id: 'datacenter-thermal',
        title: 'Multi-Scale Thermal Analysis of Data Centers',
        subtitle: 'Five-project portfolio spanning chip to cooling tower — UC Berkeley ME 193E',
        year: 2026, duration: 'Spring 2026',
        context: 'Course project — ME 193E/292E, UC Berkeley',
        domains: ['recherche'],
        tags: ['Python', 'COMSOL', 'CFD', 'Reality DC', 'Thermal Systems', 'Data Centers', 'Finite Difference'],
        shortDesc: 'Five interconnected projects analyzing data center cooling across six orders of magnitude — from chip-scale conduction (Python FD solver) to room-scale CFD (Reality DC). PUE 1.186 achieved with cold-aisle containment.',
        fullDesc: `
## Overview
A deliberate **zoom-in, zoom-out** methodology spanning six length scales —
from transistor junctions (nm) to cooling towers (km) — unified by a consistent
set of physical parameters across all five projects.

| Project | Scale | Method | Key Output |
|---------|-------|--------|------------|
| P1 — Ensemble COP | Building (10 MW) | Psychrometric / energy balance | COP 3–30+ vs. wet-bulb T |
| P2 — Chip Conduction | Chip (0.5–50 mm) | Finite difference 1D/2D (Python) | Temperature field, Biot analysis |
| P3 — Boundary Layer | BL (0.1–50 mm) | Blasius-Pohlhausen + custom Python CFD | f''(0) = 0.332, θ'(0) = 0.2927 |
| P4 — COMSOL | Chip BL (60 mm) | FEM (COMSOL Multiphysics) | Nu comparison, mesh sensitivity |
| P5 — Reality DC | Room (8.25 m) | Room-scale CFD (Reality DC) | PUE 1.186, ASHRAE 2021 compliance |

## Project 1 — System COP
10 MW data center modeled with three operating modes (free cooling,
partial economizer, full mechanical). COP ranges from **3 (Twb = 35°C)
to 30+ (Twb < 0°C)**. Breakpoints at BP1 = 7°C and BP2 = 12°C.

## Project 2 — Chip Conduction (Python)
- **1D heat kernel**: explicit FTCS scheme on 2000 nodes. L2 error drops
  from 39% at t = 0.1 s to **4% at t = 10 s** as the Gaussian broadens.
- **2D chip conduction**: Gauss-Seidel on 181×65 grid. Temperature field
  reveals TIM contact resistance as the dominant thermal bottleneck.
- **Lumped capacitance**: Biot number < 0.1 validated for steel rod in cross-flow.

## Project 3 — Boundary Layer + Python CFD
Blasius ODE solved by shooting method: **f''(0) = 0.332057**.
Pohlhausen energy equation: **θ'(0) = 0.2927** for Pr = 0.7 (~1% error).
Custom Python SIMPLE solver on 3 grids (200×120 to 1600×960) confirms
**second-order spatial convergence**.

## Project 4 — COMSOL
Flat-plate BL on uniform (41,096 elements) and wall-refined (250,051 elements)
meshes. Both collapse onto the Blasius curve. Chip Biot number:
**Bi = 1.10 × 10⁻⁴** — four orders of magnitude below the lumped-body threshold.

## Project 5 — Reality DC Room Simulation
8.25 m × 8.25 m hall, 12 cabinets at 5 kW each (60 kW total).

| Configuration | Max Cabinet Inlet | PUE | SHI |
|---------------|-------------------|-----|-----|
| Baseline (open aisle) | 29.1°C | — | high recirculation |
| Cold-aisle containment | 18.0°C | **1.186** | **0.0008** |
| 7.5 kW/cabinet (50% load increase) | 21.0°C | — | 11 K ASHRAE margin |

Cold-aisle containment eliminates hot-air recirculation entirely, drops
max inlet by 11°C, and achieves **100% ASHRAE 2021 compliance** with
substantial headroom for load growth.
        `,
        coverImage: '/projects/research/datacenter-thermal/cover.jpg',
        images: [
          {
            src: '/projects/research/datacenter-thermal/img-01.jpg',
            alt: 'COP vs wet-bulb temperature curve',
            caption: 'FIG. 01 — System COP vs. wet-bulb temperature: three operating modes (P1)',
          },
          {
            src: '/projects/research/datacenter-thermal/img-02.jpg',
            alt: 'Reality DC baseline temperature field — hot aisle recirculation',
            caption: 'FIG. 02 — Reality DC: baseline temperature field at 1 m (hot-aisle recirculation visible)',
          },
          {
            src: '/projects/research/datacenter-thermal/img-03.jpg',
            alt: 'Reality DC cold-aisle containment — ASHRAE compliance',
            caption: 'FIG. 03 — Cold-aisle containment: 100% ASHRAE 2021 compliance, PUE 1.186',
          },
        ],
        links: [], status: 'completed',
      },
    ],
  },


  // ═══════════════════════════════════════════════════════
  // GROUP 4 — SOFTWARE, ML & WEB PROJECTS
  // ═══════════════════════════════════════════════════════
  {
    id: 'software-ml',
    title: 'Software, ML & Web Projects',
    shortDesc: 'Web applications, machine learning pipelines, and physics-informed models — from building energy simulators to neural networks trained on NASA microgravity data.',
    coverImage: '/projects/software-ml/building-thermal/cover.jpg',
    domains: ['software'],
    tags: ['Python', 'Keras', 'TensorFlow', 'React', 'TypeScript', 'Random Forest', 'PINN'],
    featured: true,
    projects: [

      {
        id: 'building-thermal',
        title: 'Building Thermal Efficiency Simulator',
        subtitle: 'Interactive web tool for building energy modeling',
        year: 2026, duration: '2026',
        context: 'Personal project',
        domains: ['software'],
        tags: ['React', 'TypeScript', 'Thermal Modeling', 'Energy', 'Web App'],
        shortDesc: 'Web app for modeling heating and ventilation energy consumption of a fully customizable building — floors, surface area, window types, insulation thickness, and annual climate data.',
        fullDesc: `
## Building Customization
| Parameter | Options |
|-----------|---------|
| Number of floors | Custom integer |
| Floor surface area | m² per floor |
| Window surface & count | Per wall, per floor |
| Window type | Single / double / triple glazing, low-e |
| Insulation material | Wool, polystyrene, polyurethane, etc. |
| Insulation thickness | mm — directly impacts U-value |
| Climate profile | Annual temperature dataset (monthly averages) |

## Thermal Engine
Computes U-values per component, heat losses through the envelope,
heating energy demand over 12 months, ventilation consumption,
and annual cost estimate.

## Output
Monthly consumption charts, annual summary, sensitivity analysis
(e.g. impact of insulation thickness on total consumption).

*Currently running locally — live demo link to be added on deployment.*
        `,
        coverImage: '/projects/software-ml/building-thermal/cover.jpg',
        images: [
          { src: '/projects/software-ml/building-thermal/img-01.jpg', alt: 'Building configurator UI', caption: 'FIG. 01 — Building configurator: floors, insulation, window type selection' },
          { src: '/projects/software-ml/building-thermal/img-02.jpg', alt: 'Energy results dashboard', caption: 'FIG. 02 — Results dashboard: monthly heating and ventilation consumption' },
        ],
        links: [],
        status: 'in-progress',
      },

      {
        id: 'wellbe',
        title: 'Well.Be',
        subtitle: 'AI-powered caregiver burnout prevention — Co-founder',
        year: 2026, duration: '2026 – Present',
        context: 'Co-founder & Product/Backend — Well.Be startup',
        domains: ['software'],
        tags: ['LLM', 'AI', 'Product', 'Backend', 'Startup', 'MVP', 'TypeScript', 'Python'],
        shortDesc: 'Co-founded Well.Be, an AI-driven platform for informal caregiver support. LLM-based feedback modules, caregiver journey architecture, MVP live with ~200 beta users.',
        fullDesc: `
## Context
**Well.Be** addresses caregiver burnout — a critical health issue affecting
millions of informal caregivers.

## Product Architecture
Platform structured around three caregiver journey dimensions:
fatigue, sleep, and emotional load. Usage data centralized for
future integration of personalized prevention tools.

## AI-Driven Support
**LLM-based modules** generate contextualized feedback from caregiver responses,
linking prompts to risk factors: work intensity, emotional demands, autonomy.

## MVP
Launched with **~200 beta users** to validate usage patterns and perceived
value of AI-generated recommendations.

*Platform is in private beta — screenshots show interface at a high level.*
        `,
        coverImage: '/projects/software-ml/wellbe/cover.jpg',
        images: [
          { src: '/projects/software-ml/wellbe/img-01.jpg', alt: 'Well.Be dashboard', caption: 'FIG. 01 — Well.Be: caregiver journey dashboard' },
          { src: '/projects/software-ml/wellbe/img-02.jpg', alt: 'AI feedback view', caption: 'FIG. 02 — Well.Be: AI-generated feedback and recommendations' },
        ],
        links: [{ label: 'Well.Be', url: 'https://well.be', type: 'external' }],
        status: 'in-progress',
      },

      {
        id: 'ml-thermal-engineering',
        title: 'Machine Learning for Thermal Engineering',
        subtitle: 'Genetic algorithms, neural networks, PINNs, and optimal control — UC Berkeley ME249',
        year: 2025, duration: 'Fall 2025',
        context: 'Course project — ME249, UC Berkeley (with Jean Duthoit)',
        domains: ['software'],
        tags: ['Python', 'Keras', 'TensorFlow', 'Genetic Algorithm', 'PINN', 'Neural Networks', 'PyGAD'],
        shortDesc: 'Four ML projects applied to thermal systems: genetic algorithm on NASA microgravity boiling data, neural networks for a hybrid solar/fossil turbine, physics-informed neural network for 2D heat conduction, and classification for optimal PV system control.',
        fullDesc: `
## Overview — Methodological Progression
A coherent progression from gradient-free optimization to physics-embedded
loss functions, applied to real thermal engineering datasets.

---

## Project 1 — Nucleate Boiling in Microgravity (Genetic Algorithm)
**Data:** NASA KC-135 parabolic flight campaigns (g = 0.01–2 g₀,
water/2-propanol mixtures, P = 5.5–9.5 kPa).

Power-law model fitted: q'' = n₁·ΔT^n₂·g^n₃

| Parameter | Value | Interpretation |
|-----------|-------|----------------|
| n₂ (ΔT exponent) | 3.10 | Consistent with Rohsenow correlation |
| n₃ (g exponent) | 0.062 | Marangoni effect dominates buoyancy |
| F_err | < 0.035 | Target achieved |

n₃ = 0.062 vs. 0.25 for pure fluids — **quantitative confirmation that
the Marangoni effect compensates for loss of buoyancy in microgravity.**

---

## Project 2 — Hybrid Solar/Fossil Gas Turbine (Neural Networks)
3-input → 1-output network predicting system efficiency α.
Manual backpropagation (first principles) implemented and validated
against Keras — weight differences of 10⁻² to 10⁻³ only.

| Method | Best MAE |
|--------|----------|
| Manual (first principles) | RMS = 0.0181 |
| Keras (RMSprop) | MAE = 0.0133 |
| PyGAD (best config: ReLU, [4,8,4,2]) | MAE = 0.0748 |

Key insight: Keras remains stable under +20% weight initialization perturbation
while the manual model diverges — RMSprop robustness demonstrated.

---

## Project 3 — PV Panel: Deep Learning and PINN
**Standard deep learning** (Dense ELU, RMSprop, 800 epochs):
Training MAE = 0.00263 / Validation MAE = 0.01861 (×7 — acceptable for 36 pts).

**Physics-Informed Neural Network (PINN):** network trained to satisfy the
2D Laplace equation ∂²T/∂x² + ∂²T/∂y² = 0 using only boundary measurements.

Composite loss: L = L_boundary + κ·L_Laplace + 20·L_thermodynamic_range

Result: **T(0,0) = 49.997°C** (measured: 50°C) — sub-degree accuracy with
**no interior measurements**, physics replacing data.

---

## Project 4 — Multi-Panel PV System: Classification and Optimal Control
3 wiring modes (4 parallel / 2×2 / 4 series) classified via softmax output.
**Dropout (p = 0.25)** added to mitigate overfitting (206 params / 48 points).

Algorithmic stack: one-hot encoding → categorical cross-entropy →
Adam optimizer → argmax(softmax) → optimal wiring mode selection.

---

## Cross-Cutting Insights
- **Median normalization** — robust to outliers, accelerates gradient convergence.
- **ELU vs ReLU** — ELU avoids dead neurons, near-zero mean activations.
- **MSE → m4e → PINN** — progressive encoding of physics into loss functions.
- **Overfitting diagnostic**: MAE_val / MAE_train > 3 → warning (observed in P4, ratio 3.2).
        `,
        coverImage: '/projects/software-ml/ml-thermal-engineering/cover.jpg',
        images: [
          {
            src: '/projects/software-ml/ml-thermal-engineering/img-01.jpg',
            alt: 'Genetic algorithm convergence — boiling heat flux',
            caption: 'FIG. 01 — P1: genetic algorithm convergence and q'' vs ΔT fit (NASA data)',
          },
          {
            src: '/projects/software-ml/ml-thermal-engineering/img-02.jpg',
            alt: 'PINN temperature field — 2D heat conduction',
            caption: 'FIG. 02 — P3: PINN-predicted 2D temperature field (Laplace equation)',
          },
          {
            src: '/projects/software-ml/ml-thermal-engineering/img-03.jpg',
            alt: 'PV panel power surface — deep learning prediction',
            caption: 'FIG. 03 — P3: surface Ẇ(R_L, I_D) predicted by deep learning model',
          },
        ],
        links: [], status: 'completed',
      },

      {
        id: 'electricity-forecasting',
        title: 'Electricity Consumption Forecasting',
        subtitle: 'Multi-zone Random Forest pipeline — Tetouan SCADA dataset',
        year: 2026, duration: '2026',
        context: 'Personal project',
        domains: ['software'],
        tags: ['Python', 'Random Forest', 'scikit-learn', 'Time Series', 'Feature Engineering', 'EDA'],
        shortDesc: 'End-to-end forecasting pipeline for 3 electricity distribution zones using the Tetouan SCADA dataset (52,416 observations, 10-minute intervals). Best R² ≈ 0.9975 with Random Forest and extended feature engineering.',
        fullDesc: `
## Dataset
**2017 Tetouan SCADA dataset** — 52,416 observations at 10-minute resolution
across 3 electricity distribution zones (Zone 1, 2, 3).

## Pipeline
1. **Data cleaning** — handling missing values and outliers.
2. **Exploratory analysis** — temporal patterns, weather-demand relationships.
3. **Feature engineering**:
   - *Official features*: weather (temperature, humidity, wind speed) + time variables.
   - *Extended features*: lagged zone signals + rolling statistics (means, std).
4. **Modeling**: Linear regression baseline vs. **Random Forest** (reproducible
   train/test split), trained and evaluated per zone.
5. **Evaluation**: R², MAE, diagnostic visualizations, feature importance charts.

## Results

| Zone | R² (Official) | R² (Extended) |
|------|--------------|--------------|
| Zone 1 | — | 0.9969 |
| Zone 2 | — | 0.9972 |
| Zone 3 | — | 0.9985 |
| **Average** | — | **0.9975** |

Strict/extended comparison quantifies exactly **how much performance
comes from academic feature constraints vs. enriched production-style features**
— demonstrating the tradeoff between reproducibility and accuracy.

## Key Takeaways
- Random Forest with extended features consistently outperforms linear models.
- Temporal feature engineering (lags, rolling stats) is the primary driver of
  performance gains over weather-only inputs.
- Structured reports and shareable result tables produced for academic collaboration.
        `,
        coverImage: '/projects/software-ml/electricity-forecasting/cover.jpg',
        images: [
          {
            src: '/projects/software-ml/electricity-forecasting/img-01.jpg',
            alt: 'EDA — temporal consumption patterns',
            caption: 'FIG. 01 — Exploratory analysis: temporal consumption patterns across zones',
          },
          {
            src: '/projects/software-ml/electricity-forecasting/img-02.jpg',
            alt: 'Random Forest — predicted vs actual, feature importance',
            caption: 'FIG. 02 — Random Forest: predicted vs. actual consumption and feature importance',
          },
        ],
        links: [], status: 'completed',
      },

    ],
  },

];

// ─────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────

export const getGroupById = (groupId: string): ProjectGroup | undefined =>
  projectGroups.find((g) => g.id === groupId);

export const getProjectInGroup = (groupId: string, projectId: string): Project | undefined =>
  getGroupById(groupId)?.projects.find((p) => p.id === projectId);

export const getAllProjects = (): Project[] => [
  ...standaloneProjects,
  ...projectGroups.flatMap((g) => g.projects),
];

export const getActiveGroups = (): ProjectGroup[] =>
  projectGroups.filter((g) => g.projects.length > 0);
```

---

## A3. ROUTING — `App.tsx`

```tsx
<Routes>
  <Route path="/"                              element={<Home />} />
  <Route path="/projects"                      element={<Projects />} />
  <Route path="/projects/:groupId"             element={<ProjectGroupPage />} />
  <Route path="/projects/:groupId/:projectId"  element={<ProjectDetail />} />
  <Route path="/projects/:projectId"           element={<ProjectDetail />} />
  <Route path="/about"                         element={<About />} />
</Routes>
```

---

## A4. SPECIAL RENDERING RULES

**`in-progress` badge** — render next to title in `<ProjectDetail />` when
`project.status === 'in-progress'`. Style: `font-mono`, `text-xs`,
background `--color-accent-soft`, color `--color-accent`, padding `2px 8px`,
border-radius `2px`.

**Proprietary notice** — render above body text for `project.id === 'hydrogen-transport'`
and `project.id === 'wellbe'`. Style: `font-mono`, `text-xs`, `--color-ink-light`,
border-left `2px solid --color-accent`, background `--color-accent-soft`,
padding `8px 12px`, margin-bottom `24px`.

**"Live demo coming soon"** — render greyed-out label instead of link button
when `project.id === 'building-thermal'` and `project.links` is empty.

---

## A5. COMPLETE IMAGE FILE CONVENTION

```
public/projects/
├── design-cad/
│   ├── cover.jpg
│   ├── heart-pump/          cover + img-01~03
│   ├── aircraft-brake/      cover + img-01~03
│   ├── shoulder-prosthesis/ cover + img-01~03
│   └── capping-machine/     cover + img-01~03
├── manufacturing/
│   ├── cover.jpg
│   └── mixer-bearing/       cover + img-01~03
├── research/
│   ├── cover.jpg
│   ├── hydrogen-reactor/    cover + img-01~02
│   ├── hydrogen-transport/  cover + img-01
│   └── datacenter-thermal/  cover + img-01 (COP curve)
│                                   img-02 (Reality DC baseline)
│                                   img-03 (Reality DC with CAC)
└── software-ml/
    ├── cover.jpg
    ├── building-thermal/    cover + img-01 (config UI) + img-02 (results)
    ├── wellbe/              cover + img-01 (dashboard) + img-02 (AI feedback)
    ├── ml-thermal-engineering/ cover + img-01 (GA convergence)
    │                              img-02 (PINN field) + img-03 (PV surface)
    └── electricity-forecasting/ cover + img-01 (EDA) + img-02 (RF results)
```

*All image components must render a neutral fallback placeholder
(grey rectangle + filename label in font-mono) when file does not exist yet.*
