import type { Project, ProjectDomain, ProjectGroup } from '../types/project';

export const standaloneProjects: Project[] = [];

export const projectGroups: ProjectGroup[] = [
  {
    id: 'design-cad',
    title: 'Design & CAD Projects',
    shortDesc:
      'Advanced mechanical design: cam mechanisms, biomedical implants, and aeronautical braking modeled in CATIA V5 and validated analytically or with FEA/CFD.',
    coverImage: '/projects/design-cad/cover-cad.png',
    domains: ['mechanical'],
    tags: ['CATIA V5', 'STARCCM+', 'ABAQUS', 'CFD', 'CAE', 'Biomechanics'],
    featured: true,
    projects: [
      {
        id: 'heart-pump',
        title: 'Design of a Heart Pump',
        subtitle: 'Centrifugal pump for cardiac applications',
        year: 2025,
        duration: 'Sept. 2024 – Feb. 2025',
        context: 'Course project — Arts et Métiers, Paris',
        domains: ['mechanical'],
        tags: ['CATIA V5', 'STARCCM+', 'CFD', 'Biomechanics', 'GSD'],
        shortDesc:
          'Centrifugal cardiac pump design and CFD simulation. Efficiency improved from 49% to 59% through iterative design cycles combining prototypes and STARCCM+ simulations.',
        fullDesc: `
## Pump Geometry & Assemblies
Designed precision mechanical components for a miniaturized centrifugal cardiac pump in **CATIA V5 (GSD)**, covering the impeller, housing, and internal flow passages from concept to detailed assembly. Every geometric decision balanced hydraulic performance (pump curve shape and efficiency peak) with hemocompatibility constraints — shear zones and flow stagnation regions can trigger platelet aggregation and thrombosis, directly threatening patient safety. The resulting assembly was fully toleranced and structured for downstream manufacturing review.

## CFD Simulation — STARCCM+
A full volumetric mesh was generated in STARCCM+ and refined at the impeller–housing interface to resolve boundary layer effects under physiological conditions. The simulation coupled fluid dynamics with blood rheology, substituting water at low flow rates to stay within the laminar regime while matching viscosity at the operating point. Pressure distribution, flow uniformity, and heat transfer were evaluated across the full operating range, identifying recirculation zones that informed successive geometry revisions.

| Parameter | Influence |
|-----------|-----------|
| Mesh size | Accuracy vs. computation time trade-off |
| Inlet flow velocity | Laminar vs. turbulent regime transition |
| Fluid properties | Blood substituted by water at certain flow rates |

## Iterative Improvement & Results
Three design-test cycles combining 3D-printed prototypes and STARCCM+ re-simulations raised overall pump efficiency from **49% to 59%**. Peak efficiency of 58.5% occurred at 8 L/min — slightly above the 5 L/min physiological target, indicating a marginally oversized design. Reducing rotor speed shifts the efficiency peak toward the operating point and projects an additional **~10% energy gain**, confirming the value of combining physical prototyping with CFD iteration.
        `,
        coverImage: '/projects/design-cad/heart-pump/cover.png',
        images: [
          {
            src: '/projects/design-cad/heart-pump/img-01.png',
            alt: 'CATIA V5 impeller and housing',
            caption: 'FIG. 01 — CATIA V5: centrifugal impeller and housing (GSD)',
          },
          {
            src: '/projects/design-cad/heart-pump/img-02.png',
            alt: 'STARCCM+ volumetric mesh',
            caption: 'FIG. 02 — Volumetric mesh for blood flow simulation (STARCCM+)',
          },
          {
            src: '/projects/design-cad/heart-pump/img-03.png',
            alt: 'CFD velocity field',
            caption: 'FIG. 03 — Velocity field and streamlines from CFD results',
          },
        ],
        links: [],
        status: 'completed',
      },
      {
        id: 'aircraft-brake',
        title: 'Aircraft Brake Design',
        subtitle: 'Structural sizing and CAD of a mobile-caliper disc brake',
        year: 2025,
        duration: 'Sept. 2024 – Feb. 2025',
        context: 'Course project — Arts et Métiers, Paris',
        domains: ['mechanical'],
        tags: ['CATIA V5', 'ABAQUS', 'FEA', 'Structural Sizing', 'Aeronautics'],
        shortDesc:
          'Full sizing and CAD of an aircraft disc brake with FEA validation against aerospace safety factors: 800 kg aircraft, −4 m/s² and 204 Nm braking torque.',
        fullDesc: `
## Brake Architecture & CAD
Designed the full aircraft brake system architecture in **CATIA V5**, progressing from initial concept definition through detailed component modeling to a five-sheet A3 manufacturing drawing set (scale 1:2). The system is a mobile-caliper disc brake sized for an 800 kg aircraft requiring −4 m/s² maximum deceleration and 204 Nm braking torque, with components sized sequentially — disc, caliper, then bearings, shaft, and fasteners — so each stage's outputs fed dimensional constraints for the next. A bill of materials covering 11 referenced components was delivered alongside the technical drawing set.

| Parameter | Value |
|-----------|-------|
| Aircraft mass | 800 kg |
| Max deceleration | −4 m/s² |
| Braking time | 14 s |
| Braking torque | 204 Nm |

## Material Selection & Reliability
Materials were selected for high-reliability aerospace operation, with every design choice justified against fatigue durability requirements and applicable aerospace safety standards. Trade-offs between thermal capacity (heat generated during repeated hard-braking events), structural weight, and contact wear resistance were evaluated for the disc and pad interface materials. Each selected material and specification was linked to a supporting safety factor calculation and documented in the drawing set for full traceability.

## FEA Performance Verification — ABAQUS
A comprehensive finite element model was built in **ABAQUS** to simulate full-braking load scenarios and extract stress distributions and fatigue cycle counts across all critical structural components. Results were systematically compared against aerospace static, dynamic, and fatigue safety factors for each component. All structural outputs were confirmed within allowable limits, validating the design prior to manufacturing drawing release.
        `,
        coverImage: '/projects/design-cad/aircraft-brake/cover.png',
        images: [
          {
            src: '/projects/design-cad/aircraft-brake/img-01.png',
            alt: 'Assembly drawing',
            caption: 'FIG. 01 — Assembly: cross-section and isometric view (scale 1:2)',
          },
          {
            src: '/projects/design-cad/aircraft-brake/img-02.png',
            alt: 'Brake disc detail',
            caption: 'FIG. 02 — Detail: brake disc and caliper',
          },
          {
            src: '/projects/design-cad/aircraft-brake/img-03.png',
            alt: 'Rolling assembly',
            caption: 'FIG. 03 — Detail: shaft, bearings and rolling assembly',
          },
        ],
        links: [],
        status: 'completed',
      },
      {
        id: 'shoulder-prosthesis',
        title: 'Design & Optimization of a Shoulder Prosthesis',
        subtitle: 'FEA simulation and fatigue testing of a glenoid implant',
        year: 2025,
        duration: 'Jan. 2025 – Jun. 2025',
        context: 'Team project (5 members, team lead) — Arts et Métiers, Paris',
        domains: ['mechanical'],
        tags: ['CATIA V5', 'ABAQUS', 'FEA', 'Fatigue Testing', 'Biomechanics', 'Team Lead'],
        shortDesc:
          'Led a five-member team through full prosthesis design: FEA, physical fatigue testing, and redesign with structural pegs to reduce implant loosening.',
        fullDesc: `
## Team Lead
Led a 5-member engineering team through the full mechanical design cycle of a shoulder glenoid prosthesis, coordinating **CATIA V5** modeling, **ABAQUS** FEA, and physical fatigue testing activities across all phases. Organized design reviews with supervisors, integrated feedback into revised iterations, and ensured on-time delivery of all technical deliverables: CAD models, FEA reports, and validated prototypes. The project maintained full traceability between simulation predictions and physical test observations at every phase transition.

## Phase 1 — FEA Characterization (ABAQUS)
Physiological loading conditions (glenohumeral joint forces in superior–inferior and anterior–posterior directions) were applied to the glenoid implant model, with material properties defined for both the UHMWPE implant body and the cortical bone substrate. Stress and strain fields identified critical concentration zones at the peg–bone interfaces and around the central keel, pinpointing the primary failure modes to investigate physically. These simulation results directly defined the loading parameters and failure hypotheses for the fatigue testing campaign.

## Phase 2 — Physical Fatigue Testing
The prosthesis prototype was mounted on a cyclic fatigue testing machine and subjected to repeated physiological loading over thousands of cycles. Loosening initiations were observed at the exact zones predicted by the FEA stress concentrations, cross-validating the numerical model against real physical behavior. Failure modes were catalogued with dimensional measurements, providing a quantitative basis for the redesign geometry changes.

## Phase 3 — Redesign & Validation
**Structural pegs** were introduced at the identified weak zones, increasing bone–implant contact area and redistributing peak stresses away from loosening initiation sites. The revised geometry was re-simulated in ABAQUS and showed significant reductions in contact pressure and interface stress at previously critical locations. Final FEA results confirmed the redesigned implant met all targeted safety factors under the full physiological loading envelope.
        `,
        coverImage: '/projects/design-cad/shoulder-prosthesis/cover-implant.png',
        images: [
          {
            src: '/projects/design-cad/shoulder-prosthesis/img-01-implant.png',
            alt: 'CATIA prosthesis drawing',
            caption: 'FIG. 01 — CATIA V5: prosthesis technical drawing (scale 7:1)',
          },
          {
            src: '/projects/design-cad/shoulder-prosthesis/img-02-implant.png',
            alt: 'ABAQUS stress field',
            caption: 'FIG. 02 — FEA: stress field and deformation (ABAQUS)',
          },
          {
            src: '/projects/design-cad/shoulder-prosthesis/img-03-implant.png',
            alt: 'Fatigue test setup',
            caption: 'FIG. 03 — Fatigue testing: glenoid loosening under cyclic loading',
          },
          {
            src: '/projects/design-cad/shoulder-prosthesis/img-04-implant.png',
            alt: 'Redesign — structural pegs',
            caption: 'FIG. 04 — Redesign: structural pegs reducing bone-implant loosening',
          },
          {
            src: '/projects/design-cad/shoulder-prosthesis/img-05-implant.png',
            alt: 'Final validation results',
            caption: 'FIG. 05 — Final stress redistribution after peg integration',
          },
        ],
        links: [],
        status: 'completed',
      },
      {
        id: 'capping-machine',
        title: 'Automatic Bottle Capping Machine',
        subtitle: 'Cam-follower mechanism — 1,800 bottles/hour',
        year: 2025,
        duration: 'Jan. 2025 – Jun. 2025',
        context: 'Course project — Arts et Métiers, Paris',
        domains: ['mechanical'],
        tags: ['CATIA V5', 'Mechanism Design', 'Cam-Follower', 'Industrial Automation'],
        shortDesc:
          'Cam-follower mechanism for 1,800 bottles per hour with full analytical validation, CATIA V5 modeling, and a three-sheet drawing set.',
        fullDesc: `
## Motion Law — 3-4-5 Polynomial
The cam was designed to rotate at **30 rpm**, producing 1,800 capping strokes per hour through a translating roller follower. The 3-4-5 polynomial motion law was selected over simpler profiles (constant velocity, parabolic) because it ensures zero velocity and zero acceleration at both stroke endpoints, eliminating impact loads on the follower and cap at the start and end of each stroke. Displacement, velocity, and acceleration profiles were derived analytically and verified graphically before generating the cam profile geometry.

## Mechanical Validation
Three failure modes were checked analytically to confirm the design's physical feasibility under operating conditions:

| Criterion | Status |
|-----------|--------|
| Non-detachment | ✓ Spring force > inertia force at all positions |
| Hertz contact pressure | ✓ Within allowable limit for cam–follower interface |
| Geometric interference | ✓ Cam profile never intersects follower geometry |

Spring stiffness was sized to maintain permanent follower contact against the maximum inertia force at the highest-acceleration point. Hertz contact stress at the cam–roller interface was computed from the minimum radius of curvature of the cam profile and verified against the material's allowable surface pressure.

## CAD & Deliverables
The full mechanism — cam, follower, spring, frame, and drive shaft — was modeled in **CATIA V5 (GSD)** with parametric dimensions directly linked to the analytical validation results. A three-sheet manufacturing drawing set was produced: overall assembly view, cam profile with dimensional tolerances, and follower assembly detail. All drawings include the functional tolerances required for the mechanism to reliably achieve its 1,800 bottles/hour production target.
        `,
        coverImage: '/projects/design-cad/capping-machine/cover.png',
        images: [
          {
            src: '/projects/design-cad/capping-machine/img-01.png',
            alt: 'Vue d\'ensemble — front and isometric views',
            caption: 'FIG. 01 — Assembly: front views (1:4, 1:7) and isometric view (1:6)',
          },
          {
            src: '/projects/design-cad/capping-machine/img-02.png',
            alt: 'Glissière — cross-section and detail',
            caption: 'FIG. 02 — Slide assembly: cross-section B-B and detail A (scale 1:2)',
          },
          {
            src: '/projects/design-cad/capping-machine/img-03.png',
            alt: 'Transmission de mouvement — fork component',
            caption: 'FIG. 03 — Motion transmission: fork geometry and isometric view (scale 1:3)',
          },
        ],
        links: [],
        status: 'completed',
      },
      {
        id: 'water-filled-glazing',
        title: 'Water-Filled Double-Glazing System',
        subtitle: 'Thermal energy optimization of a building envelope component',
        year: 2023,
        duration: 'Jan. 2022 – Jun. 2023',
        context: 'Course project — Arts et Métiers, Paris',
        domains: ['mechanical'],
        tags: ['Python', 'SolidWorks', 'CFD', 'Thermal Modeling', 'Experimentation'],
        shortDesc:
          'Designed and experimentally validated a water-filled double-glazing system to reduce building heat loss, achieving less than 5% variance between theoretical predictions and physical measurements.',
        fullDesc: `
## Concept & Mechanical Layout
Engineered a water-filled double-glazing system intended to reduce building envelope heat loss by exploiting the thermal mass and convective properties of the water layer between two glass panes. The mechanical layout integrated frame geometry, material selection for glazing and spacer elements, and flow channel geometry to maximize thermal performance while maintaining structural integrity. Design constraints included minimizing convective circulation within the water layer — natural convection cells reduce the effective thermal resistance — which directly influenced the aspect ratio and water-layer thickness chosen for the final geometry.

## Modeling & Experimentation
Theoretical thermal models were developed in **Python**, coupling conductive and convective heat transfer through the multi-layer glazing assembly using analytical 1D resistance networks and validated CFD runs in **SolidWorks**. A physical prototype was fabricated and instrumented with thermocouples at both glass surfaces and within the water layer to measure temperature profiles under controlled boundary conditions. Experimental runs were performed at multiple temperature differentials to characterize the system across a representative range of heating season conditions.

## Model Accuracy & Results
Theoretical predictions were compared against experimental temperature measurements across all instrumented points and operating conditions, yielding a **variance below 5%** between the model and physical results. This level of agreement confirmed both the validity of the thermal modeling approach and the robustness of the fabricated prototype as a representative physical specimen. The validated model provides a reliable basis for scaling the design to full building-panel dimensions and evaluating energy savings against standard double-glazing benchmarks.
        `,
        coverImage: '/projects/design-cad/water-filled-glazing/cover.png',
        images: [],
        links: [],
        status: 'completed',
      },
    ],
  },
  {
    id: 'software-ml',
    title: 'Software, ML & Web Projects',
    shortDesc:
      'Web applications, machine learning pipelines, and physics-informed models: from building energy simulators and AI-powered platforms to neural networks trained on NASA microgravity data.',
    coverImage: '/projects/software-ml/cover-soft.png',
    domains: ['software', 'machine-learning'],
    tags: ['React', 'TypeScript', 'Python', 'Keras', 'TensorFlow', 'Random Forest', 'PINN', 'LLM', 'AI'],
    featured: true,
    projects: [
      {
        id: 'building-thermal',
        title: 'Building Thermal Efficiency Simulator',
        subtitle: 'Interactive web tool for building energy modeling',
        year: 2026,
        duration: '2026',
        context: 'Personal project',
        domains: ['software'],
        tags: ['React', 'TypeScript', 'Thermal Modeling', 'Energy', 'Web App'],
        shortDesc:
          'Web app for modeling heating and ventilation energy consumption of a customizable building, including floors, windows, insulation, and climate data.',
        fullDesc: `
## Building Customization
| Parameter | Options |
|-----------|---------|
| Number of floors | Custom integer |
| Floor surface area | m² per floor |
| Window surface and count | Per wall, per floor |
| Window type | Single / double / triple glazing, low-e |
| Insulation material | Wool, polystyrene, polyurethane, etc. |
| Insulation thickness | mm — directly impacts U-value |
| Climate profile | Annual temperature dataset |

## Thermal Engine
Computes U-values per component, heat losses through the envelope,
heating demand over 12 months, ventilation consumption, and annual cost estimate.

## Output
Monthly consumption charts, annual summary, and sensitivity analysis.

*Currently running locally — live demo link to be added on deployment.*
        `,
        coverImage: '/projects/software-ml/thermosim/cover.png',
        images: [
          {
            src: '/projects/software-ml/thermosim/img-01.png',
            alt: 'Building configurator UI',
            caption: 'FIG. 01 — Building configurator: floors, insulation, and window selection',
          },
          {
            src: '/projects/software-ml/thermosim/img-02.png',
            alt: 'Energy results dashboard',
            caption: 'FIG. 02 — Results dashboard: monthly heating and ventilation consumption',
          },
        ],
        links: [{ label: 'Live demo', url: 'https://maximedns5.github.io/ThermoSim/', type: 'demo' }],
        status: 'in-progress',
      },
      {
        id: 'wellbe',
        title: 'Well.Be',
        subtitle: 'AI-powered caregiver burnout prevention — Co-founder',
        year: 2026,
        duration: '2026 – Present',
        context: 'Co-founder & Product/Backend — Well.Be startup',
        domains: ['software'],
        tags: ['LLM', 'AI', 'Product', 'Backend', 'Startup', 'MVP', 'TypeScript', 'Python'],
        shortDesc:
          'Co-founded Well.Be, an AI-driven platform for informal caregiver support with LLM-based feedback modules and an MVP live with around 200 beta users.',
        fullDesc: `
## Context
**Well.Be** addresses caregiver burnout, a major health issue affecting
millions of informal caregivers.

## Product Architecture
The platform is structured around three caregiver-journey dimensions:
fatigue, sleep, and emotional load.

## AI-Driven Support
**LLM-based modules** generate contextualized feedback from caregiver responses,
linking prompts to risk factors such as work intensity, emotional demands, and autonomy.

## MVP
Launched with **~200 beta users** to validate usage patterns and perceived value
of AI-generated recommendations.

*Platform is in private beta — screenshots show the interface at a high level.*
        `,
        coverImage: '/projects/software-ml/wellbe/cover-well.be.png',
        images: [
          {
            src: '/projects/software-ml/wellbe/img-01-well.be.png',
            alt: 'Well.Be dashboard',
            caption: 'FIG. 01 — Well.Be: caregiver journey dashboard',
          },
          {
            src: '/projects/software-ml/wellbe/img-02-well.be.png',
            alt: 'AI feedback view',
            caption: 'FIG. 02 — Well.Be: AI-generated feedback and recommendations',
          },
          {
            src: '/projects/software-ml/wellbe/img-03-well.be.png',
            alt: 'Well.Be platform view',
            caption: 'FIG. 03 — Well.Be: platform overview',
          },
        ],
        links: [],
        status: 'in-progress',
      },
      {
        id: 'ml-thermal-engineering',
        title: 'Machine Learning for Thermal Engineering',
        subtitle: 'Genetic algorithms, neural networks, PINNs, and optimal control — UC Berkeley ME249',
        year: 2025,
        duration: 'Fall 2025',
        context: 'Course project — ME249, UC Berkeley',
        domains: ['machine-learning'],
        tags: ['Python', 'Keras', 'TensorFlow', 'Genetic Algorithm', 'PINN', 'Neural Networks'],
        shortDesc:
          'Four ML projects applied to thermal systems: genetic algorithms on NASA data, neural networks for gas turbines, a PINN for 2D heat conduction, and PV control classification.',
        fullDesc: `
## Overview — Methodological Progression
A coherent progression from gradient-free optimization to physics-embedded
loss functions, applied to real thermal engineering datasets.

## Project 1 — Nucleate Boiling in Microgravity
Power-law model fitted to NASA KC-135 campaign data, quantitatively showing that
Marangoni effects compensate for buoyancy loss in microgravity.

## Project 2 — Hybrid Solar/Fossil Gas Turbine
Manual backpropagation implementation validated against Keras with comparable weights
and accuracy.

## Project 3 — PV Panel: Deep Learning and PINN
A PINN was trained to satisfy the 2D Laplace equation using only boundary measurements,
reaching sub-degree temperature accuracy at the center point.

## Project 4 — Multi-Panel PV System
Three wiring modes classified via a softmax output with dropout added to mitigate overfitting.
        `,
        coverImage: '/projects/software-ml/ml-thermal-engineering/cover.png',
        images: [
          {
            src: '/projects/software-ml/ml-thermal-engineering/img-01-ml.png',
            alt: 'Measured vs predicted — training and validation',
            caption: 'FIG. 01 — Neural network: measured vs predicted output (training & validation)',
          },
          {
            src: '/projects/software-ml/ml-thermal-engineering/img-02-ml.png',
            alt: 'PINN 2D temperature heatmap',
            caption: 'FIG. 02 — PINN: 2D temperature field heatmap',
          },
        ],
        links: [{ label: 'Full report (PDF)', url: 'Portfolio_MD/projects/software-ml/ml-thermal-engineering/thermal-systems-ml.pdf', type: 'pdf' }],
        status: 'completed',
      },
      {
        id: 'electricity-forecasting',
        title: 'Electricity Consumption Forecasting',
        subtitle: 'Multi-zone Random Forest pipeline — Tetouan SCADA dataset',
        year: 2026,
        duration: '2026',
        context: 'Personal project',
        domains: ['machine-learning'],
        tags: ['Python', 'Random Forest', 'scikit-learn', 'Time Series', 'Feature Engineering'],
        shortDesc:
          'End-to-end forecasting pipeline for three electricity distribution zones using the Tetouan SCADA dataset, reaching average R² around 0.9975 with extended features.',
        fullDesc: `
## Dataset
Tetouan SCADA dataset with **52,416 observations** at 10-minute resolution
across three electricity distribution zones.

## Pipeline
1. Data cleaning.
2. Exploratory analysis.
3. Feature engineering with weather, time, lags, and rolling statistics.
4. Modeling with linear regression baseline and **Random Forest**.
5. Evaluation with R², MAE, and diagnostic visualizations.

## Results
Extended features consistently outperform constrained academic feature sets,
quantifying the tradeoff between reproducibility and accuracy.

## Key Takeaways
- Temporal feature engineering is the main driver of performance gains.
- Random Forest consistently outperforms linear baselines.
- Shareable result tables and structured reports were produced for collaboration.
        `,
        coverImage: '/projects/software-ml/electricity-forecasting/cover-tetouan.png',
        images: [
          {
            src: '/projects/software-ml/electricity-forecasting/img-01-tetouan.png',
            alt: 'Random Forest prediction — three zones',
            caption: 'FIG. 01 — Random Forest: predicted vs actual consumption across three zones',
          },
          {
            src: '/projects/software-ml/electricity-forecasting/img-02-tetouan.png',
            alt: 'Feature importance',
            caption: 'FIG. 02 — Feature importance: influence of parameters on predicted consumption',
          },
        ],
        links: [{ label: 'Full report — coming soon', url: '', type: 'pdf', disabled: true }],
        status: 'completed',
      },
    ],
  },
  {
    id: 'research',
    title: 'Research & Industry Projects',
    shortDesc:
      'R&D engineering across academic and industrial settings: plasma hydrogen reactor, offshore liquid hydrogen transport, and multi-scale data center thermal analysis.',
    coverImage: '/projects/research/cover-res.png',
    domains: ['research'],
    tags: ['COMSOL', 'Python', 'CFD', 'Hydrogen', 'R&D', 'Thermal Systems'],
    featured: true,
    projects: [
      {
        id: 'hydrogen-reactor',
        title: 'CO₂-Free Hydrogen Reactor',
        subtitle: 'Microwave plasma reactor for methane cracking — UC Berkeley',
        year: 2025,
        duration: 'Sept. 2025 – Present',
        context: 'R&D Engineer — UC Berkeley',
        domains: ['research'],
        tags: ['COMSOL Multiphysics', 'CFD', 'Electromagnetics', 'Heat Transfer', 'Experimental Validation'],
        shortDesc:
          'Design and multiphysics modeling of a microwave plasma reactor for CO₂-free hydrogen production, coupling EM, thermal, and flow simulation in COMSOL.',
        fullDesc: `
## Context
R&D at **UC Berkeley** on microwave-induced plasma cracking of methane — a process that produces hydrogen and solid carbon with zero CO₂ emissions, as a cleaner alternative to conventional steam methane reforming. The work spanned reactor hardware design, 3D multiphysics simulation, and experimental validation, with the goal of achieving stable, reproducible plasma conditions and measurable hydrogen yield. The project involved iterative co-design between physical hardware and numerical models throughout each development cycle.

## Reactor Mechanical Design
Cavity geometry, waveguide interfaces, and gas injection hardware were engineered via parametric CAD and iteratively refined to sustain stable microwave plasma conditions for methane-to-hydrogen cracking. Structural constraints (high-temperature-rated materials, electromagnetic compatibility), gas injection angles for optimal residence time, and cooling channel placement were jointly optimized across multiple design cycles. Each hardware iteration was evaluated against updated COMSOL simulation outputs before physical modification, creating a tight design–simulation feedback loop.

## COMSOL Multiphysics — 3D Coupled Model
| Domain | Role |
|--------|------|
| Electromagnetic propagation | Microwave field distribution and energy deposition |
| Conjugate heat transfer | 3D temperature field and cooling channel sizing |
| Compressible flow | Gas injection dynamics and residence time |

Three coupled physics domains were solved in a single COMSOL model to capture the interdependencies between microwave energy deposition, local heating, and gas residence time inside the cavity. The model resolved the full 3D temperature field across the reactor geometry and identified thermal hot spots requiring cooling channel adjustment. Mesh independence was verified and simulation outputs were calibrated against experimental thermocouple data at matched operating points.

## Experimental Validation
The reactor was instrumented with type-K thermocouples at multiple axial positions and calibrated flow meters on the inlet and outlet lines for direct comparison with COMSOL predictions. Measured temperature profiles were correlated with simulation results, and discrepancies drove targeted geometry and operating parameter revisions to improve both thermal efficiency and plasma stability. This iterative experimental–numerical workflow converged toward a validated operating envelope across successive reactor generations.
        `,
        coverImage: '/projects/research/hydrogen-reactor/cover-capstone.png',
        images: [
          {
            src: '/projects/research/hydrogen-reactor/img-01-capstone.png',
            alt: 'Electric field in the plasma reactor — COMSOL',
            caption: 'FIG. 01 — COMSOL: electric field distribution inside the plasma reactor',
          },
          {
            src: '/projects/research/hydrogen-reactor/img-02-capstone.png',
            alt: 'Electron density in the plasma reactor — COMSOL',
            caption: 'FIG. 02 — COMSOL: electron density field inside the plasma reactor',
          },
        ],
        links: [{ label: 'Full report — coming soon', url: '', type: 'pdf', disabled: true }],
        status: 'in-progress',
      },
      {
        id: 'hydrogen-transport',
        title: 'Offshore Liquid Hydrogen Transport',
        subtitle: 'System architecture and techno-economic modeling — Hynamics, Paris',
        year: 2025,
        duration: 'Jan. 2025 – Jun. 2025',
        context: 'R&D Engineer Intern — Hynamics, Paris',
        domains: ['research'],
        tags: ['Hydrogen', 'Thermodynamics', 'System Architecture', 'Techno-Economic Modeling'],
        shortDesc:
          'Sizing and multi-criteria evaluation of liquid hydrogen offshore-to-onshore transport architectures, with thermodynamic modeling of cryogenic storage and piping.',
        fullDesc: `
## Context
Six-month R&D internship at **Hynamics** (EDF Group subsidiary) focused on designing and evaluating liquid hydrogen offshore-to-onshore transport chain architectures. The work covered the full chain from offshore production platform to onshore injection terminal, with emphasis on thermodynamic feasibility, system sizing, and multi-criteria comparison of competing architecture concepts.

*Detailed technical results are proprietary to Hynamics. Overview only.*

## System Architecture & Sizing
Liquid hydrogen storage tanks were sized for volumetric capacity, insulation thickness, and boil-off rate targets using thermodynamic models of cryogenic systems operating at −253°C. Piping networks between offshore and onshore terminals were dimensioned through pressure-drop calculations and flow rate optimization, accounting for cryogenic fluid properties and vapor generation along the line. Transfer equipment interfaces — loading arms, cryogenic pumps, and vaporizers — were specified and integrated into the overall system layout.

## Techno-Economic Modeling
| Criterion | Description |
|-----------|-------------|
| CAPEX / OPEX | Capital and operational cost estimation |
| Boil-off rate | Hydrogen loss during transport |
| Energy consumption | Total budget across the transport chain |

Competing architectures were evaluated through a multi-criteria analysis covering capital expenditure, operational cost, hydrogen boil-off losses, and total energy consumption per kilogram delivered. Sensitivity analyses on key parameters — fleet size, transport distance, and daily throughput — identified the most robust architecture across plausible operating scenarios. Outputs were delivered as ranked design concepts in client-ready engineering recommendation reports.

## Specifications & Documentation
Technical specifications and engineering reports were authored documenting the selected architecture's design assumptions, sizing methodology, and performance trade-offs for both internal engineering teams and external client stakeholders. Deliverables followed Hynamics' documentation standards and maintained clear traceability between design choices and their underlying techno-economic justifications.
        `,
        coverImage: '/projects/research/hydrogen-transport/cover-hydrogen.png',
        images: [],
        links: [],
        status: 'completed',
      },
      {
        id: 'datacenter-thermal',
        title: 'Multi-Scale Thermal Analysis of Data Centers',
        subtitle: 'Five-project portfolio spanning chip to cooling tower — UC Berkeley ME 193E',
        year: 2026,
        duration: 'Spring 2026',
        context: 'Course project — ME 193E/292E, UC Berkeley',
        domains: ['research'],
        tags: ['Python', 'COMSOL', 'CFD', 'Reality DC', 'Thermal Systems', 'Data Centers'],
        shortDesc:
          'Five interconnected projects analyzing data center cooling across six orders of magnitude, from chip-scale conduction to room-scale CFD and PUE optimization.',
        fullDesc: `
## Overview
A deliberate **zoom-in, zoom-out** methodology spanning six length scales —
from transistor junctions to cooling towers — unified by a consistent set of physical parameters.

## Project 1 — System COP
10 MW data center modeled with three operating modes. COP ranges from **3** to **30+**
depending on wet-bulb temperature.

## Project 2 — Chip Conduction (Python)
- 1D heat kernel with explicit FTCS on 2000 nodes.
- 2D chip conduction with Gauss-Seidel on a 181×65 grid.
- Lumped capacitance validity confirmed with Biot number < 0.1.

## Project 3 — Boundary Layer + Python CFD
Blasius ODE solved by shooting method and validated with a custom SIMPLE solver
showing second-order spatial convergence.

## Project 4 — COMSOL
Flat-plate boundary layer modeled on uniform and wall-refined meshes, both collapsing
onto the Blasius curve.

## Project 5 — Reality DC Room Simulation
Cold-aisle containment eliminates hot-air recirculation, lowers maximum cabinet inlet
temperature, and achieves **100% ASHRAE 2021 compliance** with **PUE 1.186**.
        `,
        coverImage: '/projects/research/datacenter-thermal/cover-datacenter.png',
        images: [
          {
            src: '/projects/research/datacenter-thermal/img-01-datacenter.png',
            alt: 'Reality DC baseline temperature field with hot-aisle recirculation',
            caption: 'FIG. 01 — Reality DC baseline temperature field with hot-aisle recirculation',
          },
          {
            src: '/projects/research/datacenter-thermal/img-02-datacenter.png',
            alt: 'System COP vs. wet-bulb temperature curve',
            caption: 'FIG. 02 — System COP vs. wet-bulb temperature across operating modes',
          },
          {
            src: '/projects/research/datacenter-thermal/img-03-datacenter.png',
            alt: 'Chip temperature modeling in a medium',
            caption: 'FIG. 03 — Chip temperature field modeling in a medium',
          },
        ],
        links: [{ label: 'Full report (PDF)', url: 'Portfolio_MD/projects/research/datacenter-thermal/report-datacenter.pdf', type: 'pdf' }],
        status: 'completed',
      },
    ],
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing Projects',
    shortDesc:
      'End-to-end manufacturing work: sand casting, conventional machining, 5-axis drilling, and dimensional validation against ISO 2768 tolerances.',
    coverImage: '/projects/manufacturing/cover-manu.png',
    domains: ['mechanical'],
    tags: ['Sand Casting', 'Machining', 'Turning', 'Milling', '5-Axis', 'GD&T'],
    featured: true,
    projects: [
      {
        id: 'mixer-bearing',
        title: 'Mixer Bearing — Full Manufacturing Cycle',
        subtitle: 'Sand casting to 5-axis drilling and dimensional validation',
        year: 2024,
        duration: 'Sept. 2023 – Feb. 2024',
        context: 'Course project — Arts et Métiers, Paris',
        domains: ['mechanical'],
        tags: ['Sand Casting', 'Aluminum', 'Turning', 'Milling', '5-Axis Drilling', 'GD&T'],
        shortDesc:
          'Complete manufacturing cycle of an aluminum mixer bearing: sand casting, turning and milling, 5-axis drilling, and dimensional validation against ISO 2768.',
        fullDesc: `
## Process Planning
The manufacturing sequence was planned from the engineering drawing (ISO 2768 MK tolerances, AlSi13/A-S13 aluminum alloy) to define the optimal order of operations before entering production. The sequence prioritizes casting for the raw blank, conventional machining for accessible surfaces, and 5-axis drilling last — compound-angle holes unreachable with 3-axis tooling require the fully established datums from prior operations. Process parameters — cutting speeds, feed rates, and tool selection — were defined for each operation stage in advance.

## Sand Casting & Conventional Machining
The sand mold was designed with parting line and draft angle analysis to ensure clean aluminum extraction without defects. After the aluminum pour and extraction, the raw casting was inspected for porosity and dimensional conformance before proceeding to the machining center. Turning and milling operations removed excess material, achieved the required surface quality on accessible cylindrical and flat features, and established the reference datums used for the subsequent 5-axis phase.

## 5-Axis Drilling & Dimensional Validation
Compound-angle holes — unreachable with 3-axis tooling due to their oblique orientations — were drilled on a 5-axis CNC machining center, requiring careful fixture design and toolpath programming. After all machining operations, critical dimensions were measured with calibrated metrology instruments and compared against ISO 2768 MK tolerance requirements. The final part was validated as **fully conformant** after the complete production chain, confirming the reliability of the planned manufacturing sequence.
        `,
        coverImage: '/projects/manufacturing/mixer-bearing/Cover_mixer.png',
        images: [
          {
            src: '/projects/manufacturing/mixer-bearing/img-01-mixer.png',
            alt: 'Technical drawing — Mixer Bearing',
            caption: 'FIG. 01 — Engineering drawing (A3, 1:1, ISO 2768 MK) — AlSi13/A-S13',
          },
          {
            src: '/projects/manufacturing/mixer-bearing/img-02-mixer.png',
            alt: 'Sand casting process',
            caption: 'FIG. 02 — Sand mold preparation and aluminum pour extraction',
          },
          {
            src: '/projects/manufacturing/mixer-bearing/img-03-mixer.png',
            alt: 'CNC machining — 5-axis drilling',
            caption: 'FIG. 03 — 5-axis drilling: compound-angle holes on CNC center',
          },
        ],
        links: [],
        status: 'completed',
      },
    ],
  },
];

export const getGroupById = (groupId: string): ProjectGroup | undefined =>
  projectGroups.find((group) => group.id === groupId);

export const getProjectInGroup = (groupId: string, projectId: string): Project | undefined =>
  getGroupById(groupId)?.projects.find((project) => project.id === projectId);

export const getAllProjects = (): Project[] => [
  ...standaloneProjects,
  ...projectGroups.flatMap((group) => group.projects),
];

export const getProjectById = (projectId: string): Project | undefined =>
  getAllProjects().find((project) => project.id === projectId);

export const getProjectLocation = (
  projectId: string,
): { groupId?: string; project: Project } | undefined => {
  const standaloneProject = standaloneProjects.find((project) => project.id === projectId);
  if (standaloneProject) {
    return { project: standaloneProject };
  }

  for (const group of projectGroups) {
    const match = group.projects.find((project) => project.id === projectId);
    if (match) {
      return { groupId: group.id, project: match };
    }
  }

  return undefined;
};

export const getProjectPath = (projectId: string): string => {
  const location = getProjectLocation(projectId);
  if (!location) {
    return '/projects';
  }

  return location.groupId
    ? `/projects/${location.groupId}/${location.project.id}`
    : `/projects/${location.project.id}`;
};

export const getProjectsByDomain = (domain: 'all' | ProjectDomain): Project[] =>
  domain === 'all'
    ? getAllProjects()
    : getAllProjects().filter((project) => project.domains.includes(domain));

export const getFeaturedGroups = (): ProjectGroup[] =>
  projectGroups.filter((group) => group.featured);

export const getActiveGroups = (): ProjectGroup[] =>
  projectGroups.filter((group) => group.projects.length > 0);

export const getAllDomains = (): Array<'all' | ProjectDomain> => [
  'all',
  ...Array.from(new Set(getAllProjects().flatMap((project) => project.domains))),
];
