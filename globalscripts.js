// Update Year 
  function updateYear() {
    const target = document.getElementById("ano");
    if (target) target.innerText = new Date().getFullYear();
  }

  updateYear();
