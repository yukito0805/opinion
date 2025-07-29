document.getElementById('severity').addEventListener('input', function() {
    document.getElementById('severityValue').textContent = this.value;
});

// 日付をYYYY-MM-DD形式で取得（JSTを保証）
function getCurrentDate() {
    const now = new Date();
    const offset = 9 * 60; // JSTはUTC+9
    const jstDate = new Date(now.getTime() + (offset * 60 * 1000));
    return jstDate.toISOString().split('T')[0];
}

// 症状アイテムを表示する関数
function displaySymptom(symptom, severity, date) {
    const symptomItem = document.createElement('div');
    symptomItem.className = 'symptom-item';
    
    const symptomName = document.createElement('div');
    symptomName.className = 'symptom-name';
    symptomName.textContent = symptom;
    
    const symptomBar = document.createElement('div');
    symptomBar.className = 'symptom-bar';
    
    const barFill = document.createElement('div');
    barFill.className = 'bar-fill';
    barFill.style.width = `${severity * 10}%`;
    
    const severityNumber = document.createElement('div');
    severityNumber.className = 'severity-number';
    severityNumber.textContent = severity;
    
    const symptomDate = document.createElement('div');
    symptomDate.className = 'symptom-date';
    symptomDate.textContent = date;
    
    symptomBar.appendChild(barFill);
    symptomItem.appendChild(symptomName);
    symptomItem.appendChild(symptomBar);
    symptomItem.appendChild(severityNumber);
    symptomItem.appendChild(symptomDate);
    
    document.getElementById('symptomList').appendChild(symptomItem);
}

// ページ読み込み時に保存されたデータを表示
document.addEventListener('DOMContentLoaded', function() {
    const savedSymptoms = JSON.parse(localStorage.getItem('symptoms')) || [];
    
    savedSymptoms.forEach(({ symptom, severity, date }) => {
        displaySymptom(symptom, severity, date);
    });
});

document.getElementById('symptomForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const symptom = document.getElementById('symptom').value;
    const severity = document.getElementById('severity').value;
    const date = getCurrentDate();
    
    // localStorageに保存
    const savedSymptoms = JSON.parse(localStorage.getItem('symptoms')) || [];
    savedSymptoms.push({ symptom, severity, date });
    localStorage.setItem('symptoms', JSON.stringify(savedSymptoms));
    
    // 画面に追加
    displaySymptom(symptom, severity, date);
    
    // フォームをリセット
    document.getElementById('symptomForm').reset();
    document.getElementById('severityValue').textContent = '1';
});
