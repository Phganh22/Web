let soNgauNhien = Math.floor(Math.random() * 10) + 1;

function doanSo() {
  let nhap = parseInt(document.getElementById("soDoan").value);
  let ketQua = document.getElementById("ketQua");

  if (isNaN(nhap) || nhap < 1 || nhap > 10) {
    ketQua.textContent = "Vui lòng nhập số từ 1 đến 10!";
    return;
  }

  if (nhap === soNgauNhien) {
    ketQua.textContent = "🎉 Chúc mừng! Bạn đã đoán đúng số " + soNgauNhien;
    document.getElementById("btnDoan").disabled = true; // Tắt nút sau khi đoán đúng
  } else {
    ketQua.textContent = "Sai rồi 😅! Hãy thử lại.";
  }
}