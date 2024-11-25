function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Timeline Initialization
document.addEventListener("DOMContentLoaded", () => {
    const timeline = document.getElementById("historical-timeline");
    if (timeline) {
        timeline.innerHTML = `
            <h3>Timeline</h3>
            <ul>
                <li>Pre-Industrial Era: Local subsistence farming was the norm.</li>
                <li>19th Century: Industrialization and refrigeration expanded food trade.</li>
                <li>20th Century: Convenience and variety became priorities.</li>
            </ul>
        `;
    }
});

