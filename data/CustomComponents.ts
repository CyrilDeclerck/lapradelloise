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
    img: "vlc-construction.JPG",
    title: "VLC construction Steenvoorde",
    subtext: "Wll Mockup",
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
];

/*--Pricing Plan--*/
const pricePlan =[
  {
    title: "Course à pied",
    price: "10",
    unit: "km",
    plan: "YEARLY",
    desc:"Course à pied chronométrée avec puces",
    buttoncolor:"primary",
    image: '/images/lapradelloise/run.png'
  },
  {
    title: "Randonnée pédestre",
    price: ["8", "12"],
    unit: "km",
    plan: "YEARLY",
    desc:"",
    buttoncolor:"error",
    image: '/images/lapradelloise/walk.png'
  },
  {
    title: "Course à pied pour enfants",
    price: "800m",
    unit: "M",
    plan: "YEARLY",
    desc:"non chronométrée",
    buttoncolor:"primary",
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
