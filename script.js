function showContent(id) {
  const content = {
    content1: "We create powerful, modern digital experiences for our clients.",
    content2: "Check out our latest innovative projects that redefine creativity.",
    content3: "Meet our passionate team of designers, developers, and dreamers.",
  };
  document.getElementById('section-content').textContent = content[id];
}
