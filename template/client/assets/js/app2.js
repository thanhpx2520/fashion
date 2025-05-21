const images = ["slider1.webp", "slider2.webp", "slider3.webp", "slider4.webp", "slider5.webp"];

const positions = [1, 2, 3, 4, 5];

const publics = [true, true, true, true, true];

const sliders = [];

for (let i = 0; i < 5; i++) {
  sliders.push({
    image: images[i],
    position: positions[i],
    public: publics[i],
  });
}

// console.log(sliders);

// // const data = generateRandomProducts(1000);

// console.log(sliders);

// // Chuyển dữ liệu thành JSON string
// const json = JSON.stringify(sliders, null, 2);

// // Tạo file blob
// const blob = new Blob([json], { type: "application/json" });

// // Tạo đường dẫn download
// const url = URL.createObjectURL(blob);

// // Tạo thẻ <a> ẩn để tải xuống
// const a = document.createElement("a");
// a.href = url;
// a.download = "users.json"; // Tên file tải về
// a.click(); // Tự động click để tải

// // Dọn dẹp
// URL.revokeObjectURL(url);
