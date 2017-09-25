let app = new Vue({
    el: '#app',
    data: {
        faq: [
            {
                question: 'How do I use DTube?',
                answer: `If you want to give likes, write comments or upload your own videos, you need an account. DTube uses the [steem plattform](https://steem.io). In order to create an account go to [https://steemit.com/pick_account](https://steemit.com/pick_account) and follow the registration steps.

Once your account is activated, you can login to DTube by entering the username you chose and your private **private posting key**. You can find this key in the permissions section in your profile page on steemit.com.
![Permissions](assets/img/profile-permissions.png)

<div class="alert alert-info"><b>Attention:</b> The key that is shown before you clicked on <b>SHOW PRIVATE KEY</b> (3) is just a placeholder.</div>

You can also login to multiple accounts and easily switch between them.

<center>![Multi User Login](assets/img/multi-user-login.png)</center>`
            },
            {
                question: 'How does DTube work?',
                answer: `<h3>Using the [STEEM](https://steem.io) Blockchain as a database</h3>

<center>![STEEM](assets/img/steem-logo.png)</center>

Because we want DTube to be truly decentralized, we cannot have a server running a database and use it to query things. Using a blockchain is a natural solution. STEEM has many advantages over other blockchains. It is fast (3 sec blocks). It is free, anyone can use it without having to deposit some form of currency, and transactions have no fees. Who would want to pay money to upload a video, comment a video, or even upvote? Nobody. As an added bonus, the STEEM blockchain already has a reward-earning mechanism. 

Any video uploaded on DTube becomes a STEEM content, that can earn rewards for 7 days. DTube doesn't use either the title or the body of a content to store information, therefore if you don't want your video upload to appear in your feed, you can edit or delete it, the video would stay intact on DTube. While it would be possible to display nothing on other platforms like steemit.com or busy.org, I believe the current behavior to be fine and will help the platform growth and the users rewards.

<h3>Using [IPFS](https://ipfs.io/) as a static file storage</h3>

<center>![IPFS](assets/img/ipfs-logo.png)</center>

IPFS is a protocol that enables decentralized file storage. The principle behind it is called Distributed Hash Tables (DHT). The same principle also powers the BitTorrent network. Just like how cryptocurrency uses asymmetrical cryptography, DHT networks will hash contents in order to be able to identify a file. The hash becomes the identifier of a file, and it's as easy as re-hashing a file and making sure the hashes match to ensure the file that was sent to us is the original. 

Why not use Torrent then? Torrent arguably already has more content and is more mainstream. However, Torrent was not built for the web. Some implementations such as WebTorrent are trying to make it work, but it still requires some 'hybrid' clients that would act as bridges in order to transfer files from hard clients such as μTorrent to web clients that run in a browser. Not very convenient, even less efficient. I am sure a lot of you have used PopcornTime to watch some 'pirated' content and have enjoyed it, but building something similar that runs inside a browser without having to run hybrid clients to connect people, is sadly impossible. 

IPFS is a younger, open-source, and actively developed protocol. It has a bright future ahead. Using it as the main mean of storage for this project was a no-brainer.`
            },
            {
                question: `Where does the money come from ?`,
                answer: ``
            },
            {
                question: 'My Private Posting Key is not Working What do I do ?',
                answer: `This shouldn't happen any more . However If you are still facing it changing browsers works , Opera , Chrome , Mozilla , Internet Explorer. If this method doesn't work please contact us in steemit.chat #dtube`
            },
            {
                question: 'I Keep Getting "Failed to Fetch File" error What do I need to do?',
                answer: `"Failed to Fetch File" error is a problem on our side. If it is not our side . Changing the API in the settings to fix that error helps. If you are getting this problem please contact us in Steemit.chat or try again later.`
            },
            {
                question: 'When I try to upload my video, the website crashes "Oops something gone Wrong" error occurs.',
                answer: `If your videos size is too big , You may face some problem like this. Lowering the quality or lenght helps to solve this problem. There is currently a upload limit in Dtube.`
            },
            {
                question: 'What is the Maximum File Upload Size in Dtube?',
                answer: `Currently you can upload up to 1.4GB size . You won't face with any problems up to 1.4GB sized files.`
            },
            {
                question: 'Why when I edit on steemit it doesnt change the text on DTube',
                answer: `...`
            },
            {
                question: `My video Doesn't load at all What do I need to do ?`,
                answer: `...`
            },
            {
                question: `Video starts then stops after some seconds `,
                answer: `...`
            },
            {
                question: `I got 0.001 $ on my video but didn't receive any Payments  What is the Problem ?`,
                answer: `...`
            },
            {
                question: `How many Videos Can I post?`,
                answer: `There aren't any limitations. However, you can post 1 video every 20 minutes like Steemit.`
            },
            {
                question: `Can I send Porn /NSFW on Dtube`,
                answer: `Yes you can. However you need to make adjustments from your account about NSFW content. You also need to tag your content accordingly (#nsfw) otherwise it will be flagged by the community, reducing your rewards.`
            }
        ],
        scrolled: false,
        remarkable: null
    },
    created: function () {
        $(window).on('scroll', () => {
            this.scrolled = window.scrollY > 100
        });
        this.remarkable = new Remarkable({html: true});
    },
    methods: {
        renderAnswer: function (answer) {
            return this.remarkable.render(answer);
        }
    }
});

$(function () {
    $(window).scroll();

    $("#nav").find("ul li a[href^='#']").on('click', function(e) {
        e.preventDefault();

        // store hash
        let hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: Math.max($(hash).offset().top - 100, 0)
        }, 300);

    });
});