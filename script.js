function showCategory(id){
  const sections = document.querySelectorAll('.category');
  sections.forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// Default open first category
document.addEventListener('DOMContentLoaded', ()=>{ showCategory('covers'); });


