function copyAndOpen() {
    // Salin nomor rekening ke clipboard
    const rekeningText = "1341706144";
    navigator.clipboard.writeText(rekeningText).then(function() {
      alert('Nomor rekening berhasil disalin!');
      
      // Buka aplikasi BCA Mobile (contoh)
      // Ganti URL ini sesuai aplikasi yang ingin dibuka
      window.location.href = "bca://"; // Contoh skema untuk BCA Mobile, sesuaikan dengan kebutuhan
    }, function(err) {
      console.error('Gagal menyalin teks: ', err);
    });
  }
  