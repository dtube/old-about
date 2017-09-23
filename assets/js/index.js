var app = new Vue({
    el: '#app',
    data: {
        faq: [
            {
                question: 'How do I use DTube?',
                answer: 'Eligendi molestiae quasi et. Quas est quis consequuntur et. Qui iste enim impedit veniam itaque asperiores sed magni. Ut est fuga sit ut et in aliquid veniam. Exercitationem dolore.'
            },
            {
                question: 'How does DTube work?',
                answer: 'Eligendi molestiae quasi et. Quas est quis consequuntur et. Qui iste enim impedit veniam itaque asperiores sed magni. Ut est fuga sit ut et in aliquid veniam. Exercitationem dolore.'
            },
            {
                question: '...',
                answer: '...'
            },
            {
                question: '...',
                answer: '...'
            },
            {
                question: '...',
                answer: '...'
            }
        ],
        scrolled: false
    },
    created: function () {
        $(window).on('scroll', () => {
            this.scrolled = window.scrollY > 100
        })
    }
});