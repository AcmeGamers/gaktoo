const steps = [
  {
    title: "Internet Fundementals",
    desc: "Understand how computer works",
    imgURL:
      "https://res.cloudinary.com/teepublic/image/private/s--eA5p0kh1--/c_crop,x_10,y_10/c_fit,h_728/c_crop,g_north_west,h_827,w_1127,x_-199,y_-50/l_misc:transparent_1260/fl_layer_apply,g_north_west,x_-265,y_-262/c_mfit,g_north_east,u_misc:tapestry-l-s-gradient/e_displace,fl_layer_apply,x_0,y_34/l_upload:v1507037315:production:blanks:uue6kkaylik55suzvwsb/fl_layer_apply,g_north_west,x_0,y_0/b_rgb:000000/c_limit,f_auto,h_630,q_90,w_630/v1610716478/production/designs/18524878_0.jpg",
    course: "+123 456 789",
    mentor: "b@beyonce.com",
    student: "123",
  },
  {
    title: "HTML",
    imgURL:
      "https://res.cloudinary.com/teepublic/image/private/s--eA5p0kh1--/c_crop,x_10,y_10/c_fit,h_728/c_crop,g_north_west,h_827,w_1127,x_-199,y_-50/l_misc:transparent_1260/fl_layer_apply,g_north_west,x_-265,y_-262/c_mfit,g_north_east,u_misc:tapestry-l-s-gradient/e_displace,fl_layer_apply,x_0,y_34/l_upload:v1507037315:production:blanks:uue6kkaylik55suzvwsb/fl_layer_apply,g_north_west,x_0,y_0/b_rgb:000000/c_limit,f_auto,h_630,q_90,w_630/v1610716478/production/designs/18524878_0.jpg",
    course: "+987 654 321",
    mentor: "jack@nowhere.com",
    student: "123",
  },
  {
    title: "CSS",
    imgURL:
      "https://res.cloudinary.com/teepublic/image/private/s--eA5p0kh1--/c_crop,x_10,y_10/c_fit,h_728/c_crop,g_north_west,h_827,w_1127,x_-199,y_-50/l_misc:transparent_1260/fl_layer_apply,g_north_west,x_-265,y_-262/c_mfit,g_north_east,u_misc:tapestry-l-s-gradient/e_displace,fl_layer_apply,x_0,y_34/l_upload:v1507037315:production:blanks:uue6kkaylik55suzvwsb/fl_layer_apply,g_north_west,x_0,y_0/b_rgb:000000/c_limit,f_auto,h_630,q_90,w_630/v1610716478/production/designs/18524878_0.jpg",
    course: "+918 372 574",
    mentor: "gmail@chucknorris.com",
    student: "123",
  },
  {
    title: "JavaScript Fundementals",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    course: "+918 372 574",
    mentor: "gmail@chucknorris.com",
    student: "123",
  },
  {
    title: "JavaScript Advanced",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    course: "+918 372 574",
    mentor: "gmail@chucknorris.com",
    student: "123",
  },
  {
    title: "Version Control Systems - Github",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    course: "+918 372 574",
    mentor: "gmail@chucknorris.com",
    student: "123",
  },
  {
    title: "Web Security Knowledge",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    course: "+918 372 574",
    mentor: "gmail@chucknorris.com",
    student: "123",
  },
  {
    title: "Package Managers",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    course: "+918 372 574",
    mentor: "gmail@chucknorris.com",
    student: "123",
  },
  {
    title: "Build Tools",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    course: "+918 372 574",
    mentor: "gmail@chucknorris.com",
    student: "123",
  },
  {
    title: "Frameworks - Modern CSS",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    course: "+918 372 574",
    mentor: "gmail@chucknorris.com",
    student: "123",
  },
  {
    title: "Frameworks - React.js",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    course: "+918 372 574",
    mentor: "gmail@chucknorris.com",
    student: "123",
  },
  {
    title: "Frameworks - Angular",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    course: "+918 372 574",
    mentor: "gmail@chucknorris.com",
    student: "123",
  },
  {
    title: "Frameworks - Vue.js",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    course: "+918 372 574",
    mentor: "gmail@chucknorris.com",
    student: "123",
  },
  {
    title: "GraphQL Server",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    course: "+918 372 574",
    mentor: "gmail@chucknorris.com",
    student: "123",
  },
  {
    title: "Static Site Generator",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    course: "+918 372 574",
    mentor: "gmail@chucknorris.com",
    student: "123",
  },
  {
    title: "Mobile Application",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    course: "+918 372 574",
    mentor: "gmail@chucknorris.com",
    student: "123",
  },
  {
    title: "Desktop Application",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    course: "+918 372 574",
    mentor: "gmail@chucknorris.com",
    student: "123",
  },
  {
    title: "Keep Learning",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    course: "+918 372 574",
    mentor: "gmail@chucknorris.com",
    student: "123",
  }
];

export default steps;
