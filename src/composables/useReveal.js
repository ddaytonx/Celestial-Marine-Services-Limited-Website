/**
 * Common scroll reveal utility using IntersectionObserver
 * @param {string} selector - The CSS class to watch (default: '.reveal-section')
 * @param {number} threshold - How much of the element must be visible (0.0 to 1.0)
 */

export function useReveal(selector = '.reveal-section', threshold = 0.15) {
    const revealOnScroll = () => {
        const sections = document.querySelectorAll(selector)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active')
                        // Optional: Unobserve after revealing to save resources
                        // observer.unobserve(entry.target);
                    }
                })
            },
            { threshold },
        )

        sections.forEach((section) => observer.observe(section))
    }

    return { revealOnScroll }
}
