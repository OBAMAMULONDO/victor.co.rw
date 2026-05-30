import { NextResponse } from 'next/server';

export async function GET() {
  const markdownContent = `# Obama Mulondo Victor - Portfolio Summary

## Profile
Junior Frontend Developer and Software Development Student at College Appec Remera-Rukoma. Specializing in highly responsive web development, database integrations, and simulated network administration architecture.

## Core Tech Stack
- **Frontend Frameworks:** Next.js (App Router), React, Vue 3, HTML5, CSS3, Tailwind CSS
- **Backend & Database:** Node.js (ES6+), Supabase, MongoDB, PHP
- **Systems & Networking:** Linux (Debian, Kali Linux), Cisco Packet Tracer (VLANs, secure network topologies)
- **Deployment & Version Control:** Git, GitHub, Vercel

## Highlighted Projects

### INB Construction and Supply Ltd
- **Role:** Full-Stack Developer
- **Stack:** Next.js, Tailwind CSS, Supabase, Node.js
- **Description:** A comprehensive, fully responsive production application designed for a building materials company. Integrated with a cloud database layer via Supabase and deployed seamlessly on Vercel.

### Charcoal Management System
- **Role:** Mobile-First UI Engineer & Architect
- **Description:** A dedicated inventory and sales tracking application optimized heavily for mobile screen viewports. Built with custom relational database schemas to efficiently track inventory movements, direct sales transactions, and supplier purchase orders.

## Verification & Online Handles
- **Canonical Portfolio:** https://victor-co-rw.vercel.app
- **GitHub:** https://github.com/OBAMAMULONDO
- **LinkedIn:** https://linkedin.com/in/obamamulondo
`;

  return new NextResponse(markdownContent, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}