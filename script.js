const users = [
  {
    fullName: "Manvesh Bhoyar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqVnnEhCpdb6gEKnpl9O652XKMXFUFsW6Ng&s",
    profession: "Software Engineer",
    description: "Full-stack developer specializing in scalable web applications and backend architecture. Passionate about teaching system design and clean coding practices.",
    tags: ["Programming", "Web Development", "System Design", "JavaScript", "Backend"]
  },
  {
    fullName: "Neha Verma",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ8L7iafUCixm5jB0d9N73rQ921ANz-1-VGg&s",
    profession: "Data Scientist",
    description: "Data scientist focused on machine learning, data visualization, and AI applications in real-world problems. Loves simplifying complex concepts for beginners.",
    tags: ["Machine Learning", "Python", "AI", "Data Science", "Analytics"]
  },
  {
    fullName: "Rohan Kulkarni",
    image: "https://thumbs.dreamstime.com/b/mechanical-engineer-rgb-color-icon-professional-repairman-technician-to-work-facility-managing-heavy-machinery-manufacturing-186491778.jpg",
    profession: "Mechanical Engineer",
    description: "Mechanical engineer with experience in robotics and product design. Shares practical engineering knowledge and problem-solving techniques.",
    tags: ["Engineering", "Robotics", "Design", "Manufacturing", "STEM"]
  },
  {
    fullName: "Kabir Mehta",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavfUbKAVfJwwQ-BFiaR_c8TS72H8jFOlR-w&s",
    profession: "Finance Analyst",
    description: "Finance analyst explaining personal finance, investing fundamentals, and economic trends for students and young professionals.",
    tags: ["Finance", "Investing", "Economics", "Stock Market", "Personal Finance"]
  }
];

var sum = ''

users.forEach(function(elem){
    sum = sum + `<div class="card">
        <img src="${elem.image}" alt="">
        <h3>${elem.fullName}</h3>
        <h4>${elem.profession}r</h4>
        <p>${elem.description}</p>
       </div>`
})


var main = document.querySelector('main')

main.innerHTML = sum
