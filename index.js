// 24色のデータ
const colors = [
    { name: "Dark Skin", rgb: [115, 82, 68], hex: "#735244" },
    { name: "Light Skin", rgb: [194, 150, 130], hex: "#c29682" },
    { name: "Blue Sky", rgb: [98, 122, 157], hex: "#627a9d" },
    { name: "Foliage", rgb: [87, 108, 67], hex: "#576c43" },
    { name: "Blue Flower", rgb: [133, 128, 177], hex: "#8580b1" },
    { name: "Bluish Green", rgb: [103, 189, 170], hex: "#67bdaa" },
    { name: "Orange", rgb: [214, 126, 44], hex: "#d67e2c" },
    { name: "Purplish Blue", rgb: [80, 91, 166], hex: "#505ba6" },
    { name: "Moderate Red", rgb: [193, 90, 99], hex: "#c15a63" },
    { name: "Purple", rgb: [94, 60, 108], hex: "#5e3c6c" },
    { name: "Yellow Green", rgb: [157, 188, 64], hex: "#9dbc40" },
    { name: "Orange Yellow", rgb: [224, 163, 46], hex: "#e0a32e" },
    { name: "Blue", rgb: [56, 61, 150], hex: "#383d96" },
    { name: "Green", rgb: [70, 148, 73], hex: "#469449" },
    { name: "Red", rgb: [175, 54, 60], hex: "#af363c" },
    { name: "Yellow", rgb: [231, 199, 31], hex: "#e7c71f" },
    { name: "Magenta", rgb: [187, 86, 149], hex: "#bb5695" },
    { name: "Cyan", rgb: [8, 133, 161], hex: "#0885a1" },
    { name: "White", rgb: [243, 243, 242], hex: "#f3f3f2" },
    { name: "Neutral 8", rgb: [200, 200, 200], hex: "#c8c8c8" },
    { name: "Neutral 6.5", rgb: [160, 160, 160], hex: "#a0a0a0" },
    { name: "Neutral 5", rgb: [122, 122, 121], hex: "#7a7a79" },
    { name: "Neutral 3.5", rgb: [85, 85, 85], hex: "#555555" },
    { name: "Black", rgb: [52, 52, 52], hex: "#343434" }
];

// 24色カラーチャートを生成
function generateColorChart() {
    const colorChart = document.getElementById('colorChart');

    colors.forEach((color, index) => {
        const colorSquare = document.createElement('div');
        colorSquare.className = 'color-square';
        colorSquare.style.backgroundColor = color.hex;

        const colorInfo = document.createElement('div');
        colorInfo.className = 'color-info';
        colorInfo.innerHTML = `
                    <div style="font-size: 10px; margin-bottom: 2px;">${index + 1}. ${color.name}</div>
                    <div style="font-size: 9px;">RGB: ${color.rgb.join(', ')}</div>
                    <div style="font-size: 9px;">${color.hex}</div>
                `;

        colorSquare.appendChild(colorInfo);
        colorChart.appendChild(colorSquare);
    });
}

// 全画面表示
function showFullscreen(type) {
    const overlay = document.getElementById('fullscreenOverlay');
    const content = document.getElementById('fullscreenContent');

    if (type === 'gradient') {
        content.innerHTML = `
                    <div style="display: flex; flex-direction: column; height: 100vh; max-height: none;">
                        <div class="cyan-to-white">
                        </div>
                        <div class="gradient-strip magenta-to-white" style="flex: 1; display: flex; align-items: center; justify-content: flex-end; padding-right: 30px;">
                        </div>
                        <div class="gradient-strip yellow-to-white" style="flex: 1; display: flex; align-items: center; justify-content: flex-end; padding-right: 30px;">
                        </div>
                        <div class="gradient-strip red-to-white" style="flex: 1; display: flex; align-items: center; justify-content: flex-end; padding-right: 30px;">
                        </div>
                        <div class="gradient-strip green-to-white" style="flex: 1; display: flex; align-items: center; justify-content: flex-end; padding-right: 30px;">
                        </div>
                        <div class="gradient-strip blue-to-white" style="flex: 1; display: flex; align-items: center; justify-content: flex-end; padding-right: 30px;">
                        </div>
                        <div class="gradient-strip red-to-black" style="flex: 1; display: flex; align-items: center; justify-content: flex-end; padding-right: 30px;">
                        </div>
                        <div class="gradient-strip green-to-black" style="flex: 1; display: flex; align-items: center; justify-content: flex-end; padding-right: 30px;">
                        </div>
                        <div class="gradient-strip blue-to-black" style="flex: 1; display: flex; align-items: center; justify-content: flex-end; padding-right: 30px;">
                        </div>
                        <div class="gradient-strip cyan-to-black" style="flex: 1; display: flex; align-items: center; justify-content: flex-end; padding-right: 30px;">
                        </div>
                        <div class="gradient-strip magenta-to-black" style="flex: 1; display: flex; align-items: center; justify-content: flex-end; padding-right: 30px;">
                        </div>
                        <div class="gradient-strip yellow-to-black" style="flex: 1; display: flex; align-items: center; justify-content: flex-end; padding-right: 30px;">
                        </div>
                    </div>
                `;
    } else if (type === 'colors') {
        content.innerHTML = `
        <div class="fullscreen-color-chart">
            ${colors.map((color, index) => `
                <div class="fullscreen-color-square" style="background-color: ${color.hex};"></div>
            `).join('')}
        </div>
    `;
    }
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 全画面を閉じる
function closeFullscreen() {
    const overlay = document.getElementById('fullscreenOverlay');
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ESCキーで全画面を閉じる
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeFullscreen();
    }
});

// ページ読み込み時に24色チャートを生成
generateColorChart();