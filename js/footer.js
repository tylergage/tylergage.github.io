
function createFooter() {
    // Add html for footer, this is source of truth for footer content
    const footer = `
    <div class="footer">
        <div class="footer-copyright">
            <p class="copyright">Copyright © 2024 One Small Step, Inc.</p>
        </div>
        <div class="footer-links">
            <p class="terms-and-conditions">Terms and Conditions</p>
            <p class="privacy-policy">Privacy Policy</p>
        </div>
    </div>
    `;
  
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footer;
    }
}
  
// Create Footer when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createFooter);