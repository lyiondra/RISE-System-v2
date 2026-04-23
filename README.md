# RISE: Rare-book Inventory & Sales Ecosystem

## Project Overview
RISE is a digital transformation project designed to modernize rare bookstore operations. This platform integrates inventory management, a Point of Sale (POS) terminal, and procurement tracking into a secure, high-performance web application.

## Current Status: Sprint 0 (Envisioning & Planning)
The project is currently in the **Planning Phase**. This week's focus is on infrastructure setup, UI design systems, and backlog refinement. Full implementation is scheduled for Sprints 1 and 2.

## The Team

Daniel Rhoads (The Architect): Lead Developer & GitHub Administrator.

Vincent De Guzman (The Facilitator): Scrum Master & Project Manager.

James Mather (The Visionary): UI/UX Designer & Product Owner.

Robert Yribia (The Guardian): Testing & Security Lead (QA).

Lyiondra Bradley (Testing & Security Lead / QA): Quality Assurance, Document Automation (PowerShell), and Cloudinary API Integration.

Alyssa Brown (The Logic Architect): Backend Developer.

Gustavo Rosas (The Analyst): Documentation Lead & Business Analyst.

## Tech Stack (Prototyping)
* Frontend: HTML5, Bootstrap 5
* Styling: Custom CSS (Midnight Blue & Emerald Green)
* Logic: JavaScript (Local Storage for prototyping)

RISE System v2 — Sprint 2
Project Overview
The Rare Book Inventory and Sales Ecosystem (RISE) is a specialized digital platform designed to streamline the management and sale of rare literary works. This sprint focused on the Quality Assurance and testing phase, ensuring robust backend integration and user security.

🚀 Sprint 2 Deliverables
Live Build: https://lyiondra.github.io/RISE-System-v2/

Key Features Implemented:

Cloudinary API Integration: Automated image handling for rare book entries.

Kanban UI: A visual procurement board for inventory management.

Security Timer: A 15-minute inactivity logout for system protection.

Search Optimization: Indexed Author/Title for sub-2-second search results.

🛠 Installation & Setup
Clone the Repository: git clone https://github.com/lyiondra/RISE-System-v2.git

Database Connection: Ensure MongoDB is running locally or via Atlas.

One-Click Launch: Open the Launch_RISE.html file in your browser to instantly redirect to the live production build.

PDF Export: Run `npm install` and then `npm run export:readme-pdf` to generate `README.pdf` from this README.

📝 Retrospective Summary
What Went Well: * Developed a PowerShell automation script to sync Git commits and MongoDB counts directly into the master Excel document, eliminating manual entry errors.

Successful integration of Cloudinary for high-fidelity asset management.

Challenges: * Navigating system PATH issues for the MongoDB shell (mongosh).

Resolving #N/A errors in the Excel Burndown Chart caused by null data values.

Action Plan: Implement environment variable checks in the automation script to prevent future pathing errors across different team member machines.