---
layout: page
title: research
permalink: /research/
description: My research projects, papers, and code.
nav: true
nav_order: 2
---

<style>
  .research-grid .proj-box {
    border: 1px solid var(--global-divider-color);
    background-color: var(--global-card-bg-color);
    border-radius: 8px;
    padding: 1.5rem;
    height: 100%;
  }
  .research-grid .proj-box h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.15rem;
    font-weight: 600;
  }
  .research-grid .proj-box .proj-meta {
    color: var(--global-text-color-light, #828282);
    font-size: 0.85rem;
    margin-bottom: 0.6rem;
  }
  .research-grid .proj-box p {
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
  }
  .research-grid .proj-links a {
    margin-right: 1rem;
    font-size: 0.9rem;
    font-weight: 600;
  }
  .research-grid h2.area {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
</style>

<div class="research-grid">

<h2 class="area">Cryptography</h2>
<div class="row row-cols-1 row-cols-md-2">

  <div class="col mb-4">
    <div class="proj-box">
      <h3>Post-Quantum Cryptographic Engineering (ML-KEM)</h3>
      <div class="proj-meta">MPI-SP · with Peter Schwabe &amp; Vadim Lyubashevsky · Apr 2026 – present</div>
      <p>Designing and analyzing a novel noise distribution for ML-KEM at elevated security levels. Implemented formally-verifiable, constant-time AVX2 assembly in Jasmin — a 3–5× speedup over FrodoKEM at over 10× the security margin — and am porting it to OpenTitan's OTBN cryptographic accelerator.</p>
      <div class="proj-links">
        <a href="https://github.com/cryptojedi/kaiburr">Code</a>
      </div>
    </div>
  </div>

  <div class="col mb-4">
    <div class="proj-box">
      <h3>Monogenic Fields of Cryptographic Size</h3>
      <div class="proj-meta">BYU · Ring-LWE / lattice-based cryptography</div>
      <p>Explicit number-field constructions via polynomial transformations for Ring-LWE schemes. Designed and analyzed 300+ algebraic number fields in SageMath — computing discriminants, Galois groups, and ramification — to identify cryptographically secure parameters, with proofs of irreducibility and monogenicity.</p>
      <div class="proj-links">
        <!-- TODO: add paper link when available -->
      </div>
    </div>
  </div>

  <div class="col mb-4">
    <div class="proj-box">
      <h3>Tolerants</h3>
      <div class="proj-meta">BYU · algebraic number theory</div>
      <p>Developed the <em>tolerant</em>, a novel invariant that extends and strengthens classical discriminant theory. Proved a closed-form formula via discriminants and resultants — resolving an open question in prior work — and established its structural and algebraic properties.</p>
      <div class="proj-links">
        <!-- TODO: add paper link (e.g. https://arxiv.org/abs/2506.22897 if applicable) -->
      </div>
    </div>
  </div>

</div>

<h2 class="area">AI &amp; Language Models</h2>
<div class="row row-cols-1 row-cols-md-2">

  <div class="col mb-4">
    <div class="proj-box">
      <h3>EduQuest — Personalized, Automated Instruction</h3>
      <div class="proj-meta">BYU DRAGN Labs · advisor: Nancy Fulda</div>
      <p>A multi-agent LLM system that generates personalized, curriculum-aligned weekly homework by integrating vector-store retrieval, goal planning, and automated grading. Evaluated via an IRB-approved teacher focus group. Our short paper "Quest-ioning Teacher Agency in AI-Generated Instruction" will appear at ACM SIGDOC 2026.</p>
      <div class="proj-links">
        <!-- TODO: add paper link when available -->
      </div>
    </div>
  </div>

  <div class="col mb-4">
    <div class="proj-box">
      <h3>Informational Sufficiency in LLMs</h3>
      <div class="proj-meta">BYU DRAGN Labs · advisor: Nancy Fulda</div>
      <p>A framework measuring when a model has "enough" information to reason well, extending the notion of underspecification. Building a benchmark to detect insufficient inputs, analyze model stability, and identify the minimum information needed for reliable LLM reasoning.</p>
      <div class="proj-links">
        <!-- TODO: add paper link when available -->
      </div>
    </div>
  </div>

</div>

</div>
