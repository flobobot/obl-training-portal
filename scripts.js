
function showModal(cocktail) {
  document.getElementById('modal').classList.remove('hidden');
  document.getElementById('modal-content').innerHTML = '<span onclick="closeModal()" class="close">&times;</span><h2>' + cocktail + '</h2><p>This is the full card for ' + cocktail + '.</p>';
}
function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}
