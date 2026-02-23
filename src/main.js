// 1. Configuration: Path to the project markdown file
const PROJECT_PATH = '/is117-Assignment-3/it286Project.md';

/**
 * Simple Markdown to HTML Parser
 * Converts basic MD syntax (Headers, Bullets, Bold) into semantic HTML.
 */
function parseMarkdown(text) {
    return text
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^\* (.*$)/gim, '<ul><li>$1</li></ul>')
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        .replace(/\n/gim, '<br>');
}

/**
 * Core Logic: Fetch and Render
 * Pulls the content from the .md file and injects it into the DOM.
 */
async function loadProjectContent() {
    const contentContainer = document.getElementById('md-content');

    try {
        const response = await fetch(PROJECT_PATH);
        
        if (!response.ok) {
            throw new Error('Failed to load project documentation.');
        }

        const rawText = await response.text();
        
        // Inject the parsed HTML into the index.html hook
        contentContainer.innerHTML = parseMarkdown(rawText);

        // Cleanup: Fix fragmented <ul> tags created by the regex
        contentContainer.innerHTML = contentContainer.innerHTML.replace(/<\/ul><ul>/gim, '');

    } catch (error) {
        console.error('Lead Engineer Error:', error);
        contentContainer.innerHTML = `<p class="error">Status: Documentation temporarily unavailable. Please contact at the link below.</p>`;
    }
}

// Initialize rendering on page load
document.addEventListener('DOMContentLoaded', loadProjectContent);
