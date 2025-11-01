/*content sections*/
function showContent(type) {
  const contentBox = document.getElementById("section-content");

  if (type === "student") {
    contentBox.innerHTML = `
      <h3>Student Sustainability Projects</h3>
      <p>Students are developing solutions in renewable energy, circular economy, and social impact initiatives.</p>
      <img src="assets/imgs/student.jpg" alt="Student Sustainability Projects">
    `;
  }
  else if (type === "faculty") {
    contentBox.innerHTML = `
      <h3>Faculty Leadership</h3>
      <p>Our faculty lead innovative research and teaching in sustainable business and climate finance.</p>
      <img src="assets/imgs/faculty.jpg" alt="Faculty Research">
    `;
  }
  else if (type === "donor") {
    contentBox.innerHTML = `
      <h3>Donor Impact</h3>
      <p>Donor contributions help advance sustainability research and fund student-driven innovation programs.</p>
      <img src="assets/imgs/donor.jpg" alt="Donor Impact">
    `;
  }
}
/*project form*/
const form = document.getElementById('projectForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const data = {
    name: form.name.value,
    description: form.description.value,
    team: form.team.value,
    category: form.category.value
  };

  console.log('Project submitted:', data);
  alert('Project submitted successfully!');
  form.reset();
});
