/*--Navigation Links---*/
const headerMenu = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Me",
    href: "/",
  },
  {
    title: "Work",
    href: "/",
  },
  {
    title: "Contact",
    href: "/",
  },
  {
    title: "Freebies",
    href: "/",
  },
];

/*--Feature 1--*/
const feature1 =[
  {
    title: "Instant Solutions",
    icon: "mdi mdi-star",
    desc: "You can relay on our amazing features list and also our customer services will be great experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique pellentesque ipsum.",
  },
  {
    title: "Powerful Techniques",
    icon: "mdi mdi-check-circle",
    desc: "You can relay on our amazing features list and also our customer services will be great experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique pellentesque ipsum.",
  },
];

/*--Feature 2--*/
const feature2 =[
  {
    title: "Make your website in no-time with us.",
    img: "img1.jpg",
  },
  {
    title: "Make your website in no-time with us.",
    img: "img2.jpg",
  },
  {
    title: "Make your website in no-time with us.",
    img: "img3.jpg",
  },
  {
    title: "Make your website in no-time with us.",
    img: "img4.jpg",
  },
];

/*--Portfolio--*/
const portfolio =[
  {
    img: "dumes-menuiseries.jpg",
    title: "Dumes menuiseries",
    subtext: "Digital Marketing",
  },
  {
    img: "interstellink.png",
    title: "Interstell'ink",
    subtext: "Admin templates",
  },
  {
    img: "saveursentremonts.jpg",
    title: "Saveurs entre monts",
    subtext: "Search Engine",
  },
  {
    img: "milbled-wimez.jpg",
    title: "Milbled Wimez",
    subtext: "Branding",
  },
  {
    img: "geiq.png",
    title: "Geiq - Emploi et handicap",
    subtext: "Search Engine",
  },
  {
    img: "immersion.jpg",
    title: "Immersion Vélo",
    subtext: "Search Engine",
  },
  {
    img: "vlc-construction.JPG",
    title: "VLC construction Steenvoorde",
    subtext: "Wll Mockup",
  },
  {
    img: "canondor.jpg",
    title: "Au canon d'or",
    subtext: "Search Engine",
  },
  {
    img: "clefenmain.jpg",
    title: "Clef en main",
    subtext: "Search Engine",
  },
  {
    img: "creditmutuel.png",
    title: "Crédit Mutuel",
    subtext: "Search Engine",
  },
  {
    img: "franchet.jpg",
    title: "Franchet",
    subtext: "Search Engine",
  },
{
	img: "sitio.jpg",
	title: "Sitio",
	subtext: "Search Engine",
},
  {
    img: "friterienouveaumonde.webp",
    title: "Fiterie du nouveau monde",
    subtext: "Search Engine",
  },
  {
    img: "hedicom.png",
    title: "Hedicom",
    subtext: "Search Engine",
  },
  {
    img: "valoxy.jpg",
    title: "Valoxy",
    subtext: "Search Engine",
  },
	{
		img: "adflandrespaysages.jpg",
		title: "AD Flandres Paysages",
		subtext: "Search Engine",
	},

];

/*--Pricing Plan--*/
const pricePlan =[
  {
    title: "Course à pied <br/> Route & Chemin",
    price: "10",
    unit: "km",
    plan: "YEARLY",
    desc:"(départ: 10h)",
    link: 'https://fr.milesrepublic.com/event/la-pradelloise-11274',
    buttoncolor:"yellow",
    image: '/images/lapradelloise/run.png'
  },
  {
    title: "Randonnée",
    price: ["8", "12"],
    unit: "km",
    plan: "YEARLY",
    desc:"(départ de 8h30 à 9h30)",
    link: 'https://fr.milesrepublic.com/event/la-pradelloise-11274',
    buttoncolor:"yellow",
    image: '/images/lapradelloise/walk.png'
  },
  {
    title: "Course enfants <br/> de 3 à 10 ans",
    price: "800",
    unit: "M",
    link: 'https://fr.milesrepublic.com/event/la-pradelloise-11274',
    plan: "YEARLY",
    desc:"(départ : 11h30 - 2€)",
    buttoncolor:"yellow",
    image: '/images/lapradelloise/kid.png'
  },
];

/*--Team--*/
const team =[
  {
    img: "t1.jpg",
    title: "BASTIEN DECLERCK",
    subtitle: "Président",
    desc: "Ancien gérant du \"Au K'haz Croûte\" Technico-commercial"
  },
	{
		img: "t5.jpg",
		title: "ANGÈLE DECLERCK",
		subtitle: "Communication",
		desc: "Esthéticienne"
	},
  {
    img: "t2.jpg",
    title: "AUDREY TOURSEL",
    subtitle: "Secrétaire",
    desc: "Responsable RH",
  },
  {
    img: "t3.jpg",
    title: "MAXENCE DUPIRE",
    subtitle: "Trésorier",
    desc: "Technico-commercial",
  }
];

/*--Testimonials--*/
const Testimonials =[
  {
    img: "1.jpg",
    testimonial:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.",
    name: "MICHELLE ANDERSON",
    socialicon: [
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-muted" },
    ],
  },
  {
    img: "2.jpg",
    testimonial:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.",
    name: "MARK MESTY",
    socialicon: [
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-muted" },
    ],
  },
  {
    img: "3.jpg",
    testimonial:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.",
    name: "LIMPSY ADAM",
    socialicon: [
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-error" },
      { icon: "mdi mdi-star text-muted" },
    ],
  },
];

/*--Blogs--*/
const Blog =[
  {
    img: "img1.jpg",
    title: "Learn from small things to create something bigger.",
    desc: "Business Park, Opp. Corns Sam Restaurant, New Yoark, US",
    month: "Oct",
    date: "23",
  },
  {
    img: "img2.jpg",
    title: "Learn from small things to create something bigger.",
    desc: "Business Park, Opp. Corns Sam Restaurant, New Yoark, US",
    month: "Oct",
    date: "23",
  },
  {
    img: "img3.jpg",
    title: "Learn from small things to create something bigger.",
    desc: "Business Park, Opp. Corns Sam Restaurant, New Yoark, US",
    month: "Oct",
    date: "23",
  },
];

export { headerMenu,feature1,feature2,portfolio,pricePlan,team,Testimonials,Blog};
