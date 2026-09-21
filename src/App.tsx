import { useState } from 'react';
import Header from './components/Header';
import HeroBento from './components/HeroBento';
import UptimeClusterTile from './components/UptimeClusterTile';
import GitHubStatsTile from './components/GitHubStatsTile';
import ArchitectureDiagramTile from './components/ArchitectureDiagramTile';
import ProjectShowcase from './components/ProjectShowcase';
import SkillsBento from './components/SkillsBento';
import TimelineBento from './components/TimelineBento';
import DevOpsTerminalSimulator from './components/DevOpsTerminalSimulator';
import ContactBento from './components/ContactBento';
import Footer from './components/Footer';
import ProjectSimulationModal from './components/ProjectSimulationModal';
import ResumeModal from './components/ResumeModal';
import { ProjectItem } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const jumpToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05050c] text-[#f1f5f9] relative selection:bg-pink-500/40 selection:text-pink-100 overflow-x-hidden">
      {/* Synthwave & Cyberpunk Ambient Glow Layers */}
      <div className="fixed inset-0 synthwave-grid pointer-events-none opacity-40 z-0" />
      
      {/* Vibrant Neon Horizon Flares */}
      <div className="fixed top-0 left-1/3 w-[650px] h-[500px] bg-pink-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed top-1/4 right-1/4 w-[600px] h-[550px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 left-1/4 w-[700px] h-[600px] bg-purple-600/10 rounded-full blur-[170px] pointer-events-none -z-10" />

      {/* Navigation Header */}
      <Header
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onJumpToSection={jumpToSection}
      />

      {/* Main Cyber Grid Layout */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 space-y-12 sm:space-y-16">
        
        {/* Top Matrix: Hero + Live Telemetry + GitHub Ops */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Main Hero Tile (Spans 2 columns on lg screens) */}
          <div className="lg:col-span-2">
            <HeroBento
              onOpenResume={() => setIsResumeModalOpen(true)}
              onJumpToProjects={() => jumpToSection('projects')}
            />
          </div>

          {/* Right Column: Uptime & Cluster Telemetry + GitHub Operations */}
          <div className="space-y-5 flex flex-col justify-between">
            <UptimeClusterTile />
            <GitHubStatsTile />
          </div>
        </section>

        {/* High-Level Architecture Topology Matrix */}
        <section>
          <ArchitectureDiagramTile />
        </section>

        {/* Interactive Project Showcase */}
        <ProjectShowcase
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Hardened Tech Stack Inventory */}
        <SkillsBento />

        {/* Career & Education Chronological Track */}
        <TimelineBento />

        {/* Interactive SRE Terminal Simulator */}
        <DevOpsTerminalSimulator />

        {/* Secure Transmission Portal */}
        <ContactBento />
      </main>

      {/* Cyber Footer */}
      <Footer />

      {/* Modals */}
      <ProjectSimulationModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
