
function createFooter() {
    // Add html for footer, this is source of truth for footer content
    const footer = `
    <div class="footer">
        <p class="copyright">Copyright © 2024 One Small Step, Inc.</p>
    </div>
    `;
  
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footer;
    }
}
  
// Create Footer when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createFooter);