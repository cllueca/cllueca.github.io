// Portfolio category filter
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns  = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const sections     = document.querySelectorAll('.portfolio-section[id^="cat-"]');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (filter === 'all') {
                projectCards.forEach(c => c.classList.remove('hidden'));
                sections.forEach(s => s.style.display = '');
                return;
            }

            projectCards.forEach(card => {
                card.dataset.category === filter
                    ? card.classList.remove('hidden')
                    : card.classList.add('hidden');
            });

            sections.forEach(section => {
                const id = section.id.replace('cat-', '');
                section.style.display = id === filter ? '' : 'none';
            });
        });
    });
});
