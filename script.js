
function downloadPDF() {
  const filePath = "assets/Perdona_01.pdf"; // Update this path to the actual file location

  const link = document.createElement("a");
  link.href = filePath;
  link.download = "Perdona_A_Tu_Pueblo_Senor.pdf";
  link.click();
}

function downloadPDF_02() {
    
    const filePath = "assets/Perdona_02.pdf"; // Update this path to the actual file location
  
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "Perdona_A_Tu_Pueblo_Senor_02.pdf";
    link.click();
  }