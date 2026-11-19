/* University editions of the AI Career Stress Test.
   Open a school's edition with ?school=<id>, for example https://ai-career-stress-test.github.io/?school=yu
   To add a school, copy the "yu" block, give it a new short id, and change the names, wording and links.
   status: "proposal" shows a notice that the school has not approved it yet. Change it to "partner" only after the school agrees in writing. */
window.SCHOOLS = {
  yu: {
    name: "Yeshiva University",
    center: "Shevet Glaubach Center for Career Strategy and Professional Development",
    short: "SGC",
    status: "proposal",
    home: "https://www.yu.edu/cdc",
    steps: [
      { when: "Before your appointment", tool: "Book an advisor on YU CareerLink", why: "Bring your one-page summary so the meeting starts from your results.", url: "https://www.yu.edu/cdc" },
      { when: "Your resume", tool: "Jobscan and the SGC Canvas Hub resume templates", why: "Add the skills from your plan, and match your resume to the jobs you want.", url: "https://www.yu.edu/cdc" },
      { when: "Interviews", tool: "Big Interview", why: "Practise stories that show your human edge: judgment, trust and leading people.", url: "https://www.yu.edu/cdc" },
      { when: "Research", tool: "Firsthand (Vault) industry guides", why: "See how employers in your industry are changing.", url: "https://www.yu.edu/cdc" },
      { when: "Experience", tool: "Parker Dewey micro-internships", why: "Short paid projects where you can use AI tools on real work.", url: "https://www.yu.edu/cdc" }
    ]
  }
};
