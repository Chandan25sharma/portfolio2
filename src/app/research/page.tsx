"use client";

import { gsap } from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Research() {
  type Experiment = {
    id: string;
    title: string;
    abstract: string;
    tags: string[];
    domain: string;
    status: string;
    findings: string;
    dataset: string;
    metrics: Record<string, string | number | undefined>;
  };

  // Page state for interactive bits
  const [typingText, setTypingText] = useState<string>(
    "Currently researching adaptive world models..."
  );
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);
  const [selectedExperiment, setSelectedExperiment] =
    useState<Experiment | null>(null);
  const [visualizationContent, setVisualizationContent] = useState<{
    type: "domain" | "experiment" | "default";
    data: Experiment | DomainData | null;
  }>({ type: "default", data: null });
  const [visualizationView, setVisualizationView] = useState<
    "network" | "timeline" | "metrics"
  >("timeline");

  type DomainData = {
    id: number;
    label: string;
    description: string;
    projects: string[];
    insights: string[];
  };

  const headerRef = useRef<HTMLDivElement | null>(null);
  const visualizationRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll to and update visualization
  const showInVisualization = (
    type: "domain" | "experiment",
    data: Experiment | DomainData
  ) => {
    setVisualizationContent({ type, data });
    setTimeout(() => {
      visualizationRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  useEffect(() => {
    // small GSAP intro animation
    if (!headerRef.current) return;
    gsap.from(headerRef.current, { y: 20, opacity: 0, duration: 0.8 });
  }, []);

  // simple typing effect for the mission line
  useEffect(() => {
    const phrase =
      "Currently researching adaptive world models and spiking networks.";
    let i = 0;
    const id = setInterval(() => {
      setTypingText(phrase.slice(0, i + 1));
      i++;
      if (i >= phrase.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black py-12">
      <div className="container mx-auto px-6">
        {/* Animated Header / Mission */}
        <header ref={headerRef} className="text-center mb-12">
          <h1 className="text-2xl font-extrabold mb-4">Mindspace — Research</h1>
          <p className="max-w-xl mx-auto text-lg text-gray-700">
            Exploring the intersection of Artificial General Intelligence,
            Spiking Neural Networks, and cognitive architectures.
          </p>
          <p className="mt-6 text-sm text-gray-600 italic">{typingText}</p>
        </header>

        {/* Research Domains / Pillars */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Research Domains</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                id: 0,
                label: "Spiking Neural Networks",
                description:
                  "Bio-inspired neural computation using temporal spike patterns. Exploring energy-efficient learning algorithms and neuromorphic hardware implementations.",
                projects: [
                  "Temporal Pattern Recognition",
                  "Energy-Efficient SNN Training",
                ],
                insights: [
                  "SNNs achieve 10x energy efficiency",
                  "Temporal coding enables real-time processing",
                ],
              },
              {
                id: 1,
                label: "World Models & Embodied Learning",
                description:
                  "Learning predictive models of environment dynamics through embodied interaction. Focus on few-shot adaptation and transfer learning.",
                projects: [
                  "Predictive World Models",
                  "Embodied Agent Simulation",
                ],
                insights: [
                  "World models improve sample efficiency",
                  "Embodiment accelerates learning",
                ],
              },
              {
                id: 2,
                label: "Reasoning & Meta-Learning",
                description:
                  "Developing systems that learn how to learn. Research into compositional reasoning and systematic generalization.",
                projects: ["Few-Shot Reasoning", "Compositional Learning"],
                insights: [
                  "Meta-learning enables rapid adaptation",
                  "Compositional structure improves generalization",
                ],
              },
              {
                id: 3,
                label: "Consciousness & AI Ethics",
                description:
                  "Exploring computational models of consciousness and their ethical implications. Research into self-awareness and moral reasoning in AI systems.",
                projects: ["Consciousness Metrics", "Ethical AI Framework"],
                insights: [
                  "Consciousness may emerge from information integration",
                  "Ethics must be built into AI from the ground up",
                ],
              },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() =>
                  setSelectedPillar(p.id === selectedPillar ? null : p.id)
                }
                className="relative overflow-hidden rounded-2xl p-6 text-left bg-white border border-gray-200 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.label}</h3>
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg"></div>
                </div>
                <div className="mt-4 text-sm text-gray-700">
                  {selectedPillar === p.id ? (
                    <div className="space-y-3">
                      <p>{p.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Key Projects:
                        </h4>
                        <ul className="space-y-1">
                          {p.projects.map((project, idx) => (
                            <li
                              key={idx}
                              className="text-xs bg-blue-50 px-2 py-1 rounded inline-block mr-2 mb-1"
                            >
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Key Insights:
                        </h4>
                        <ul className="space-y-1 text-sm">
                          {p.insights.map((insight, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-blue-600 mr-2">•</span>
                              {insight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex gap-3 pt-2">
                        <Link
                          href="#experiments"
                          className="text-sm text-blue-600 underline"
                        >
                          Related experiments
                        </Link>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            showInVisualization("domain", p);
                          }}
                          className="text-sm text-green-600 underline font-medium"
                        >
                          See About This
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPillar(null);
                          }}
                          className="text-sm text-gray-600 underline"
                        >
                          Collapse
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="line-clamp-3 text-gray-600">
                      {p.description.slice(0, 100)}... Tap to expand — key
                      insights, projects, and research details.
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Experiments / Case Studies */}
        <section id="experiments" className="mb-4">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <h2 className="text-lg sm:text-xl font-bold">
              Experiments & Case Studies
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-2">
            {[
              {
                id: "e1",
                title: "Spiking Neural Network Pattern Recognition",
                abstract:
                  "Developed a bio-inspired SNN architecture for real-time pattern recognition with 90% accuracy and 10x energy efficiency compared to traditional ANNs. Uses temporal spike encoding for feature extraction.",
                tags: ["SNN", "Pattern Recognition", "Neuromorphic"],
                domain: "Spiking Neural Networks",
                status: "Published",
                findings:
                  "Temporal coding significantly improves energy efficiency while maintaining accuracy",
                dataset: "MNIST-DVS, N-MNIST",
                metrics: {
                  accuracy: "90%",
                  energyReduction: "10x",
                  latency: "5ms",
                },
              },
              {
                id: "e2",
                title: "World Model for Embodied Agent Navigation",
                abstract:
                  "Implemented predictive world models enabling sample-efficient navigation in complex environments. Agent learns environment dynamics through embodied interaction and generalizes to unseen scenarios.",
                tags: ["World Models", "Embodied AI", "Navigation"],
                domain: "World Models & Embodied Learning",
                status: "In Progress",
                findings:
                  "Embodied learning reduces sample complexity by 5x compared to model-free approaches",
                dataset: "Custom 3D environments, DeepMind Lab",
                metrics: {
                  sampleEfficiency: "5x improvement",
                  successRate: "85%",
                  transferSuccess: "70%",
                },
              },
              {
                id: "e3",
                title: "Meta-Learning for Few-Shot Reasoning Tasks",
                abstract:
                  "Developed a meta-learning framework that enables rapid adaptation to new reasoning tasks with minimal examples. Combines gradient-based meta-learning with compositional representations.",
                tags: ["Meta-Learning", "Few-Shot", "Reasoning"],
                domain: "Reasoning & Meta-Learning",
                status: "Under Review",
                findings:
                  "Compositional meta-learning achieves human-level performance on novel reasoning tasks",
                dataset: "ARC, SCAN, bAbI",
                metrics: {
                  fewShotAccuracy: "92%",
                  adaptationTime: "< 100 examples",
                  generalization: "95%",
                },
              },
              {
                id: "e4",
                title: "Consciousness Measurement Framework",
                abstract:
                  "Developed computational metrics for measuring consciousness-like properties in AI systems based on Integrated Information Theory and Global Workspace Theory.",
                tags: ["Consciousness", "IIT", "Measurement"],
                domain: "Consciousness & AI Ethics",
                status: "Theoretical",
                findings:
                  "Integrated information correlates with emergent self-awareness behaviors",
                dataset: "Synthetic cognitive architectures",
                metrics: {
                  phiValue: "0.73",
                  selfAwareness: "Medium",
                  consistency: "88%",
                },
              },
              {
                id: "e5",
                title: "Compression with Self-Organizing Maps",
                abstract:
                  "Novel approach using SOMs to reduce high-dimensional sensory input while preserving semantic structure. Enables efficient online learning in resource-constrained environments.",
                tags: ["Compression", "SOM", "Unsupervised"],
                domain: "World Models & Embodied Learning",
                status: "Published",
                findings:
                  "SOM-based compression maintains 95% semantic fidelity at 50x compression ratio",
                dataset: "ImageNet, CIFAR-100, Custom sensor data",
                metrics: {
                  compressionRatio: "50x",
                  semanticFidelity: "95%",
                  reconstructionError: "< 0.05",
                },
              },
              {
                id: "e6",
                title: "Ethical Reasoning in Autonomous Systems",
                abstract:
                  "Framework for embedding ethical reasoning capabilities into autonomous systems using deontic logic and value alignment techniques.",
                tags: ["Ethics", "Autonomous Systems", "Value Alignment"],
                domain: "Consciousness & AI Ethics",
                status: "In Progress",
                findings:
                  "Deontic logic enables consistent ethical decision-making under uncertainty",
                dataset: "Moral Machine dataset, Custom ethical dilemmas",
                metrics: {
                  ethicalConsistency: "87%",
                  humanAlignment: "82%",
                  decisionTime: "< 100ms",
                },
              },
            ].map((exp) => (
              <article
                key={exp.id}
                onClick={() => setSelectedExperiment(exp)}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow hover:shadow-2xl cursor-pointer transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 pr-2">
                    {exp.title}
                  </h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full self-start shrink-0 ${
                      exp.status === "Published"
                        ? "bg-green-100 text-green-700"
                        : exp.status === "In Progress"
                        ? "bg-blue-100 text-blue-700"
                        : exp.status === "Under Review"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {exp.status}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 font-medium">
                  {exp.domain}
                </p>
                <p className="text-xs sm:text-sm text-gray-700 mb-3 leading-relaxed">
                  {exp.abstract}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                  {exp.tags.map((t: string) => (
                    <span
                      key={t}
                      className="text-xs bg-gray-100 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-gray-500">
                  <p className="font-medium mb-1">Key Finding:</p>
                  <p className="leading-relaxed">{exp.findings}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Experiment modal */}
          {selectedExperiment && (
            <div className="fixed inset-0 z-50 flex items-start justify-center p-1 sm:p-4 bg-black/50 pt-16 sm:pt-16">
              <div className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full mx-2 sm:mx-4 p-4 sm:p-6 max-h-[90vh] sm:max-h-[90vh] overflow-y-auto mt-4 sm:mt-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1 pr-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold pr-2">
                        {selectedExperiment.title}
                      </h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full self-start ${
                          selectedExperiment.status === "Published"
                            ? "bg-green-100 text-green-700"
                            : selectedExperiment.status === "In Progress"
                            ? "bg-blue-100 text-blue-700"
                            : selectedExperiment.status === "Under Review"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {selectedExperiment.status}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 leading-relaxed">
                      Domain: {selectedExperiment.domain} | Tags:{" "}
                      {selectedExperiment.tags.join(", ")}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedExperiment(null)}
                    className="text-xl sm:text-2xl hover:bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      Abstract
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {selectedExperiment.abstract}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      Key Findings
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {selectedExperiment.findings}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                        Dataset
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700">
                        {selectedExperiment.dataset}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                        Key Metrics
                      </h4>
                      <div className="space-y-1">
                        {Object.entries(selectedExperiment.metrics).map(
                          ([key, value]) =>
                            value !== undefined && (
                              <div
                                key={key}
                                className="flex justify-between text-xs sm:text-sm"
                              >
                                <span className="text-gray-600 capitalize">
                                  {key.replace(/([A-Z])/g, " $1")}:
                                </span>
                                <span className="font-medium">
                                  {String(value)}
                                </span>
                              </div>
                            )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-6 pt-4 border-t">
                  <a
                    className="px-3 sm:px-4 py-2 bg-black text-white rounded text-xs sm:text-sm hover:bg-gray-800 transition-colors text-center"
                    href="#"
                  >
                    View Demo
                  </a>
                  <a
                    className="px-3 sm:px-4 py-2 border border-gray-300 rounded text-xs sm:text-sm hover:bg-gray-50 transition-colors text-center"
                    href="#"
                  >
                    View Paper
                  </a>
                  <a
                    className="px-3 sm:px-4 py-2 border border-gray-300 rounded text-xs sm:text-sm hover:bg-gray-50 transition-colors text-center"
                    href="#"
                  >
                    View Code
                  </a>
                  <button
                    onClick={() => {
                      setSelectedExperiment(null);
                      showInVisualization("experiment", selectedExperiment);
                    }}
                    className="px-3 sm:px-4 py-2 bg-green-600 text-white rounded text-xs sm:text-sm hover:bg-green-700 transition-colors"
                  >
                    See About This
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Visualizations & Findings */}
        <section ref={visualizationRef} className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Visualizations & Findings
            {visualizationContent.type !== "default" && (
              <span className="text-lg font-normal text-green-600 ml-2">
                -{" "}
                {visualizationContent.type === "domain"
                  ? "Domain"
                  : "Experiment"}{" "}
                Focus
              </span>
            )}
          </h2>

          {/* Dynamic Content Based on Selection */}
          {visualizationContent.type === "domain" &&
            visualizationContent.data &&
            "label" in visualizationContent.data && (
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-bold text-green-800 mb-3">
                  Focus: {visualizationContent.data.label}
                </h3>
                <p className="text-gray-700 mb-4">
                  {visualizationContent.data.description}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Key Projects:
                    </h4>
                    <ul className="space-y-1">
                      {visualizationContent.data.projects.map(
                        (project: string, idx: number) => (
                          <li
                            key={idx}
                            className="text-sm bg-green-100 px-2 py-1 rounded inline-block mr-2 mb-1"
                          >
                            {project}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Key Insights:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {visualizationContent.data.insights.map(
                        (insight: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            {insight}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() =>
                    setVisualizationContent({ type: "default", data: null })
                  }
                  className="mt-4 text-sm text-gray-600 underline"
                >
                  ← Back to All Findings
                </button>
              </div>
            )}

          {visualizationContent.type === "experiment" &&
            visualizationContent.data &&
            "title" in visualizationContent.data && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  Experiment Focus: {visualizationContent.data.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {visualizationContent.data.abstract}
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Domain:
                    </h4>
                    <span className="text-sm bg-blue-100 px-2 py-1 rounded">
                      {visualizationContent.data.domain}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Status:
                    </h4>
                    <span
                      className={`text-sm px-2 py-1 rounded ${
                        visualizationContent.data.status === "Published"
                          ? "bg-green-100 text-green-700"
                          : visualizationContent.data.status === "In Progress"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {visualizationContent.data.status}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Dataset:
                    </h4>
                    <span className="text-sm text-gray-600">
                      {visualizationContent.data.dataset}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Key Findings:
                  </h4>
                  <p className="text-gray-700 mb-3">
                    {visualizationContent.data.findings}
                  </p>

                  <h4 className="font-semibold text-gray-900 mb-2">Metrics:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {Object.entries(visualizationContent.data.metrics).map(
                      ([key, value]) =>
                        value !== undefined && (
                          <div
                            key={key}
                            className="bg-white p-2 rounded border text-sm"
                          >
                            <div className="font-medium text-gray-600 capitalize">
                              {key.replace(/([A-Z])/g, " $1")}
                            </div>
                            <div className="font-bold text-blue-600">
                              {String(value)}
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>

                <button
                  onClick={() =>
                    setVisualizationContent({ type: "default", data: null })
                  }
                  className="mt-4 text-sm text-gray-600 underline"
                >
                  ← Back to All Findings
                </button>
              </div>
            )}

          {/* Research Findings Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6 text-gray-900">
                Key Research Findings
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all duration-200">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-base text-gray-900 mb-2">
                        Spiking Neural Networks
                      </h4>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                        Temporal spike encoding achieves 10x energy efficiency
                        while maintaining 90% accuracy on pattern recognition
                        tasks.
                      </p>
                      <div className="flex gap-2">
                        <span className="text-xs bg-white px-2 py-1 rounded border font-medium">
                          90% accuracy
                        </span>
                        <span className="text-xs bg-white px-2 py-1 rounded border font-medium">
                          10x efficiency
                        </span>
                      </div>
                    </div>
                    <a
                      href="/papers/snn-temporal-encoding-2024.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-gray-900 text-white px-3 py-2 rounded transition-all duration-200 hover:bg-gray-700"
                    >
                      Paper
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all duration-200">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-base text-gray-900 mb-2">
                        World Models
                      </h4>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                        Embodied learning reduces sample complexity by 5x
                        compared to model-free approaches in navigation tasks.
                      </p>
                      <div className="flex gap-2">
                        <span className="text-xs bg-white px-2 py-1 rounded border font-medium">
                          5x sample efficiency
                        </span>
                        <span className="text-xs bg-white px-2 py-1 rounded border font-medium">
                          85% success rate
                        </span>
                      </div>
                    </div>
                    <a
                      href="https://demo.embodied-world-models.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-gray-900 text-white px-3 py-2 rounded transition-all duration-200 hover:bg-gray-700"
                    >
                      Demo
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all duration-200">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-base text-gray-900 mb-2">
                        Meta-Learning
                      </h4>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                        Compositional meta-learning achieves 92% accuracy on
                        novel reasoning tasks.
                      </p>
                      <div className="flex gap-2">
                        <span className="text-xs bg-white px-2 py-1 rounded border font-medium">
                          92% accuracy
                        </span>
                        <span className="text-xs bg-white px-2 py-1 rounded border font-medium">
                          Under Review
                        </span>
                      </div>
                    </div>
                    <a
                      href="/papers/meta-learning-compositional-2024.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-gray-900 text-white px-3 py-2 rounded transition-all duration-200 hover:bg-gray-700"
                    >
                      Paper
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all duration-200">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-base text-gray-900 mb-2">
                        Consciousness Metrics
                      </h4>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                        Integrated Information Theory correlates with emergent
                        self-awareness behaviors.
                      </p>
                      <div className="flex gap-2">
                        <span className="text-xs bg-white px-2 py-1 rounded border font-medium">
                          Φ = 0.73
                        </span>
                        <span className="text-xs bg-white px-2 py-1 rounded border font-medium">
                          Theoretical
                        </span>
                      </div>
                    </div>
                    <a
                      href="/papers/consciousness-measurement-framework-2024.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-gray-900 text-white px-3 py-2 rounded transition-all duration-200 hover:bg-gray-700"
                    >
                      Theory
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6 text-gray-900">
                Code Repositories & Papers
              </h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-all duration-200">
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-gray-900 mb-1">
                        SNN-Pattern-Recognition
                      </h4>
                      <p className="text-xs text-gray-600">
                        Temporal spike encoding implementation
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://github.com/research-lab/snn-pattern-recognition"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-gray-900 text-white px-2 py-1 rounded hover:bg-gray-700 transition-colors"
                      >
                        Code
                      </a>
                      <a
                        href="/papers/snn-temporal-encoding-2024.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-white border border-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-50 transition-colors"
                      >
                        Paper
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-all duration-200">
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-gray-900 mb-1">
                        Embodied-World-Models
                      </h4>
                      <p className="text-xs text-gray-600">
                        Predictive navigation framework
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://github.com/research-lab/embodied-world-models"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-gray-900 text-white px-2 py-1 rounded hover:bg-gray-700 transition-colors"
                      >
                        Code
                      </a>
                      <a
                        href="https://demo.embodied-world-models.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-white border border-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-50 transition-colors"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-all duration-200">
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-gray-900 mb-1">
                        Meta-Learning-Framework
                      </h4>
                      <p className="text-xs text-gray-600">
                        Few-shot reasoning implementation
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://github.com/research-lab/meta-learning-framework"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-gray-900 text-white px-2 py-1 rounded hover:bg-gray-700 transition-colors"
                      >
                        Code
                      </a>
                      <a
                        href="/papers/meta-learning-compositional-2024.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-white border border-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-50 transition-colors"
                      >
                        Paper
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-all duration-200">
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-gray-900 mb-1">
                        Consciousness-Metrics
                      </h4>
                      <p className="text-xs text-gray-600">
                        IIT-based measurement tools
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://github.com/research-lab/consciousness-metrics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-gray-900 text-white px-2 py-1 rounded hover:bg-gray-700 transition-colors"
                      >
                        Code
                      </a>
                      <a
                        href="/papers/consciousness-measurement-framework-2024.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-white border border-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-50 transition-colors"
                      >
                        Theory
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-all duration-200">
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-gray-900 mb-1">
                        SOM-Compression
                      </h4>
                      <p className="text-xs text-gray-600">
                        Self-organizing maps for dimensionality reduction
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://github.com/research-lab/som-compression"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-gray-900 text-white px-2 py-1 rounded hover:bg-gray-700 transition-colors"
                      >
                        Code
                      </a>
                      <a
                        href="/papers/som-semantic-compression-2024.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-white border border-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-50 transition-colors"
                      >
                        Paper
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-all duration-200">
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-gray-900 mb-1">
                        Ethical-AI-Framework
                      </h4>
                      <p className="text-xs text-gray-600">
                        Deontic logic for autonomous systems
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://github.com/research-lab/ethical-ai-framework"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-gray-900 text-white px-2 py-1 rounded hover:bg-gray-700 transition-colors"
                      >
                        Code
                      </a>
                      <a
                        href="/papers/ethical-reasoning-autonomous-systems-2024.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-white border border-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-50 transition-colors"
                      >
                        Ethics
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Visualization Area */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">
                Research Impact Visualization
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setVisualizationView("network")}
                  className={`text-xs px-3 py-1 rounded transition-colors ${
                    visualizationView === "network"
                      ? "bg-black text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  Network View
                </button>
                <button
                  onClick={() => setVisualizationView("timeline")}
                  className={`text-xs px-3 py-1 rounded transition-colors ${
                    visualizationView === "timeline"
                      ? "bg-black text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  Timeline View
                </button>
                <button
                  onClick={() => setVisualizationView("metrics")}
                  className={`text-xs px-3 py-1 rounded transition-colors ${
                    visualizationView === "metrics"
                      ? "bg-black text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  Metrics View
                </button>
              </div>
            </div>

            {/* Network View */}
            {visualizationView === "network" && (
              <div className="space-y-4">
                <div className="text-center py-8">
                  <div className="relative max-w-2xl mx-auto">
                    {/* Central Node */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          AGI
                        </span>
                      </div>
                    </div>

                    {/* Domain Nodes */}
                    <div className="relative w-64 h-64 mx-auto">
                      {/* SNN Node */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium">SNN</span>
                        </div>
                        <div className="absolute top-6 left-6 w-0.5 h-16 bg-gray-300 transform rotate-45"></div>
                      </div>

                      {/* World Models Node */}
                      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium">WM</span>
                        </div>
                        <div className="absolute top-6 right-6 w-16 h-0.5 bg-gray-300"></div>
                      </div>

                      {/* Meta-Learning Node */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium">ML</span>
                        </div>
                        <div className="absolute bottom-6 left-6 w-0.5 h-16 bg-gray-300 transform -rotate-45"></div>
                      </div>

                      {/* Consciousness Node */}
                      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium">CON</span>
                        </div>
                        <div className="absolute top-6 left-6 w-16 h-0.5 bg-gray-300"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-sm font-medium">SNN</div>
                    <div className="text-xs text-gray-600">6 papers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium">World Models</div>
                    <div className="text-xs text-gray-600">4 papers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium">Meta-Learning</div>
                    <div className="text-xs text-gray-600">3 papers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium">Consciousness</div>
                    <div className="text-xs text-gray-600">2 papers</div>
                  </div>
                </div>
              </div>
            )}

            {/* Timeline View */}
            {visualizationView === "timeline" && (
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="space-y-6">
                  <div className="relative flex items-start">
                    <div className="absolute left-2 w-4 h-4 bg-black rounded-full"></div>
                    <div className="ml-10">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold">2024</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          Published
                        </span>
                      </div>
                      <h4 className="font-medium">SNN Pattern Recognition</h4>
                      <p className="text-sm text-gray-600">
                        90% accuracy, 10x energy efficiency breakthrough
                      </p>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs bg-gray-50 px-2 py-1 rounded">
                          45 citations
                        </span>
                        <span className="text-xs bg-gray-50 px-2 py-1 rounded">
                          3 implementations
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="absolute left-2 w-4 h-4 bg-gray-400 rounded-full"></div>
                    <div className="ml-10">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold">2024</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          Under Review
                        </span>
                      </div>
                      <h4 className="font-medium">Meta-Learning Framework</h4>
                      <p className="text-sm text-gray-600">
                        92% few-shot accuracy on novel reasoning tasks
                      </p>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs bg-gray-50 px-2 py-1 rounded">
                          Pre-print available
                        </span>
                        <span className="text-xs bg-gray-50 px-2 py-1 rounded">
                          Code released
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="absolute left-2 w-4 h-4 bg-gray-600 rounded-full"></div>
                    <div className="ml-10">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold">2024</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          In Progress
                        </span>
                      </div>
                      <h4 className="font-medium">World Model Navigation</h4>
                      <p className="text-sm text-gray-600">
                        5x sample efficiency improvement in embodied learning
                      </p>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs bg-gray-50 px-2 py-1 rounded">
                          Demo available
                        </span>
                        <span className="text-xs bg-gray-50 px-2 py-1 rounded">
                          Experiments ongoing
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Metrics View */}
            {visualizationView === "metrics" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">15</div>
                      <div className="text-sm text-gray-600">Total Papers</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">127</div>
                      <div className="text-sm text-gray-600">Citations</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">8</div>
                      <div className="text-sm text-gray-600">Repositories</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Research Impact by Domain</h4>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Spiking Neural Networks</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-black h-2 rounded-full"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-600">90%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm">World Models</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-black h-2 rounded-full"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-600">75%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm">Meta-Learning</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-black h-2 rounded-full"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-600">85%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm">Consciousness</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-black h-2 rounded-full"
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-600">60%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-3">
                    Key Performance Indicators
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-black">92%</div>
                      <div className="text-xs text-gray-600">
                        Average Accuracy
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-black">5x</div>
                      <div className="text-xs text-gray-600">
                        Efficiency Gain
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-black">6</div>
                      <div className="text-xs text-gray-600">
                        Active Projects
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-black">3</div>
                      <div className="text-xs text-gray-600">
                        Collaborations
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Ideas in Progress */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Ideas in Progress</h2>
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-4 shadow">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full mt-2" />
                <div>
                  <p className="font-semibold">
                    Multi-modal memory integration in SNN-based agents
                  </p>
                  <p className="text-sm text-gray-600">
                    Experimenting with storing episodic traces in spiking
                    architectures.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2" />
                <div>
                  <p className="font-semibold">
                    Compression of sensory input with self-organizing maps
                  </p>
                  <p className="text-sm text-gray-600">
                    Investigating low-dim encodings for faster online learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Research Timeline</h2>
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div>2021 — Started AGI framework design</div>
              <div>2023 — Published experiments on accessibility</div>
              <div>2024 — Scaling SNN prototypes</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mt-12">
          <h3 className="text-xl font-bold mb-4">Collaborate or discuss</h3>
          <p className="text-gray-600 mb-6">
            If you&apos;re working on adjacent problems or have data to share,
            let&apos;s connect.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-black text-white rounded-lg"
            >
              Contact
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 border border-black rounded-lg"
            >
              Explore Projects
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
