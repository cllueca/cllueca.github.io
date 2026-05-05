// Blog category filter
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const postCards  = document.querySelectorAll('.post-card');
    const sections   = document.querySelectorAll('.blog-section[id^="cat-"]');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            // Active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (filter === 'all') {
                postCards.forEach(c => c.classList.remove('hidden'));
                sections.forEach(s => s.style.display = '');
                return;
            }

            // Show/hide cards
            postCards.forEach(card => {
                card.dataset.category === filter
                    ? card.classList.remove('hidden')
                    : card.classList.add('hidden');
            });

            // Show/hide whole sections
            sections.forEach(section => {
                const id = section.id.replace('cat-', '');
                section.style.display = id === filter ? '' : 'none';
            });
        });
    });
});
