/*content sections*/
function showContent(section) {
  const contentDiv = document.getElementById('section-content');

  let content = '';

  if (section === 'student') {
    content = `
      <div class="content-block">
        <h2>Student Sustainability Initiatives</h2>
        <img src="assets/imgs/student.jpg" alt="Student initiatives" class="content-img">
        <p>Students at Gies are leading sustainability projects through campus initiatives, research, and innovation challenges.</p>
        <div class="graph">
          <img src="assets/imgs/student-graph.png" alt="Student data graph">
        </div>
      </div>
    `;
  } else if (section === 'faculty') {
    content = `
      <div class="content-block">
        <h2>Faculty Research Impact</h2>
        <p>Our faculty contribute cutting-edge research in sustainable finance, energy efficiency, and circular economy practices.</p>
        <div class="graph">
          <iframe src="https://example.com/faculty-graph" width="500" height="300" frameborder="0"></iframe>
        </div>
      </div>
    `;
  } else if (section === 'donor') {
    content = `
      <div class="content-block">
        <h2>Donor Contributions</h2>
        <p>Support from our donors helps fund green initiatives and sustainability education programs.</p>
        <div class="stats">
          <img src="assets/imgs/donor-stats.png" alt="Donor stats" class="content-img">
        </div>
      </div>
    `;
  }

  contentDiv.innerHTML = content;
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
