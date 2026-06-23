---
layout: page
title: projects
permalink: /projects/
description: things I've built outside of research.
nav: true
nav_order: 4
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

<p class="font-italic">These are personal and engineering projects for learning purposes only. For my research projects, papers, and code, please see the <a href="{{ '/research/' | relative_url }}">research page</a>.</p>

<div class="research-grid">

<h2 class="area">Cryptography & Security</h2>
<div class="row row-cols-1 row-cols-md-2">

  <div class="col mb-4">
    <div class="proj-box">
      <h3>Lattice-Based Mixnet</h3>
      <div class="proj-meta">C · post-quantum cryptography</div>
      <p>Implemented a post-quantum mixnet with the full Module-LWE decrypt-and-shuffle logic from scratch in C, a cryptographic protocol for anonymous routing used in private messaging, online voting, and censorship-resistant communication.</p>
      <div class="proj-links">
        <a href="https://github.com/swechchhaad/mixnet">Code</a>
      </div>
    </div>
  </div>

  <div class="col mb-4">
    <div class="proj-box">
      <h3>Lattice-Based Dynamic Accumulator</h3>
      <div class="proj-meta">Python · post-quantum cryptography</div>
      <p>Implemented a post-quantum dynamic accumulator in Python, a cryptographic structure that enables privacy-preserving membership proofs used in anonymous credentials, revocation systems, and secure messaging. Supports additions, deletions, and witness updates under lattice-based hardness assumptions.</p>
      <div class="proj-links">
        <a href="https://github.com/swechchhaad/lattice-based-accum">Code</a>
      </div>
    </div>
  </div>

  <div class="col mb-4">
    <div class="proj-box">
      <h3>PQMessenger</h3>
      <div class="proj-meta">Mentorship · ML-KEM + AES hybrid encryption</div>
      <p>Mentored a team of six to build a hybrid post-quantum messaging prototype using ML-KEM for key encapsulation and AES for symmetric encryption (the same architecture used in iMessage and Signal); advised on protocol layering, key exchange design, and cryptographic API usage. Built during the <a href="https://uunchai.org/">Uunchai</a> mentoring program; my mentee <a href="https://np.linkedin.com/in/slyther">Shrijan Poudel</a> and I wrote a paper on it.</p>
      <div class="proj-links">
        <a href="https://github.com/uunchaicrypto/pqmessenger">Code</a>
        <a href="{{ '/assets/pdf/pqmessenger.pdf' | relative_url }}" download>Paper (PDF)</a>
      </div>
    </div>
  </div>

</div>

</div>
