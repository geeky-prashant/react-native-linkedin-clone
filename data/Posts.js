import Images from "../utils/Images";

export default Posts = [
  {
    profile_picture: Images.USERS.USER1,
    name: "Virag Kormoczy🌸",
    title: "Tech Enthusiast 💻 | Full-Stack Web Developer ☕ | Freelancer 🌍",
    timeAgo: 20, // hrs
    timeDuration: "h",
    connection: '1st', // which connection it is - 1st, 2nd, 3rd & handle the follow button with this param only.
    content: "In the last two days, I was working on the user authentication of the app. I'm learning a lot along the way, Supabase is a great BAAS, we could set up things quite fast with it in React. Also, today I integrated SendGrid with Supabase so we can have more control over the emails. 📧 I looked at other SMTPs like Resend, MailerSend, and AWS SES but SendGrid looked quite easy to set up and didn't require a domain so for now it's great for testing purposes.If you know any other SMTPs then let me know, maybe in my future projects I will use something different. 💡",
    hasImage: false, // hasImage or not
    shares: 0, // share count
    comments: 7,
    likes: 21, // like count
    isLiked: true, // is liked by current user or not
  },
  {
    profile_picture: Images.USERS.USER2,
    name: "Abhay kumar",
    title: "Software Engineer -Building Products to Drive Business Success || JAVA || SQL || AWS",
    timeAgo: 2, // hrs or week or month
    timeDuration: "w",
    connection: '1st', // which connection it is - 1st, 2nd, 3rd
    content: "🌐 𝐖𝐞𝐛𝐒𝐨𝐜𝐤𝐞𝐭𝐬: 𝐔𝐧𝐥𝐞𝐚𝐬𝐡𝐢𝐧𝐠 𝐑𝐞𝐚𝐥-𝐭𝐢𝐦𝐞 𝐖𝐞𝐛 𝐄𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞𝐬 🚀 Hey LinkedIn fam! 👋 Today I'm thrilled to shed light on an incredible technology that has revolutionized web communication: WebSockets! 🚀 🌐 𝐒𝐚𝐲 𝐆𝐨𝐨𝐝𝐛𝐲𝐞 𝐭𝐨 𝐖𝐚𝐢𝐭𝐢𝐧𝐠: 𝐓𝐡𝐞 𝐌𝐚𝐠𝐢𝐜 𝐨𝐟 𝐖𝐞𝐛𝐒𝐨𝐜𝐤𝐞𝐭𝐬 🌐 In the fast- paced world of web development, real - time communication is the key to delivering a dynamic user experience.Enter WebSockets, a game - changing technology that enables seamless bidirectional interactions between clients and servers, all within a persistent, single connection.With their low latency and event - driven design, WebSockets have taken the web by storm, powering everything from instant messaging apps to real - time financial data feeds.",
    hasImage: true, // hasImage or not
    postImage: Images.POSTS.POST1,
    shares: 0, // share count
    comments: 1,
    likes: 11, // like count
    isLiked: true, // is liked by current user or not
  },
  {
    profile_picture: Images.USERS.USER3,
    name: "Mohammed Abdul Raheem",
    title: "Frontend Developer",
    connection: '1st', // which connection it is - 1st, 2nd, 3rd
    timeAgo: 1, // hrs
    timeDuration: "mo",
    content: "🔥 Introducing my impressive Bonfire Product Page! 🔥 I'm thrilled to share the results of my hard work—a stunning product page that I've meticulously crafted using HTML, CSS, and JavaScript. 🚀",
    hasImage: true, // hasImage or not
    postImage: Images.POSTS.POST2,
    shares: 0, // share count
    comments: 6,
    likes: 25, // like count
    isLiked: true, // is liked by current user or not
  },
  {
    profile_picture: Images.USERS.USER4,
    name: "Soumen Bhunia",
    connection: '1st', // which connection it is - 1st, 2nd, 3rd
    title: "Engineering Student | Frontend Developer |MERN-stack Developer | UI/UX Designer | Interested in Graphics Designing",
    timeAgo: 3, // hrs
    timeDuration: "w",
    content: "it's glad to be there.",
    hasImage: true, // hasImage or not
    postImage: Images.POSTS.POST3,
    shares: 0, // share count
    comments: 0,
    likes: 6, // like count
    isLiked: true, // is liked by current user or not
  },
  {
    profile_picture: Images.USERS.USER5,
    name: "Olamide Oladele",
    connection: '2nd', // which connection it is - 1st, 2nd, 3rd
    title: "FRONT END Dev Html || css || JavaScript || MOBILE Dev || React-Native",
    timeAgo: 1, // hrs
    timeDuration: "mo",
    content: "Today, I want to give a big shoutout to the one and only Joshua Bature Hassan (PhD in-view) incredible lecturer in the Department of Computer Science Federal University Oye Ekiti, who's boldly taking on the Guinness World Record for the longest lecturing time of 150 hours.",
    hasImage: true, // hasImage or not
    postImage: Images.POSTS.POST4,
    shares: 0, // share count
    comments: 0,
    likes: 22, // like count
    isLiked: true, // is liked by current user or not
  },
  {
    profile_picture: Images.USERS.USER6,
    name: "Siddhant Tiwari",
    connection: '2nd', // which connection it is - 1st, 2nd, 3rd
    title: "CSE Aspirant | Aspiring Buddha | Political Strategist | Election Campaign Manager | Teacher | Content Writer | MA History, IGNOU | BA History ,DU",
    timeAgo: 1, // hrs
    timeDuration: "w",
    content: "A course on Time management.",
    hasImage: true, // hasImage or not
    postImage: Images.POSTS.POST5,
    shares: 0, // share count
    comments: 0,
    likes: 5, // like count
    isLiked: true, // is liked by current user or not
  },
]