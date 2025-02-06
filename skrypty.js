function copyCode(elementId) {
    const code = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(code)
      .then(() => {
        alert('Kod został skopiowany!');
      })
      .catch((error) => {
        alert('Wystąpił błąd podczas kopiowania kodu.');
        console.error('Błąd kopiowania:', error);
      });
  }
  