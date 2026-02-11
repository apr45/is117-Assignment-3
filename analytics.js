// analytics.js configuration for Google Analytics 4 tracking

// Function to initialize Google Analytics
function initGA() {
    // Replace 'G-XXXXXXXXXX' with your Google Analytics Measurement ID
    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
}

// Custom event tracking functions
function trackProjectClick(projectId) {
    gtag('event', 'project_click', { 'event_category': 'engagement', 'event_label': projectId });
}

function trackCTAClick(ctaId) {
    gtag('event', 'cta_click', { 'event_category': 'engagement', 'event_label': ctaId });
}

function trackFormSubmission(formId) {
    gtag('event', 'form_submission', { 'event_category': 'engagement', 'event_label': formId });
}

function trackNavigationClick(navigationId) {
    gtag('event', 'navigation_click', { 'event_category': 'engagement', 'event_label': navigationId });
}

function trackSectionVisibility(sectionId) {
    gtag('event', 'section_visibility', { 'event_category': 'engagement', 'event_label': sectionId });
}

// Initialize GA on page load
window.onload = initGA;